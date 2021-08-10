export default {
    namespaced: true,
    state: {
        list: [],
        isLoading: false,
    },
    getters: {
        getList: (state) => state.list,
        getIsLoading: (state) => state.isLoading,
    },
    actions: {
        async loadProducts(store, {link, page = 1}) {
            store.commit('mutateLoading', true)
            const products = await fetch(`/api/products?link=${link}?page=${page}`)
            store.commit('mutateList', await products.json())
            store.commit('mutateLoading', false)
        },
    },
    mutations: {
        mutateList(state, payload) {
            state.list = payload
        },
        mutateLoading(state, payload) {
            state.isLoading = payload
        },
    },
}