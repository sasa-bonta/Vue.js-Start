import {Base64} from 'js-base64'
import {fetchProducts} from "../../api/999";

export const state = {
    list: [],
    isLoading: false,
}

export default {
    namespaced: true,
    state,
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
                store.commit('mutateList', products.data)
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