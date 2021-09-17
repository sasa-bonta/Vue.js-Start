import categories from "../categories";
import Vuex from "vuex";
import Vue from "vue";
import {fetchCategories} from "../../../api/999";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {categories}
})

jest.mock("../../../api/999", () => ({
    fetchCategories: jest.fn()
}))

describe('categories', () => {
    it('should have length 0', () => {
        expect(store.getters['categories/getList']).toEqual([])
    })
    it('should have isLoading false', () => {
        expect(store.getters['categories/getIsLoading']).toBeFalsy()
    })
    it('should change isLoading to true', () => {
        store.commit('categories/mutateLoading', true)
        expect(store.getters['categories/getIsLoading']).toBeTruthy()
    })
    it('should change the list', () => {
        let testData = ["cars", "real estate", "bikes", "phones"]
        store.commit('categories/mutateList', testData)
        expect(store.getters['categories/getList']).toBe(testData)
    })
    it('should load list of categories', async () => {
        const categoriesList = {
            data: [
                'cars',
                'houses',
                'bikes',
                'pets'
            ]
        }
        fetchCategories.mockReturnValue(categoriesList)
        let result = store.dispatch('categories/fetchCategories')
        expect(store.getters['categories/getIsLoading']).toBeTruthy()
        await result
        expect(store.getters['categories/getIsLoading']).toBeFalsy()
        expect(store.getters['categories/getList']).toEqual(categoriesList.data)
    })
})