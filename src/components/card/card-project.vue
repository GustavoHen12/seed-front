<template>
    <div class='wrap'>
        <div class='container'>
            <div class='textContent'>
                <div class='title1'>
                    {{_kit.name}}
                </div>
                <div class='content1'>
                    {{_kit.description}}
                </div>
            </div>
            <div class='imgContainer'>
                <div>
                    <v-img
                        :src='_kit.img'
                        :lazy-src='_kit.imgUrl || require("@/assets/img/defaultImage.png")'
                        max-width='450'
                        max-height='300'
                    >
                        <template #placeholder>
                            <v-row
                                class='fill-height ma-0'
                                align='center'
                                justify='center'
                            >
                                <v-progress-circular
                                    indeterminate
                                    color='grey lighten-5'
                                />
                            </v-row>
                        </template>
                    </v-img>
                </div>
            </div>
            <div class='projectContainer'>
                <h2>
                    Nome Projeto
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardKit",
        props: {
            _kit: {
                type: Object,
                default: undefined,
            },
            _color: {
                type: String,
                default: '',
            },
        },
        data: function () {
            return {

            };
        },
        computed: {
            bkgStyle: function () {
                return {
                    elevation: this.shadow,
                    invert: this.invert,
                    normal: !this.invert
                }
            },
            bkgColor(){
                return{
                    "background-color": this._color,
                }
            }
        },
    };
</script>

<style scoped lang="scss">
@use "@/css/modules/_breakpoints.scss";
@import "@/css/global.scss";

.wrap{
    min-width: 100%;
    height: auto;
    margin-bottom: 30%;
    margin-top: 2.5em;
}

.container{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;

    background-color: $yellow;
    width: 60%;
    margin-left: 25%;
    min-height: 350px;

    position: relative;
}

.textContainer{
    background-color: $yellow;
    width: 60%;
    height: 100%;

    position: absolute;
    z-index: 1;
    top:2em;
    left: 25%;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
}

.textContent{
    width: 40%;
    margin-bottom: 2em;
    margin-left: 1em;
    margin-right: 1em;

    color: black;
}
.projectContainer{
    background-color: $purple;
    color: white;
    padding-left: .8em;
    padding-right: 3.5em;
    padding-top: .3em;
    padding-bottom: .3em;

    position: absolute;
    top: -2em;
    right: -2em;
}

.imgContainer{
    position: absolute;
    left: -30%;
    top: 10%;
    max-height: 70%;
    max-width: 60%;
}
</style>
