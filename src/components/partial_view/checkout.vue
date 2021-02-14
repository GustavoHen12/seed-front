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

                <div>
                    <checkout-product :product='products[0].product' />
                </div>

                <!-- <transition-group name='fade'>
                </transition-group> -->

                <!--
                <hr v-if='cartContent.length !== 0'>
                <div v-if='cartPrice != undefined' class='row justify-content-between' style='background:#7dcf85;padding:10px 10px 10px 10px'>
                    <div class='flex-column pl-3'>
                        <h4>Total</h4>
                    </div>
                    <div class='flex-column pr-3'>
                        <h4>${{cartPrice}}</h4>
                    </div>
                </div> -->
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

    import Services from "@/services/services.js"

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
            }
        },
        mounted: function () {
            this.load();
        },
        methods: {
            load: function () {
                Services.getProducts(2).then(response => this.products = response.data);
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
        justify-content: start;
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
</style>
