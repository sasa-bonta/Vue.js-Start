export default {
    namespaced: true,
    state: {
        isAuthorized: false,
        username: '',
    },
    getters: {
        getIsAuthorized: (state) => state.isAuthorized,
        getUsername: (state) => state.username,
    },
    actions: {
        login(store, {username}) {
            store.commit('mutateUsername', username)
            store.commit('mutateIsAuthorized', true)
        },
        logout(store) {
            store.commit('mutateUsername', null)
            store.commit('mutateIsAuthorized', false)
        }
    },
    mutations: {
        mutateIsAuthorized(store, payload) {
            store.isAuthorized = payload
        },
        mutateUsername(store, payload) {
            store.username = payload
        }
    },
}