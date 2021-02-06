<template>
    <div class='container'>
        <slot />
    </div>
</template>

<script>
    export default {
        name:"CntContainer"
    }
</script>

<style scoped lang="scss">
@import "@/css/global.scss";
.container{
    min-width: 100%;
    margin: 0;
    padding: 0;
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    @include xl{
        min-width: $screen-xl-min;
        max-width: $screen-xl-min;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
