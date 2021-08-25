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
            let suggestions = await fetchSuggestions(payload)
            // console.log(suggestions.data?.suggestions)
            // let suggestions = await fetch(`/api/suggestions?query=${payload}`)
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