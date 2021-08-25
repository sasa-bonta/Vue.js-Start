import {fetchItem} from "../../api/999";

export default {
    namespaced: true,
    state: {
        item: {},
        isLoading: false,
    },
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