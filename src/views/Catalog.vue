<template>
    <div>
        <g-header />
        <cnt-container class='page'>
            <div
                v-for='project in projectsList'
                :key='project.name'
            >
                <catalog-project
                    :_name='project.name'
                    _color='yellow'
                />
            </div>
        </cnt-container>
        <g-footer />
    </div>
</template>

<script>
    import catalogProject from '@/components/partial_view/catalog-project.vue'

    //services
    import Projects from "@/services/projects.js"

    export default {
        name:"Projects",
        components:{
            catalogProject,
        },
        data: function () {
            return {
                projectsList: null
            }
        },
        mounted: function () {
            this.load();
        },
        methods: {
            load: function () {
                this.projectsList = Projects.get();
            },
        }
    }
</script>

<style scoped lang="scss">
    @import '../css/global.scss';
    .page {
        min-height: 100vh;
    }
</style>
