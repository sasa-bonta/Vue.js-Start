import Vue from "vue";
import Vuex from "vuex";
import products from "../products";
import {state} from "../products";
import {fetchProducts} from "../../../api/999";
import {Base64} from "js-base64";
import {productsList1, productsList2} from './stubs/productsTestDataProvider'

Vue.use(Vuex)

const mutateItem = jest.fn()
const store = new Vuex.Store({
    modules: {
        products,
        productHistory: {
            namespaced: true,
            mutations: {
                mutateItem
            }
        }
    }
})

jest.mock('../../../api/999', () => ({
    fetchProducts: jest.fn()
}))

describe('products', () => {
    beforeEach(() => {
        fetchProducts.mockReturnValue({
            data: ['test products']
        })
    })
    it('should have all getters', () => {
        expect(store.getters['products/getIsLoading']).toEqual(state.isLoading)
        expect(store.getters['products/getList']).toEqual(state.list)
    })
    it('should mutate loading', () => {
        store.commit('products/mutateLoading', true)
        expect(store.getters['products/getIsLoading']).toBeTruthy()
    })
    it('should mutate list', () => {
        store.commit('products/mutateList', productsList1)
        expect(store.getters['products/getList']).toEqual(productsList1)
    })
    it('should append list', () => {
        store.commit('products/mutateList', productsList1)
        store.commit('products/mutateAppendList', productsList2)
        expect(store.getters['products/getList']).toEqual(productsList1.concat(productsList2))
    })
    it('should load 1st page of products', async () => {
        const action = store.dispatch('products/loadProducts', {
            link: '/ru/list/transport/cars',
        })
        expect(fetchProducts).toBeCalledWith(Base64.encode('/ru/list/transport/cars?page=1'))
        expect(store.getters['products/getIsLoading']).toBeTruthy()
        await action
        expect(store.getters['products/getIsLoading']).toBeFalsy()
        expect(store.getters['products/getList']).toEqual(['test products'])
    })
    it('should load 2nd page and use & appender', async () => {
        store.commit('products/mutateList', productsList1)
        await store.dispatch('products/loadProducts', {
            link: '/ru/list/transport/cars?test=test',
            page: 2
        })
        expect(fetchProducts).toBeCalledWith(Base64.encode('/ru/list/transport/cars?test=test&page=2'))
    });
})
