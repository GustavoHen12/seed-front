<template>
    <div class='textHome'>
        <h1>{{title}}</h1>
        <p class='text'>
            {{text}}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'TextHome',
        props: {
            title: {
                type: String,
                default: '',
            },
            text: {
                type: String,
                default: '',
            }
        }
    }
</script>

<style scoped lang="scss">
@import '@/css/global.scss';
.textHome{
    width: 100%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    padding: .3em .8em;
    p {
        font-size: 11pt;
    }

    h1{
        font-size: 25pt;
    }

    @include md{
        width: 75%;
        margin-left: 5em;
        margin-right: 2em;

        p {
            font-size: 15pt;
        }
    }
}
</style>
