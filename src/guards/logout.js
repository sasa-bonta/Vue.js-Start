import routes from "../routes";
import store from "../store";

routes.beforeEach((to, from, next) => {
    if (!store.getters['auth/getIsAuthorized'] && to.matched[0].path.includes('dashboard')) {
        next({name: 'login'})
    }
    next()
})

