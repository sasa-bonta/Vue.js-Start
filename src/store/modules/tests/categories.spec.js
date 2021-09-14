import categories from "../categories";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {categories}
})

describe('categories', () => {
    it('should have length 0', () => {
        expect(store.getters['categories/getList']).toHaveLength(0)
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
    // it('should load 513 categories', () => {
    //
    // });
})