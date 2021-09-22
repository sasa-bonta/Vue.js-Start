import Vue from "vue";
import Vuex from "vuex";
import productHistory from "../productHistory";
import {products, productsNew} from "./stubs/productsHistoryStubs";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {productHistory}
})

describe('products history', () => {
    it('should add new price if the price of product changed', () => {
        store.commit('productHistory/mutateItem', products)
        store.commit('productHistory/mutateItem', productsNew)
        expect(store.getters['productHistory/getItem'](1111).price).toEqual([1000, 1050])
        expect(store.getters['productHistory/getItem'](1112).price).toEqual([2000])
    })
})