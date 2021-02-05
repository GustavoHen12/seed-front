<template>
    <div
        data-aos='fade-up'
        class='ImageAnimated'
        :class='{left: !center, center: center}'
    >
        <link
            rel='stylesheet'
            href='bower_components/aos/dist/aos.css'
        >
        <img :class='{shadow : shadow}' :src='image'>
    </div>
</template>

<script>
    export default {
        name: 'ImageAnimated',
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
        data () {
            return {
                image: require('../../assets/img/' + this.src)
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
        width: 100%;
        height: auto;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        @include md{
            height: 100%;
            width: auto;
        }
    }
}

.shadow{
    -webkit-filter: drop-shadow(50px 50px 46px rgba(0,0,0,0.46));
    filter: drop-shadow(50px 50px 46px rgba(0,0,0,0.46));
}

.center{
    margin: 0 auto;
}

.left {
    float: right;
    margin-right: 0;
}

</style>
