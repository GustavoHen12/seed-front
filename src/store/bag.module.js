import Services from "@/services/services.js"

export const bag = {
    state: {
        bagItens: []
    },
    actions: {
        loadBag({ commit }) {
            return Services.getBag().then(
                products => {
                    commit('addBag', products);
                },
            );
        },
    },
    getters : {
        bagLength(state){
            return state.bagItems.length
        },
    },
    mutations: {
        addBag(state, product){
            state.bagItens.push(product);
        },
        removeBag(state, product){
            const index = state.bagItems.findIndex(x => x.product === product)
            return state.bagItems.splice(index, 1)
        },
    },
}
