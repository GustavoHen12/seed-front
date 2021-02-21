import Services from "@/services/services.js"

import BagBodyRequest from "@/models/bagBodyRequest.js"

export const bag = {
    state: {
        bagItens: []
    },
    actions: {
        loadBag({ commit }) {
            return Services.getBag().then(
                response => {
                    response.data.forEach(product => {
                        commit('setBagLocal', product);
                    });
                },
            );
        },
        addBag({ commit, state }, params){

            const item = state.bagItens.find(item => item.product.id === params.product.id);

            if (item == undefined && params.kit == undefined){
                console.log("ERROR: INVALID PARAMETERS");
                return;
            }

            const data = item == undefined ? params : item;
            let bodyRequest = new BagBodyRequest(data);

            // increment quantity
            bodyRequest.quantity++;

            commit('setBagRemote', bodyRequest);
        },
        removeBag({ commit, state }, params){
            const item = state.bagItens.find(item => item.product.id === params.product.id);

            if (item == undefined && params.kit == undefined){
                console.log("ERROR: INVALID PARAMETERS");
                return;
            }

            const data = item == undefined ? params : item;
            let bodyRequest = new BagBodyRequest(data);

            // increment quantity
            bodyRequest.quantity--;

            commit('setBagRemote', bodyRequest);
        },
    },
    getters : {
        bagLength(state){
            return state.bagItens.length || 0;
        },
        totalPrice(state){
            if (state.bagItens.length != 0){
                return state.bagItens.reduce((a, b) => {
                    return (b.product.price == null ) ? a : a + (parseInt(b.quantity) * parseFloat(b.product.price))
                }, 0)
            }

            return 0;
        },
    },
    mutations: {
        setBagLocal(state, product){
            const index = state.bagItens.findIndex(item => item.product.id === product.product.id)
            if (index === -1){
                state.bagItens.push(product);
            } else {
                state.bagItens[index] = product;
            }
        },
        setBagRemote(state, params){
            Services.addBag(params).then(
                response => {
                    console.log(response);
                    const product = response.data;
                    const index = state.bagItens.findIndex(item => item.product.id === product.product.id)
                    if (index === -1){
                        state.bagItens.push(product);
                    } else {
                        state.bagItens[index] = product;
                        console.log(state);
                    }
                },
            );
        },
        removeBag(state, product){
            const index = state.bagItems.findIndex(x => x.product === product)
            return state.bagItems.splice(index, 1)
        },
        setBag(state, arr){
            state.bagItems = arr;
        },
    },
}
