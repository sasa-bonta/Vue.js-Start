export default {
    namespaced: true,
    state: {
        list: [],
        isLoading: false,
        search: {},
        isSearchSuggestionsLoading: false,
    },
    getters: {
        getList: (state) => state.list,
        getIsLoading: (state) => state.isLoading,
        getSuggestions: (state) => state.search?.suggestions ?? [],
        getIsSearchSuggestionsLoading: (state) => state.isSearchSuggestionsLoading,
    },
    actions: {
        async loadProducts(store, {link, page = 1}) {
            store.commit('mutateLoading', true)
            let appender = link.includes('?') ? '&' : '?'
            const products = await fetch(`/api/products?link=${link}${appender}page=${page}`)
            if (page > 1) {
                store.commit('mutateAppendList', await products.json())
            } else {
                store.commit('mutateList', await products.json())
            }
            store.commit('mutateLoading', false)
        },
        async showSuggestions(store, payload) {
            store.commit('mutateIsSearchSuggestionsLoading', true)
            let suggestions = await fetch(`/api/suggestions?query=${payload}`)
            store.commit('mutateSearchSuggestions', await suggestions.json())
            store.commit('mutateIsSearchSuggestionsLoading', false)
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
        mutateSearchSuggestions(state, payload) {
            state.search = payload
        },
        mutateIsSearchSuggestionsLoading(state, payload) {
            state.isSearchSuggestionsLoading = payload
        },
    },
}