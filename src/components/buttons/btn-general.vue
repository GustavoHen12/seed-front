<template>
    <v-btn
        color='primary'
        light
        :tile='!notTile'

        :to='_to'

        v-bind='btnProps'

        :x-large='xlarge'
        :icon='icon'
        @click='click'
    >
        <p
            :v-if='title != null'
            class='ma-0'
        >
            {{title}}
        </p>
        <span class='btn'>
            <slot />
        </span>
        <slot class='icon' name='icon' />
    </v-btn>
</template>

<script>
    export default {
        name: 'GButton',
        props: {
            onClick: {
                type: Function,
                default: (e) => {
                    this.$emit('click', e)
                }
            },
            icon: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: null,
            },
            type: {
                type: String,
                default: 'primary',
            },
            _to: {
                type: Object,
                default: undefined,
            },
            xlarge: {
                type: Boolean,
                default: false
            },
            notTile: {
                type: Boolean,
                default: false
            },
        },
        computed: {
            primary: function () {
                return this.type === 'main';
            },
            secundary: function () {
                return this.type === 'secundary';
            },
            text: function () {
                return this.type === 'text';
            },
            btnProps: function () {
                if(this.icon){
                    return {
                        icon: true,
                    }
                }
                if(this.type === 'text'){
                    return {
                        text: true,
                        large: true,
                        block: false,
                    }
                } else if(this.type === 'secundary') {
                    return {
                        text: true,
                        large: true,
                        elevation: '7',
                    }
                }
                return {
                    elevation: '7',
                    block: true,
                }
            }

        },
        methods: {
            click: function (e) {
                this.$emit('click', e)
            },
        }
    }
</script>

<style scoped lang="scss">
@use "@/css/modules/_typography.scss";
@import "@/css/global.scss";

p{
    font-family: "Lato";
    font-weight: 800;
    font-size: 15pt;
    margin-bottom: -16px;
    color: white;
}

.btn{
    font-family: 'Lato';
    font-weight: 800;
    font-size: 13pt;
}

.icon{
    vertical-align: text-bottom;
}
</style>
