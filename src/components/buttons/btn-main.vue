<template>
    <v-btn
        color='primary'
        elevation='7'
        light
        tile
        block
        @click='onClick'
    >
        <p class='ma-0'>
            {{title}}
        </p>
    </v-btn>
</template>

<script>
    export default {
        name: 'MainButton',
        props: {
            title: {
                type: String,
                default: '',
            },
            onClick: {
                type: Function,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
p{
    font-family: "Lato";
    font-weight: 800;
    font-size: 15pt;
    margin-bottom: -16px;
    color: white;
}
</style>
