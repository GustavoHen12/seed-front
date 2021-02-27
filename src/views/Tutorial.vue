<template>
    <div class='tutorial'>
        <g-header />
        <cnt-container>
            <div class='section mb-0'>
                <div class='textBtn-cnt'>
                    <text-home
                        title='Como funciona ?'
                        text='Imagine estar em uma loja virtual, mas ao invés de comprar algo para você, é possível doar para aqueles que mais precisam. Isso é o Behope.'
                    />
                </div>
                <div class='img-cnt'>
                    <img-animated src='about1.svg' center />
                </div>
            </div>

            <v-row no-gutters align='center'>
                <v-col
                    v-for='character in text.characters'
                    :key='character.title'
                    cols='12'
                    sm='4'
                    class='center mb-6'
                >
                    <v-hover v-slot='{ hover }'>
                        <v-card
                            :elevation='hover ? 15 : 8'
                            height='370px'
                            width='280px'
                            rounded='lg'
                        >
                            <v-img
                                height='150'
                                contain
                                :src='require("@/assets/img/" + character.img)'
                                class='mt-10'
                            />
                            <v-card-title>
                                {{character.title}}
                            </v-card-title>
                            <v-card-text>
                                {{character.description}}
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>

            <v-row class='mt-12'>
                <text-home
                    title='Algumas vantagens'
                />
            </v-row>

            <!-- Project Advantages -->
            <v-row class='mt-12 center'>
                <h2>Projetos</h2>
            </v-row>
            <v-row class='mt-10 center'>
                <v-img
                    height='200'
                    contain
                    src='@/assets/img/project2.svg'
                />
            </v-row>
            <v-row no-gutters align='center'>
                <v-col
                    v-for='advantage in text.advantages.project'
                    :key='advantage.title'
                    cols='12'
                    sm='4'
                    class='center-column'
                >
                    <div class='ml-10 mr-10 mt-8'>
                        <p class='adv-title mb-0'>
                            {{advantage.title}}
                        </p>
                        <p class='adv-description'>
                            {{advantage.description}}
                        </p>
                    </div>
                </v-col>
            </v-row>
            <!-- User Advantages -->
            <v-row class='mt-12 center'>
                <h2>Usuário</h2>
            </v-row>
            <v-row class='mt-10 center'>
                <v-img
                    height='200'
                    contain
                    src='@/assets/img/user1.svg'
                />
            </v-row>
            <v-row no-gutters align='center'>
                <v-col
                    v-for='userAdvantage in text.advantages.users'
                    :key='userAdvantage.title'
                    cols='12'
                    sm='4'
                    class='center-column'
                >
                    <div class='ml-10 mr-10 mt-8'>
                        <p class='adv-title mb-0'>
                            {{userAdvantage.title}}
                        </p>
                        <p class='adv-description'>
                            {{userAdvantage.description}}
                        </p>
                    </div>
                </v-col>
            </v-row>
        </cnt-container>
        <g-footer />
    </div>
</template>

<script>
    import textHome from '@/components/text/text-home.vue'
    import imgAnimated from '@/components/image/img-animated.vue'

    import Services from "@/services/services.js"

    export default {
        name: 'Tutorial',
        components: {
            textHome,
            imgAnimated,
        },
        data:function (){
            return {
                text: Services.getTutorialInfo(),
            }
        },
        methods: {
            openPage: function (page) {
                this.$router.push(page);
            }
        }
    }
</script>

<style scoped lang="scss">
  @import '../css/global.scss';
  @import '../css/partials/mouse.scss';

    .v-card {
        transition: all .4s ease-in-out;
    }

    .center{
        display: flex;
        align-content: center;
        justify-content: center;
    }

    .center-column{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;

        p{
            text-align: center;
        }

        .adv-title{
            font-weight: 700;
            font-size: 15pt;
        }

        .adv-description{
            font-weight: 500;
            font-size: 14pt;
        }
    }
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

