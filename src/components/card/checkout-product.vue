<template>
    <div class='cnt'>
        <v-img
            height='80px'
            width='80px'
            max-width='100px'
            :src='product.img'
        />
        <div class='product-data'>
            <div class='info-row'>
                <p class='product-name semibold mb-0'>
                    {{product.name}}
                </p>
                <p class='product-price semibold mb-0'>
                    {{price}}
                </p>
            </div>
            <div class='info-row mt-4'>
                <div class='quantity-cnt'>
                    <g-btn-icon icon='mdi-minus' @click='minus' />
                    <div class='quantity-input'>
                        <v-text-field
                            v-model='inBag'
                            solo
                            dense
                            hide-details
                        />
                    </div>
                    <g-btn-icon icon='mdi-plus' @click='add' />
                </div>
                <g-btn not-tile icon @click='remove'>
                    <v-icon>mdi-trash-can-outline</v-icon>
                </g-btn>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';

    export default {
        name:"CheckoutProduct",
        props: {
            product: {
                type: Object,
                default: null,
            },
            quantity: {
                type: Number,
                default: 0,
            },
        },
        data () {
            return {
                inBag: this.quantity,
            }
        },
        computed: {
            price: function () {
                const value = JSON.parse(JSON.stringify(this.product.price));
                return `R$ ${value.replace('.', ',')}`
            },
        },
        watch: {
            quantity (value) {
                this.inBag = value;
            },
        },
        methods: {
            add: function () {
                this.$store.dispatch("setBag", {
                    product: this.product,
                    op: 'add'
                });
            },
            minus: function () {
                if (this.quantity === 1){
                    this.remove();
                } else {
                    this.$store.dispatch("setBag", {
                        product: this.product,
                        op: 'remove'
                    });
                }
                //this.quantity -= 1;
            },
            remove: function () {
                console.log(remove);
            }
        },
    }
</script>

<style scoped lang='scss'>
@use "@/css/modules/_breakpoints.scss";
@import "@/css/global.scss";
.cnt{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: auto;
    max-height: 7em;
    margin-bottom: 1.5em;
}
.info-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}
.product-data{
    margin-left: 1em;
    width: auto;
    @include md{
        width: 100%;
    }
}

.product-name{
    overflow-wrap: break-word;
    width: 50%;
    @include md{
        width: 60%;
    }
}

.product-price{
    font-size: 11pt;
    color: grey;
}

.quantity-cnt{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.quantity-input{
    width: 2.5em;
    margin: 0 .3em;
}
</style>
