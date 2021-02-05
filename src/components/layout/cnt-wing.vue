<template>
    <div class='wrap'>
        <div
            class='container'
            :style='bkgColor'
            :class='bkgStyle'
        >
            <div class='contentContainer'>
                <slot name='content' />
            </div>
            <div class='boxContainer'>
                <slot name='box' />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"CntWing",
        props:{
            color: {
                type: String,
                default: null,
            },
            shadow: Boolean,
            invert: Boolean
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
                    "background-color": this.color,
                }
            }
        }
    }
</script>

<style scoped lang="scss">
@use "@/css/modules/_breakpoints.scss";
@import "@/css/global.scss";
.invert{
    @include md{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }

    .boxContainer{
       @include md{
            left: 0;
            bottom: auto;
            width: 30%;
            height: 125%;
        }
    }
}

.normal{
    @include md{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }

    .boxContainer{
       @include md{
            right: 0;
            bottom: auto;
            width: 30%;
            height: 125%;
        }
    }
}

.elevation{
    -webkit-box-shadow: 0px 4px 15px 0px rgba(0,0,0,0.49);
    box-shadow: 0px 4px 15px 0px rgba(0,0,0,0.49);
}
.wrap{
    min-width: 100%;
    height: auto;
    margin-bottom: 30%;
    @include md{
        margin-bottom: 10%;
    }
}
.container{
    min-width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;

    @include md{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
}

.contentContainer{
    width: 100%;
    height: auto;
    @include md{
        width: 70%;
        height: 100%;
    }
}

.boxContainer{
    position: absolute;
    bottom: -40%;
    right: 2em;
    width: 30%;
    height: 70%;

    @include md{
        right: 0;
        bottom: auto;
        width: 30%;
        height: 125%;
    }
}
</style>
