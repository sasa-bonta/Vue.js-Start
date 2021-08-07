export default {
    namespaced: true,
    state: {
        list: [],
    },
    getters: {
        getList: (state) => state.list
    },
    actions: {
        async fetchCategories({commit}) {
            const categories = await fetch('/api/categories')
            commit('mutateList', await categories.json())
        }
    },
    mutations: {
        mutateList(state, payload) {
            state.list = payload
        }
    },
}