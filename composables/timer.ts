import { tryOnUnmounted, useIntervalFn } from '@vueuse/core';

export const useTimer = (expireTimeStamp: Ref<number> | ComputedRef<number>) => {
    const time = ref<string>('');

    const { pause, resume: _resume, isActive } = useIntervalFn(() => {
        const seconds = expireTimeStamp.value - Number((Date.now() / 1000).toFixed(0));
        if (seconds <= 0) {
            pause();
        }
        time.value = formatSeconds(seconds);
    }, 1000);

    function formatSeconds (seconds: number) {
        // @ts-ignore
        // eslint-disable-next-line radix
        const min = parseInt(seconds / 60);
        // @ts-ignore
        // eslint-disable-next-line radix
        const sec = parseInt(seconds % 60);

        if (min === 0 && sec === 0) {
            pause();
        }
        return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`.replaceAll('"', '');
    }

    tryOnUnmounted(pause);

    return {
        resume () {
            if (expireTimeStamp.value !== 0) {
                _resume();
            }
        },
        pause,
        isActive,
        time,
    };
};
