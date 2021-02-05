<template>
    <div class='secctionContainer'>
        <slot />
    </div>
</template>

<script>
    export default {
        name:"CntSecction"
    }
</script>

<style scoped lang="scss">
.secctionContainer{
    min-width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;

    margin-top: 2em;
}
</style>
