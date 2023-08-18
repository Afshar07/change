export default defineNuxtRouteMiddleware(to => {
    const { $auth } = useNuxtApp();
    if (to.path !== '/login') {
        if (!$auth.$state.loggedIn) {
            return navigateTo('/auth/login');
        }
    }
});
