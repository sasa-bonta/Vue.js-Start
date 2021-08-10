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
            let appender = link.includes('?') ? '&' : '?'
            const products = await fetch(`/api/products?link=${link}${appender}page=${page}`)
            if (page > 1) {
                store.commit('mutateAppendList',await products.json())
            } else {
                store.commit('mutateList', await products.json())
            }
            store.commit('mutateLoading', false)
        },
    },
    mutations: {
        mutateList(state, payload) {
            state.list = payload
        },
        mutateAppendList(state, payload) {
            state.list = state.list.concat(payload)
        },
        mutateLoading(state, payload) {
            state.isLoading = payload
        },
    },
}