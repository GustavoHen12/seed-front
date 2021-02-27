<template>
    <div class='grid'>
        <div
            v-for='item in productList'
            :key='item.url'
        >
            <card-product
                :_product='item.product'
                :_kit-id='item.kit.id'
                :_donated='item.donated'
                :_in-kit='item.in_kit'
            />
        </div>
    </div>
</template>

<script>
//layout
    import cardProduct from '@/components/card/card-product.vue'

    //services
    import Services from "@/services/services.js"

    export default {
        name:"CatalogProducts",
        components:{
            cardProduct,
        },
        data: function () {
            return {
                productList: null,
                kitId: null,
            }
        },
        mounted: function () {
            this.kitId = this.$route.params.id;
            Services.getProducts(this.kitId).then(response => this.productList = response.data);
        },
    }
</script>
<style scoped lang="scss">
@import "@/css/global.scss";
.grid{
    height: auto;
    width: auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
    grid-gap: 2em;
    margin-top: 3em;
    @include md{
        margin-right: 2em;
        width: 70%;
        grid-gap: 1em;
        grid-template-columns: repeat(2, 1fr);
    }

    @include xl{
        margin-right: 2em;
        width: 70%;
        grid-gap: 1em;
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
