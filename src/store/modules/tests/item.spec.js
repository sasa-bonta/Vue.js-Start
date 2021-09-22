import Vue from "vue";
import Vuex from "vuex";
import item from "../item";
import {state} from "../item"
import {testItem} from "./stubs/itemStubs"
import {fetchItem} from "../../../api/999";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {item}
})

jest.mock("../../../api/999", () => ({
    fetchItem: jest.fn()
}))

describe('item', () => {
    it('should have default values', () => {
        expect(store.getters['item/getIsLoading']).toEqual(state.isLoading)
        expect(store.getters['item/getItem']).toEqual(state.item)
    })
    it('should mutate isLoading', () => {
        store.commit('item/mutateLoading', true)
        expect(store.getters['item/getIsLoading']).toBeTruthy()
    })
    it('should mutate item', () => {
        store.commit('item/mutateItem', testItem)
        expect(store.getters['item/getItem']).toEqual(testItem)
    })
    it('should load item and change loading', async () => {
        fetchItem.mockReturnValue(testItem)
        const item = store.dispatch('item/loadItem', '/ru/74221371')
        expect(store.getters['item/getIsLoading']).toBeTruthy()
        await item
        expect(store.getters['item/getIsLoading']).toBeFalsy()
        expect(store.getters['item/getItem']).toEqual(testItem.data)
    })
})