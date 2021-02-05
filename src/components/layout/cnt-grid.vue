<template>
    <v-container
        fluid
        grid-list-sm
    >
        <slot />
    </v-container>
</template>

<script>
    export default {
        name:"Gride"
    }
</script>

<style scoped lang="scss">
.divContainer{
    min-width: 100%;
    height: auto;
    margin: 0;
    padding: 2em;
    display: inline-grid;
    grid-column-gap: 50px;
}
</style>
