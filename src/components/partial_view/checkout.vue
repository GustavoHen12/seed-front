<template>
    <div>
        <div :class='sideBar'>
            <div class='cart-menu'>
                <g-btn class='mb-5' icon @click='showPage'>
                    <v-icon>mdi-close</v-icon>
                </g-btn>

                <h4>MINHA CESTA</h4>
                <hr>

                <transition name='fade'>
                    <div v-if='products.length === 0' class='emptyBag'>
                        <img-animated src='empty.svg' center />
                        <p>Sua cesta esta vazia, adicione alguns itens</p>
                    </div>
                </transition>
                <div v-if='products.length > 0'>
                    <div v-for='item in products' :key='item.product.id'>
                        <checkout-product
                            :product='item.product'
                            :quantity='item.quantity'
                        />
                    </div>
                </div>
                <hr>

                <div class='price-row'>
                    <h4> TOTAL </h4>
                    <h4>{{price}} </h4>
                </div>

                <g-btn class='mt-12' @click='donate'>
                    DOAR
                </g-btn>
            </div>
        </div>

        <div
            :class='modal'
            @click='showPage'
        />
    </div>
</template>

<script>
    import imgAnimated from '@/components/image/img-animated.vue'
    import CheckoutProduct from '../card/checkout-product.vue'
    import {mapGetters} from 'vuex';
    //import Services from "@/services/services.js"

    export default {
        name: 'Checkout',
        components: {
            imgAnimated,
            CheckoutProduct,
        },
        data () {
            return {
                sideBar: 'cart',
                modal: 'modal off',
                products: [],
            }
        },
        computed: {
            cartPrice () {
                return 10
            },
            ...mapGetters({
                priceTotal: 'totalPrice'
            }),
            price: function () {
                const value = JSON.parse(JSON.stringify(this.priceTotal));
                const valueStr = value.toFixed(2).toString();
                return `R$ ${valueStr.replace('.', ',')}`
            },
            productList: {
                get () {
                    return this.$store.state.bag.bagItens;
                },
                set (value) {
                    console.log(value);
                },
            },
        },
        mounted: function () {
            this.load();
        },
        methods: {
            load: async function () {
                this.products = this.productList;
                // await Services.getProducts(2).then(response => this.products = response.data);
            },
            showPage: function () {
                if (this.sideBar === 'cart on') {
                    this.sideBar = 'cart'
                    this.modal = 'modal off'
                } else {
                    this.sideBar = 'cart on'
                    this.modal = 'modal'
                    this.load()
                }
            },
            donate: function () {
                console.log('doar');
            },
        }
    }
</script>

<style scoped lang="scss">
    @use "@/css/modules/_breakpoints.scss";
    @import "@/css/global.scss";

    /* Modal Overlay */
    .modal {
        display: block;
        z-index: 1050;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0, 0, 0); /* Fallback color */
        background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    }

    .modal.off {
        display: none;
    }

    /* Transitions */
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    /* Cart Body */
    .cart {
        position: fixed;
        margin-right: 0px;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        z-index: 1051;
        -webkit-overflow-scrolling: touch;
        transform: translateX(100%);
        transition-property: transform;
        transition-duration: 0.4s;

        background-color: $background-color;

        @include md{
            width: 450px;
            height: 100%;
        }
    }
    .cart.on {
        transform: translateX(0);
        -webkit-overflow-scrolling: touch;
        transition-property: transform;
        transition-duration: 0.4s;
    }

    .cart-menu {
        color: black;
        margin-left: 10px;
        margin-right: 15px;

        padding: 2em 1.5em;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: left;
    }

    hr{
        border: 1px solid black;
        margin-top: 1em;
        margin-bottom: 1.5em;
    }

    .emptyBag{
        p{
            text-align: center;
        }
    }

    .price-row{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
</style>
