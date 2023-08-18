export interface ToastOption {
    text: string;
    shown: boolean;
    action?: () => ReturnType<typeof h>;
    onClose?: () => void;
    timeout?: number;
}

export const useToast = definePiniaStore('toast-store', () => {
    const toast = reactive<ToastOption>({
        shown: false,
        text: '',
    });

    const hasShowToast = computed(() => toast.shown);
    const toastText = computed(() => toast.text);

    const toastOption = computed(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { text, ...options } = toast;
        return options;
    });

    const showToast = (text: string, options?: Omit<ToastOption, 'shown' | 'text'>) => {
        Object.assign(toast, {
            text,
            shown: true,
            ...options,
        });
    };

    function close () {
        toast.shown = false;
    }

    return {
        hasShowToast,
        toastText,
        toastOption,
        showToast,
        close,
    };
});
