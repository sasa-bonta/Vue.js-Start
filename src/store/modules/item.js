import {fetchItem} from "../../api/999";

export const state = {
    item: {},
    isLoading: false,
}

export default {
    namespaced: true,
    state,
    getters: {
        getItem: ({item}) => item,
        getIsLoading: (state) => state.isLoading,
    },
    actions: {
        async loadItem(store, payload) {
            store.commit('mutateLoading', true)
            const item = await fetchItem(`/ru/${payload}`)
            store.commit('mutateItem', await item.data)
            store.commit('mutateLoading', false)
        }
    },
    mutations: {
        mutateLoading(state, payload) {
            state.isLoading = payload
        },
        mutateItem(state, payload) {
            state.item = payload
        }
    },
}