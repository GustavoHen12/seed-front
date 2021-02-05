<template>
    <div class='catalogContainer'>
        <g-row justify='space-between'>
            <g-col cols='12' md='4' :class='{"ma-0 pa-0" : $vuetify.breakpoint.mobile}'>
                <card-kits
                    :class='{"verticalItem": !$vuetify.breakpoint.mobile}'
                    :_kit='kitsList[0] == null ? nullKit : kitsList[0]'
                    :direction-vertical='!$vuetify.breakpoint.mobile'
                />
            </g-col>
            <g-col
                v-for='(n, index) in 2'
                :key='n'
                cols='12'
                md='4'
            >
                <g-row>
                    <g-col
                        align-self='start'
                        class='mb-12 pa-0'
                    >
                        <card-kits
                            :_kit='kitsList[index*2+1] == null ? nullKit : kitsList[index*2+1]'
                        />
                    </g-col>
                </g-row>
                <g-row>
                    <g-col
                        align-self='end'
                        class='ma-0 pa-0'
                    >
                        <card-kits
                            :_kit='kitsList[index*2+2] == null ? nullKit : kitsList[index*2+2]'
                        />
                    </g-col>
                </g-row>
            </g-col>
        </g-row>
    </div>
</template>

<script>
    import CardKits from "@/components/card/card-kit"
    import Services from "@/services/services.js"

    export default {
        name:"CatalogProjects",
        components:{
            CardKits,
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
                nullKit: {
                    name: '',
                    description: '',
                    img: null,
                    id: null,
                }
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

<style scoped lang="scss">
@use "@/css/modules/_breakpoints.scss";
@import "@/css/global.scss";

.catalogContainer{
    width: 80vw;
    height: auto;
    margin: 0 auto;
}

.grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 10em);
	grid-gap: 2em;
    height: auto;
    width: auto;
}

.verticalItem{
    margin-left: 3em;
}

</style>
