import { watchDebounced } from '@vueuse/core';

export enum RecentlyHistoryKey {
    'deposit' = 'deposit',
    'withdraw' = 'withdraw'
}

const MAX_STORAGE_LENGTH = 6;

export type CacheRef<T> = Ref<T> & { clear: () => void }
export function useCacheRef<T> (key: string, value: T, store: Storage | null = null): CacheRef<T> {
    let storage = store;
    if (!storage) {
        storage = typeof window !== 'undefined' ? window.sessionStorage || window.localStorage : null;
    }
    const _ref = ref(value) as unknown as CacheRef<T>;
    if (storage) {
        const item = storage.getItem(`cacheRef_${key}`);
        if (item) {
            _ref.value = JSON.parse(item);
        }

        watchDebounced(_ref, x => {
            storage!.setItem(`cacheRef_${key}`, JSON.stringify(x));
        }, { debounce: 1000, deep: true });
    }
    _ref.clear = () => {
        storage?.removeItem(`cacheRef_${key}`);
    };
    return _ref;
}

export const useRecentlyHistory = (key:RecentlyHistoryKey) => {
    const STORAGE_KEY = `recently-${key}`;
    const historyRef = useCacheRef<string[]>(STORAGE_KEY, [], window.localStorage);

    function appendHistory (value: string) {
        const newValue = [
            (historyRef.value.find((h: string) => h === value) ? null : value),
            ...historyRef.value,
        ].filter(Boolean) as Array<string>;

        if (newValue.length > MAX_STORAGE_LENGTH) {
            newValue.pop();
        }

        historyRef.value = newValue;
    }

    function clearAllHistory () {
        historyRef.value = [];
    }

    return {
        histories: historyRef,
        appendHistory,
        clearAllHistory,
    };
};
