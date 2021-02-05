<template>
    <v-col
        :cols='cols'
        :md='md'
        :align-self='alignSelf'
        :offset='offset'
    >
        <slot />
    </v-col>
</template>

<script>
    export default {
        name:"GCol",
        props:{
            cols: {
                type: [String, Boolean, Number],
                default: false,
            },
            md: {
                type: [String, Boolean, Number],
                default: false,
            },
            alignSelf: {
                type: String,
                default: undefined,
            },
            offset: {
                type: String,
                default: undefined,
            },
        },
    }
</script>
