import Vue from "vue";
import Vuex from "vuex";
import {state} from "../searchSuggestions"
import searchSuggestions from "../searchSuggestions";
import {fetchSuggestions} from "../../../api/999";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {searchSuggestions}
})

jest.mock("../../../api/999", () => ({
    fetchSuggestions: jest.fn()
}))

describe('searchSuggestions', () => {
    it('should have default search undefined', () => {
        expect(store.getters['searchSuggestions/getSuggestions']).toEqual(state.search)
        expect(store.getters['searchSuggestions/getIsSearchSuggestionsLoading']).toEqual(state.isSearchSuggestionsLoading)

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
    it('should return list of suggestions', async () => {
        const suggestionsTestList = {
            data: {
                suggestions: ['mercedes', 'mercedes e class', 'mercedes vito']
            }
        }
        fetchSuggestions.mockReturnValue(suggestionsTestList)
        const suggestions = store.dispatch('searchSuggestions/showSuggestions', "mer")
        expect(fetchSuggestions).toBeCalledWith('mer')
        expect(store.getters['searchSuggestions/getIsSearchSuggestionsLoading']).toBeTruthy()
        await suggestions
        expect(store.getters['searchSuggestions/getIsSearchSuggestionsLoading']).toBeFalsy()
        expect(store.getters['searchSuggestions/getSuggestions']).toEqual(suggestionsTestList.data.suggestions)
    })
    it('should return empty list', async () => {
        const suggestionsTestList = {
            data: {}
        }
        fetchSuggestions.mockReturnValue(suggestionsTestList)
        const suggestions = store.dispatch('searchSuggestions/showSuggestions', "i don't know")
        expect(fetchSuggestions).toBeCalledWith('mer')
        expect(store.getters['searchSuggestions/getIsSearchSuggestionsLoading']).toBeTruthy()
        await suggestions
        expect(store.getters['searchSuggestions/getIsSearchSuggestionsLoading']).toBeFalsy()
        expect(store.getters['searchSuggestions/getSuggestions']).toEqual([])
    })
})