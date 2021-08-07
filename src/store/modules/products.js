export default {
    namespaced: true,
    state: {

    },
    getters: {

    },
    actions: {
        loadProducts(store, payload) {
            fetch(payload)
        }
    },
    mutations: {

    },
}