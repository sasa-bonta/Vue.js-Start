export default {
    state: {
        item: {},
        isLoading: false,
    },
    getters: {
        getItem: ({item}) => item,
    },
    actions: {
        async loadItem(store, payload) {

        }
    },
    mutation: {
        mutateLoading(state, payload) {
            state.isLoading = payload
        },
        mutateItem(state, payload) {
            state.item = payload
        }
    },
}