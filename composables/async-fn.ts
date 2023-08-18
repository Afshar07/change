import { tryOnUnmounted } from '@vueuse/core';

export type PromiseResult<T> = T extends Promise<infer U> ? U : T

export interface AsyncState<T extends (...args: any[]) => any, U extends Error = any, ReturnResult = PromiseResult<ReturnType<T>>> {
  loading: boolean
  data: ReturnResult | null
  error: U | null
  promise: Promise<ReturnResult> | undefined
  call: (...params: Parameters<T>) => Promise<ReturnResult>
  cancel: () => void
  reset: () => void
}

interface UseAsyncOptions {
  noReset?: boolean
}

/**
 * gets a async function and exposes reactive states
 *
 * @param fn
 * @param initialData
 * @param options
 */
export function useAsyncFn<T extends (
  ...args: any[]) => any, U = any>(
    fn: T,
    initialData: any = null,
    options: UseAsyncOptions = {},
): AsyncState<T> {
    type ReturnResult = PromiseResult<ReturnType<T>>
    const state = reactive<AsyncState<T>>({
        loading: false,
        data: initialData as ReturnResult | null,
        error: null as U | null,
        promise: undefined as Promise<ReturnResult> | undefined,
        cancel () {
            if ((state.promise as any)?.cancel) (state.promise as any).cancel();
        },
        async call (...params: Parameters<T>): Promise<ReturnResult> {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            !options?.noReset && state.reset();
            state.loading = true;
            try {
                state.promise = Promise.resolve().then(() => fn(...params));
                const data = await state.promise!;
                (state.data as typeof data) = data;
                state.error = null;
                return data;
            } catch (err) {
                state.error = err;
                throw err;
            } finally {
                state.loading = false;
            }
        },
        reset () {
            state.loading = false;
            state.data = null;
            state.error = null;
        },
    });

    // Try to cancel onUnmount if used inside component
    tryOnUnmounted(() => {
        state.cancel();
    });

    return state as any;
}

// Automatically makes the first call to async function when .data is used
export const useAsyncFnAuto: typeof useAsyncFn = (fn, initialData, options) => {
    const state = useAsyncFn(fn, initialData, options);
    return new Proxy(state, {
        get: (target: typeof state, key: keyof typeof state) => {
            if (key === 'data' && !target.promise && fn.length === 0) {
                // @ts-expect-error
                target.call();
                return state.data;
            }
            return state[key];
        },
    });
};

export const useAnyAsyncFn = <T extends (...args: any[]) => any>() => useAsyncFn((fn: T) => fn());

export type AsyncFunctions<T extends Record<string, (...args: any[]) => any>> = {
  [U in keyof T]: AsyncState<T[U]>;
} & {
  loading: number
}

/**
 * gets map of async functions and exposes map of reactive states,
 * plus a loading number indicating how many of them are in loading state
 * @param map
 */
export function useAsyncFns<T extends Record<string, (...args: any[]) => any>>(map: T): AsyncFunctions<T> {
    let result = Object.keys(map).reduce((carry, key) => ({
        ...carry,
        [key]: useAsyncFn(map[key]),
    }), {} as any);

    const keys = Object.keys(result);
    result = reactive(result);

    // Count the loadings (reactive)
    watchEffect(() => {
        result.loading = keys.reduce((carry, key) => carry + (result[key].loading ? 1 : 0), 0);
    });

    return result;
}

/**
 * Works like useAsyncFn but data would be initially loaded from cache and revalidated
 * @param key
 * @param fn
 */
export function useSWR<T extends (...args: any[]) => any>(key: string, fn: T) {
    return useAsyncFn(async () => {
        const result = await fn();
        localStorage.setItem(`swr_${key}`, JSON.stringify(result));
        return result;
    }, localStorage.getItem(`swr_${key}`));
}
