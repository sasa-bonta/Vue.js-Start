export default {
    namespaced: true,
    state: {
        items: {}
    },
    getters: {
        getItem: (state) => (id) => state.items[id]
    },
    actions: {},
    mutations: {
        mutateItem(state, itemList) {
            for (let item of itemList) {
                item.link = item.link.substring(4)
                const price = [item.price]
                const pricesList = state.items?.[item.link]?.price ?? []
                const lastPrice = pricesList[pricesList.length - 1]
                if (price !== lastPrice) {
                    pricesList.push(price)
                }
                state.items[item.link] = {price: price}
            }
        },
    },
}