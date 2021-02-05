<template>
    <div class='container'>
        <slot />
    </div>
</template>

<script>
    export default {
        name:"CntContainer",
        props:{
            src: {
                type: String,
                default: '',
            },
        },
    }
</script>
