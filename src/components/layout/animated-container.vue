<template>
    <div :style='cssVars' class='wrap'>
        <a class='block-link' @click='click'>
            <div :style='cssVars' class='container' :class='{"horizontal":!vertical, "vertical":vertical}'>
                <slot />
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name:"AnimatedContainer",
        props:{
            backgroundColor: {
                type: String,
                default: '#F2E635',
            },
            borderColor: {
                type: String,
                default: '#3726A6',
            },
            height: {
                type: String,
                default: '10em'
            },
            heightMd: {
                type: String,
                default: '10em'
            },
            width: {
                type: String,
                default: 'auto'
            },
            widthMd: {
                type: String,
                default: '20em'
            },
            to: {
                type: Object,
                default: undefined,
            },
            vertical: {
                type: Boolean,
                default: false,
            },
            invert: {
                type: Boolean,
                default: true,
            },
        },
        computed: {
            // TODO: Corrigir cor de fundo e borda que não esta funcionando com variaveis scss
            backgroundColorStyle () {
                return 'background-color: ' + this.backgroundColor;
            },
            cssVars() {
                return {
                    '--wrap-background-color': this.backgroundColor,
                    '--border-color': this.borderColor,
                    '--height': this.height,
                    '--height-md': this.heightMd,
                    '--width': this.width,
                    '--width-md': this.widthMd,
                    '--justify': this.invert ? 'flex-end' : 'flex-start',
                }
            },
        },
        methods: {
            click: function (e) {
                this.$emit('click', e)
            },
        }
    }
</script>

<style scoped lang="scss">
@import "@/css/global.scss";

.block-link {
    display: block;
    text-decoration: none;
    height: var(--height);
    width: var(--width);
    @include md{
        height: var(--height-md);
        width: var(--width-md);
    }
}

.wrap{
    height: var(--height);
    width: var(--width);
    margin: 0;
    background-color: var(--wrap-background-color);
    @include md{
        height: var(--height-md);
        width: var(--width-md);
    }
}

.container{
    margin: 0;
    padding: 0;

    background-color: white;

    transition: transform 1s;
    height: var(--height);
    width: var(--width);
    @include md{
        height: var(--height-md);
        width: var(--width-md);
    }
}

.container:hover {
    transform: translate(15px, -15px);
    outline: 5px solid var(--border-color);
}

.vertical{
    display: flex;
    flex-direction: column-reverse;
    justify-content: var(--justify);
    align-items: flex-start;
}

.horizontal{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}
</style>
