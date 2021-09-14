export default {
    namespaced: true,
    state: {
        isAuthorized: false,
    },
    getters: {
        getIsAuthorized: (state) => state.isAuthorized,
    },
    actions: {
        login(store, {username}) {
            store.commit('mutateUsername', username)
            store.commit('mutateIsAuthorized', true)
        },
        logout(store) {
            store.commit('mutateIsAuthorized', false)
        }
    },
    mutations: {
        mutateIsAuthorized(store, payload) {
            store.isAuthorized = payload
        },
        mutateUsername(store, payload) {
            store.email = payload
        }
    },
}