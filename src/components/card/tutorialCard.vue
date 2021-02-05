<template>
    <div class='tutorialCard'>
        <v-card
            class='card'
            tile
            light
            elevation='7'
        >
            <v-card-text><p>{{content}}</p></v-card-text>
            <div class='imageBox' />
        </v-card>
    </div>
</template>

<script>
    export default {
        name:"TutorialCard",
        props: {
            title: {
                type: String,
                default: '',
            },
            content: {
                type: String,
                default: '',
            }
        }
    // data () {
    //     return {
    //         image: require('../assets/img/' + this.img)
    //     }
    // },
    }
</script>

<style>
.tutorialCard{
    width: 100%;
}

.imageBox{
    width: 100%;
    height: 10em;
    background-color: #3726A6;
    margin-top: 3em;
}

.card{
    width: 90%;
    height: 25em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
    margin-bottom: 2em;
    padding-bottom: 3em;
}

p{
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 20pt;
    line-height: 1.5;
    text-align: center;
    color: black;
}
</style>
