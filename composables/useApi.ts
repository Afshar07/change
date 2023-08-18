import type { NitroFetchRequest } from 'nitropack';
import type { KeysOf } from 'nuxt/dist/app/composables/asyncData';
import type { UseFetchOptions } from '#app';

export function useApi<T> (
    request: NitroFetchRequest,
    opts?: UseFetchOptions<T extends void ? unknown : T, T extends void ? unknown : T, KeysOf<T extends void ? unknown : T>, NitroFetchRequest, 'get'> | undefined,
) {
    const { $api } = useNuxtApp();

    // @ts-ignore
    return useFetch<T>(request, {
        $fetch: $api,
        ...opts,
    });
}
export function useLazyApi<T> (
    request: NitroFetchRequest,
    opts?: UseFetchOptions<T extends void ? unknown : T, T extends void ? unknown : T, KeysOf<T extends void ? unknown : T>, NitroFetchRequest, 'get'> | undefined,
) {
    const { $api } = useNuxtApp();
    // @ts-ignore
    return useLazyFetch<T>(request, {
        $fetch: $api,
        ...opts,
    });
}
