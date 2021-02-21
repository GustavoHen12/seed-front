import Services from "@/services/services.js"
import BagBodyRequest from "@/models/bagBodyRequest.js"
import Vue from 'vue';

//TODO: bug para adicionar produtos de diferentes kist com mesmo id

export const bag = {
    state: {
        bagItens: [],
    },
    actions: {
        loadBag({ dispatch, rootState }) {
            if (rootState.auth.status.loggedIn){
                return Services.getBag().then(
                    response => {
                        response.data.forEach(product => {
                            dispatch('setBagLocal', product);
                        });
                    },
                );
            }
        },
        setBag({ dispatch, state, rootState }, params){
            const item = state.bagItens.find(item => item.product.id === params.product.id);

            if (item == undefined && params.kit == undefined){
                console.log("ERROR: INVALID PARAMETERS");
                return;
            }

            const data = item == undefined ? params : item;
            let bodyRequest = new BagBodyRequest(data);

            if (params.op === "add"){
                bodyRequest.quantity++;
            } else if (params.op === "remove"){
                bodyRequest.quantity--;
            } else {
                console.log("ERROR: INVALID OPERATION")
            }

            if (rootState.auth.status.loggedIn){
                dispatch('setBagRemote', bodyRequest);
            } else {
                bodyRequest.product = params.product;
                dispatch('setBagLocal', bodyRequest);
            }
        },

        setBagRemote({ commit, state }, params){
            Services.addBag(params).then(
                response => {
                    const product = response.data;
                    const index = state.bagItens.findIndex(item => item.product.id === product.product.id)
                    if (index === -1){
                        index = state.bagItens.length;
                    }
                    commit('setBagItens', {
                        index: index,
                        product: product,
                    })
                },
            );
        },

        setBagLocal({ commit, state }, product){
            let index = state.bagItens.findIndex(item => item.product.id === product.product.id)
            if (index === -1){
                index = state.bagItens.length;
            }
            commit('setBagItens', {
                index: index,
                product: product,
            })
        },
    },
    getters : {
        bagLength(state){
            if (state.bagItens.length != 0){
                let total = 0;
                state.bagItens.forEach((item) => {
                    total = total + item.quantity;
                })
                console.log(total);
                return total;
            }

            return 0;
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
        setBagItens(state, params){
            Vue.set(
                state.bagItens,
                params.index,
                {
                    kit: params.product.kit,
                    product: params.product.product,
                    quantity: params.product.quantity,
                }
            )
        },
        removeBag(state, product){
            const index = state.bagItems.findIndex(x => x.product === product)
            return state.bagItems.splice(index, 1)
        },
    },
}
