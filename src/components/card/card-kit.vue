<template>
    <animated-container
        :height='directionVertical ? "100%":"10em"'
        :height-md='directionVertical ? "100%":"10em"'
        :width='directionVertical ? "auto":"auto"'
        :width-md='directionVertical ? "16em":"20em"'

        :vertical='directionVertical'
        @click='openKitPage(_kit.id)'
    >
        <div class='textContent' :class='{"textContentVert":directionVertical}'>
            <div class='titleCard'>
                {{_kit.name}}
            </div>
            <div class='contentCard'>
                {{_kit.description}}
            </div>
        </div>
        <div v-if='_kit.img != null' :class='{"imgContent" : !directionVertical, "imgContentVert":directionVertical}'>
            <img-card-kit :src='_kit.img' />
            <!-- <img class='img' :src='_kit.img'> -->
        </div>
    </animated-container>
</template>

<script>
    import ImgCardKit from '../image/img-card-kit.vue';
    import AnimatedContainer from '@/components/layout/animated-container.vue';

    export default {
        name: "CardKit",
        components: {
            ImgCardKit,
            AnimatedContainer,
        },
        props: {
            _kit: {
                type: Object,
                default: undefined,
            },
            _color: {
                type: String,
                default: '',
            },
            directionVertical: {
                type: Boolean,
                default: false,
            }
        },
        data: function () {
            return {

            };
        },
        computed: {

        },
        methods:{
            openKitPage: function(id){
                if(id != null){
                    this.$router.push({name: "Kit", params: {id: id}});
                }
            },
        }
    };
</script>

<style scoped lang="scss">
@use "@/css/modules/_breakpoints.scss";
@import "@/css/global.scss";

.textContent{
    width: 55%;
    margin-bottom: 2em;
    margin-left: 1em;
    margin-top: 1em;

    color: black;
}

.textContentVert{
    width: 65%;
}

.imgContent{
    height: 10em;
    width: 45%;
    @include md{
        max-height: 10em;
    }
}

.imgContentVert{
    height: 10em;
    width: 100%;
    @include md{
        max-height: 10em;
    }
}

.vertical{
    flex-direction: column;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

.horizontal{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}
</style>
