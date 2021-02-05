<template>
    <div class='catalog'>
        <cnt-container>
            <cnt-div>
                <cnt-div>
                    <v-carousel
                        cycle
                        height='500'
                        show-arrows-on-hover
                        hide-delimiters
                        next-icon='mdi-arrow-right'
                        prev-icon='mdi-arrow-left'
                    >
                        <v-carousel-item
                            v-for='(kit, index) in kitsList'
                            :key='index'
                            :to='{name: "Kit", params: {id: kit.id}}'
                        >
                            <card-project
                                :_kit='kit'
                            />
                        </v-carousel-item>
                    </v-carousel>
                </cnt-div>
            </cnt-div>
        </cnt-container>
    </div>
</template>

<script>
    import Services from "@/services/services.js"
    import CardProject from '../card/card-project.vue'

    export default {
        name:"CatalogProjects",
        components:{
            CardProject,
        },
        props: {
            _name: {
                type: String,
                default: null,
            },
        },
        data: function () {
            return {
                kitsList: [],
            }
        },
        mounted: function () {
            this.load();
        },
        methods: {
            load: function () {
                Services.getKits().then(response => this.kitsList = response.data);
            },
        }
    }
</script>
