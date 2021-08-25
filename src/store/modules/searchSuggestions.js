import {fetchSuggestions} from "../../api/999";

export default {
    namespaced: true,
    state: {
        search: [],
        isSearchSuggestionsLoading: false,
    },
    getters: {
        getSuggestions: (state) => state.search ?? [],
        getIsSearchSuggestionsLoading: (state) => state.isSearchSuggestionsLoading,
    },
    actions: {
        async showSuggestions(store, payload) {
            store.commit('mutateIsSearchSuggestionsLoading', true)
            const suggestions = await fetchSuggestions(payload)
            store.commit('mutateSearchSuggestions', await suggestions.data?.suggestions)
            store.commit('mutateIsSearchSuggestionsLoading', false)
        },
    },
    mutations: {
        mutateSearchSuggestions(state, payload) {
            state.search = payload
        },
        mutateIsSearchSuggestionsLoading(state, payload) {
            state.isSearchSuggestionsLoading = payload
        },
    },
}