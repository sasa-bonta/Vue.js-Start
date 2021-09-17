export const state = {
    items: {}
}

export default {
    namespaced: true,
    state,
    getters: {
        getItem: (state) => (id) => state.items[id]
    },
    actions: {},
    mutations: {
        mutateItem(state, itemList) {
            for (let item of itemList) {
                item.link = item.link.substring(4)
                const pricesList = state.items?.[item.link]?.price ?? []
                const lastPrice = pricesList[pricesList.length - 1]
                if (item.price !== lastPrice) {
                    pricesList.push(item.price)
                }
                state.items[item.link] = {price: pricesList}
            }
        },
    },
}