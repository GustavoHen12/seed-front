<template>
    <div class='tutorialCard'>
        <hr>
    </div>
</template>

<script>
    export default {
        name:"CheckoutProduct",
        props: {
            product: {
                type: Object,
                default: null,
            },
        }
    // data () {
    //     return {
    //         image: require('../assets/img/' + this.img)
    //     }
    // },
    }
</script>

<style scoped lang='scss'>

</style>
