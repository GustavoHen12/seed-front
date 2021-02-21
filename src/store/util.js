import BagBodyRequest from "@/models/bagBodyRequest.js"

class StoreUtil {
    createBagBodyRequest (state, params) {
        const item = state.bagItens.find(product => product.product.id === params.product.id);

        if (item == undefined && params.kit == undefined){
            console.log("ERROR: INVALID PARAMETERS");
            return;
        }

        const data = item == undefined ? params : item;
        return new BagBodyRequest(data);
    }
}

export default new StoreUtil();
