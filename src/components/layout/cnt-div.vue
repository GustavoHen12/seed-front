<template>
    <div class='divContainer'>
        <slot />
    </div>
</template>

<script>
    export default {
        name:"CntDiv"
    }
</script>

<style lang="scss">
.divContainer{
    min-width: 100%;
    height: auto;
    margin: 0;
    padding: 2em;
    display: flex;
    flex-direction: column;
}
</style>
