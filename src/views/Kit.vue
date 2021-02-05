<template>
    <div class='catalogKit'>
        <g-header />
        <div class='page main'>
            <kit-info />
            <productCatalog />
        </div>
        <g-footer />
    </div>
</template>

<script>
    import productCatalog from '@/components/partial_view/catalog-products.vue'
    import kitInfo from '@/components/card/kit-info.vue'
    //services
    // import Products from "@/services/products.js"

    export default {
        name:"CatalogKit",
        components:{
            productCatalog,
            kitInfo,
        },
        data: function () {
            return {
                productsList: null
            }
        },
        mounted: function () {
            this.load();
        },
        methods: {
            load: function () {
            // this.projectsList = Products.get().then(response => this.productsList = response.products);
            },
        }
    }
</script>
<style scoped lang="scss">
    @import '@/css/global.scss';
    .main{
        @include md {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
        }
    }
</style>

