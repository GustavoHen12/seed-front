<template>
    <div class='cnt'>
        <div class='wrap'>
            <div class='container'>
                <v-img
                    class='showOnDesktop'
                    max-height='10em'
                    widht='auto'
                    :src='kitInfo.imgUrl || require("@/assets/img/defaultImage.png")'
                />

                <div class='content'>
                    <p class='bold card-title'>
                        {{kitInfo.name || ""}}
                    </p>

                    <p class='bold card-subtitle'>
                        {{kitInfo.project == null ? "" : kitInfo.project.name}}
                    </p>

                    <p class='semibold showOnDesktop'>
                        {{kitInfo.description || ""}}
                    </p>

                    <hr class='showOnDesktop'>

                    <p class='bold card-status'>
                        {{aux.status}}
                    </p>
                    <p class='semibold'>
                        cestas arrecadadas da meta de {{kitInfo.goal || 0}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Services from "@/services/services.js"

    export default {
        name:"KitInfo",
        components:{
            // AnimatedContainer,
        },
        props: {
            _kitId: {
                type: Number,
                default: null,
            },
        },
        data: function () {
            return {
                productsList: null,
                aux:{
                    completed: 30,
                    goal: 100,
                    name: 'Cesta Nome',
                    projectName: 'Nome do projeto',
                    status: 200,
                    img: 'https://images.unsplash.com/photo-1612018072665-11526a70079d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                    bio: 'Lorem ipsum dolor sit  amet, consectetur  adipiscing elit. Sed maximus a dolor non  dictum.'
                },
                kitInfo: null,
            }
        },
        mounted: function () {
            this.load();
        },
        methods: {
            load: function () {
                const kitId = this.$route.params.id;
                Services.getKitInfo(kitId).then(response => this.kitInfo = response.data);
            },
        }
    }
</script>

<style scoped lang="scss">
@use "@/css/modules/_breakpoints.scss";
@import "@/css/global.scss";
.cnt{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    margin-top: 2em;
    @include md {
        height: 100%;
        width: 30%;
        margin: 0;
        margin-left: 3em;
        margin-top: 5em;
    }
}

.wrap{
    height: auto;
    width: 100%;
    margin: 0;
    background-color: $orange;

    @include md{
        width: 70%;
    }
}

.container{
    margin: 0;
    padding: 0;

    background-color: white;

    transition: transform 1s;
    height: auto;
    width: 100%;
    @include md{
        height: auto;
        width: 100%;
    }
}

.container:hover {
    transform: translate(15px, -15px);
    outline: 5px solid $primary;
}

.content{
    color: black;
    padding: .5em .8em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    p {
        margin-bottom: 0;
    }

    hr {
        border-top: 3px solid $primary;
        margin-top: 2em;
    }

    .card-subtitle{
        color: #707070;
    }

    .card-title{
        font-size: 20pt;
    }

    .card-status{
        color: $primary;
        font-size: 20pt;
        margin-top: .8em;
        @include md{
            margin-top: .3em;
        }
    }
}

</style>
