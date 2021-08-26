import {Base64} from 'js-base64'
import {fetchProducts} from "../../api/999";

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
            const params = Base64.encode(`${link}${appender}page=${page}`)
            const products = await fetchProducts(params)
            store.commit('productHistory/mutateItem', products.data, {root: true})
            if (page > 1) {
                store.commit('mutateAppendList', products.data)
            } else {
                if (link) {
                    store.commit('mutateList', products.data)
                }
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