export default class BagBodyRequest {
    constructor(item) {
      this.product = item != undefined ? item.product.id : null;
      this.kit = item != undefined ? item.kit : null;
      this.quantity = item.quantity != undefined ? item.quantity : 0;
    }
  }
