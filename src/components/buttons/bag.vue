<template>
    <div>
        <v-badge
            bottom
            :content='productsCount'
            :value='productsCount'
        >
            <g-btn
                color='primary'
                icon
                @click='showCheckout'
            >
                <v-icon large>
                    $iconBag
                </v-icon>
            </g-btn>
        </v-badge>

        <checkout ref='checkout' />
    </div>
</template>
<script>
    import Checkout from '@/components/partial_view/checkout.vue'

    export default {
        name:'BagButton',
        components: {
            Checkout
        },
        data () {
            return {
                // productsCount: 0,
            }
        },
        computed: {
            productsCount: function () {
                return this.$store.getters.bagLength;
            },
        },
        mounted: function () {
            //this.$store.bag.bagItens.splice(0);
            this.loadBag();
        },
        methods: {
            showCheckout() {
                this.$refs.checkout.showPage()
            },
            loadBag: function () {
                this.$store.dispatch('loadBag');
            }
        }
    }
</script>
<style scoped>

</style>
