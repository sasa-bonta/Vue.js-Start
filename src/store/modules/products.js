import {Base64} from 'js-base64'

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
            let params = Base64.encode(`${link}${appender}page=${page}`)
            let products = await fetch(`/api/products?linkBase64=${params}`)
            products = await products.json()
            store.commit('productHistory/mutateItem', products, {root: true})
            if (page > 1) {
                store.commit('mutateAppendList', products)
            } else {
                store.commit('mutateList', products)
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
        setList(state, payload) {
            state.list = payload
        },
    },
}