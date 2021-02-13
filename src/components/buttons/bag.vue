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
                productsCount: 10,
            }
        },
        methods: {
            showCheckout() {
                this.$refs.checkout.showPage()
            }
        }
    }
</script>
<style scoped>

</style>
