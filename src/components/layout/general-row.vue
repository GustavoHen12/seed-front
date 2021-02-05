<template>
    <v-row
        :align='align'
        :no-gutters='noGutters'
    >
        <slot />
    </v-row>
</template>

<script>
    export default {
        name:"GRow",
        props:{
            align: {
                type: String,
                default: undefined,
            },
            noGutters: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>
