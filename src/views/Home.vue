<template>
    <div class='home'>
        <!--HEADER-->
        <g-header />
        <cnt-container>
            <!--CONTENT BOX (MISSION)-->
            <div class='all-screen'>
                <div class='section'>
                    <div class='textBtn-cnt'>
                        <text-home
                            :title='textHome.ourMission.title'
                            :text='textHome.ourMission.content'
                        />
                        <g-btn
                            class='mt-12'
                            type='secundary'
                            @click='routerCatalog'
                        >
                            COMO FUNCIONA ?
                        </g-btn>
                    </div>
                    <div class='img-cnt'>
                        <img-animated src='box.png' shadow center />
                    </div>
                </div>
                <div class='mouse position-mouse showOnDesktop' />
            </div>

            <!-- KITS -->
            <div class='section-2'>
                <text-home
                    :title='textHome.kits.title'
                />
                <catalog-kits-home />
                <div>
                    <g-btn
                        class='mt-12'
                        type='text'
                        xlarge
                        @click='routerCatalog'
                    >
                        <div class='mt-1'>
                            Ver mais
                        </div>
                        <template #icon>
                            <v-icon medium>
                                mdi-plus
                            </v-icon>
                        </template>
                    </g-btn>
                </div>
            </div>
            <!-- PROJETOS -->
            <div class='section'>
                <div class='textBtn-cnt'>
                    <text-home
                        :title='textHome.projects.title'
                        :text='textHome.projects.content'
                    />
                    <g-btn
                        class='mt-12'
                        type='secundary'
                        @click='routerCatalog'
                    >
                        CONHECER MAIS
                    </g-btn>
                </div>
                <div class='img-cnt'>
                    <img-animated src='imgBkg3.svg' center />
                </div>
            </div>
        </cnt-container>

        <g-footer />
    </div>
</template>

<script>
    // https://unsplash.com/photos/3l19r5EOZaw
    import textHome from '@/components/text/text-home.vue'
    import imgAnimated from '@/components/image/img-animated.vue'
    import CatalogKitsHome from '@/components/partial_view/catalog-kits-home'
    //services
    import Services from "@/services/services.js"

    export default {
        name: 'Home',
        components: {
            textHome,
            imgAnimated,
            CatalogKitsHome,
        },
        data:function (){
            return {
                textHome: {},
            }
        },
        mounted: function () {
            this.load()
        },
        methods: {
            load: function () {
                this.textHome = Services.getHomeInfo();
            },
            routerCatalog: function () {
                this.$router.push('catalog');
            }
        }
    }
</script>

<style scoped lang="scss">
  @import '../css/global.scss';
  @import '../css/partials/mouse.scss';

  .section{
    height: auto;
    padding-top: 5em;
    margin-bottom: 3em;
    @include md{
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 5em;
    }
  }

  .section-2{
    height: auto;
    padding-top: 5em;
    margin-bottom: 3em;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5em;
  }

  .all-screen{
    @include md{
        min-height: 100vh;
    }
  }

  .textBtn-cnt{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 4em;
      @include md{
          margin-bottom: 0;
          width: 45%;
          min-height: 100%;
          justify-content: start;
          padding-bottom: 5em;
      }
  }

  .img-cnt{
      margin-top: 2em;
      width: 100%;
      margin: 0 auto;
      height: auto;
      width: 320px;
      padding: .3em .8em;
      @include md{
          width: 55%;
          min-height: 100%;
          margin: 0;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
      }
  }

  .position-mouse{
      margin-left: auto;
      margin-right: auto;
      float: bottom;
  }
</style>
