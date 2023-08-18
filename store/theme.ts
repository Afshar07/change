export const useThemeStore = definePiniaStore('theme-store', () => {
    const colorMode = useColorMode();
    const { t } = useI18n();
    const currentTheme = computed(() => availableThemes.find(theme => theme.value === colorMode.value));
    const availableThemes = [
        { title: t('common.theme.dark'), value: 'dark', icon: 'mdi-moon-waning-crescent' },
        { title: t('common.theme.light'), value: 'light', icon: 'mdi-white-balance-sunny' },
        { title: t('common.theme.system'), value: 'system', icon: 'mdi-laptop' },
    ];

    const isDark = computed(() => colorMode.value === 'dark');
    const isLight = computed(() => colorMode.value === 'light');
    function toggleTheme (theme: string) {
        colorMode.preference = theme;
    }

    return {
        isDark,
        isLight,
        currentTheme,
        availableThemes,
        toggleTheme,
    };
});
