<template>
    <a @click='click'>
        <v-icon class='icon'>{{icon}}</v-icon>
    </a>
</template>

<script>
    export default {
        name: 'GButtonIcon',
        props: {
            icon: {
                type: String,
                default: null,
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
@use "@/css/modules/_typography.scss";
@import "@/css/global.scss";

.icon{
    color: $purple;
}

.icon:hover{
    color: $purple-dk;
}
</style>
