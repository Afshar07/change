export default defineNuxtRouteMiddleware(() => {
    const { $auth } = useNuxtApp();
    const localePath = useLocalePath();

    if ($auth.$state.loggedIn) {
        return navigateTo(localePath('/dashboard'));
    }
});
