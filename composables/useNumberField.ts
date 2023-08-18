export const useNumberField = (numVar: Ref<number | null>) => {
    const tempComputed = computed<string>({
        set (value) {
            if (!value) return;
            // eslint-disable-next-line no-param-reassign
            numVar.value = Number(String(value).replaceAll(',', ''));
        },
        get () {
            if (!numVar.value) return '0';
            return formatter.format(numVar.value);
        },
    });

    return { tempComputed };
};
