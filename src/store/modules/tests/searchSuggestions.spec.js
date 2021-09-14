import Vue from "vue";
import Vuex from "vuex";
import searchSuggestions from "../searchSuggestions";

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {searchSuggestions}
})

describe('searchSuggestions', () => {
    it('should have default search undefined', () => {
        // why expected([]) doesn't work ???
        expect(store.getters['searchSuggestions/getSuggestions']).toHaveLength(0)
    })
    it('should have default isSearchSuggestionsLoading false', () => {
        expect(store.getters['searchSuggestions/getIsSearchSuggestionsLoading']).toBeFalsy()
    })
    it('should change the loading to true', () => {
        store.commit('searchSuggestions/mutateIsSearchSuggestionsLoading', true)
        expect(store.getters['searchSuggestions/getIsSearchSuggestionsLoading']).toBeTruthy()
    });
    it('should change the search', () => {
        let testData = ["test", "banane", "fara packet"]
        store.commit('searchSuggestions/mutateSearchSuggestions', testData)
        expect(store.getters['searchSuggestions/getSuggestions']).toBe(testData)
    })
    // 999.appetit.md doesn't work
    // it('should return', () => {
    //     let result = store.dispatch('suggestions/showSuggestions', "mer")
    //     expect(result[0]).toBe('mercedes')
    //     expect(result).toHaveLength(10)
    // })
})