<template>
    <div
        class='ImageAnimated'
    >
        <img :src='src'>
    </div>
</template>

<script>
    export default {
        name: 'ImageCardKit',
        props:{
            src: {
                type: String,
                default: '',
            },
            marginRight: {
                type: String,
                default: '2',
            },
            height: {
                type: String,
                default: 'auto'
            },
            shadow: {
                type: Boolean,
                default: false,
            },
            center: {
                type: Boolean,
                default: false,
            }
        },
        computed: {
            style () {
                return 'height: ' + this.height;
            }
        },
    }
</script>

<style scoped lang="scss">
@import '@/css/global.scss';
.ImageAnimated{
    img{
        width: auto;
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
        @include md{
            height: 10em;
            max-height: 100%;
            width: 100%;
        }
    }
}

</style>
