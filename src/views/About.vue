<template>
    <!--CREDITOS-->
    <!-- <a href='https://www.freepik.com/psd/mockup'>Mockup psd created by freepik - www.freepik.com</a> -->
    <div class='home'>
        <!--HEADER-->
        <headerWithoutLogin />

        <cntContainer>
            <!--CONTENT BOX (MISSION)-->
            <cntSection>
                <div class='reordDesktop'>
                    <textHome
                        :title='text1.title'
                        :text='text1.content'
                    />
                    <div class='imageContainer'>
                        <imgAnimated src='imgBkg1.png' />
                    </div>
                </div>
                <div class='btnArea'>
                    <btnMain
                        title='CESTAS'
                        :on-click='routerCatalog'
                    />
                </div>
            </cntSection>

            <!--CONTENT BOX (WHAT WE ALREADY DID)-->
            <cntSection>
                <cntWing color='#F2E635'>
                    <template #content>
                        <div class='positionText'>
                            <textHome
                                :title='text2.title'
                                :text='text2.content'
                            />
                        </div>
                    </template>
                    <template #box>
                        <imgAnimated
                            style='margin-right:2em;'
                            src='imgBkg2.jpg'
                            height='25em'
                        />
                    </template>
                </cntWing>
            </cntSection>

            <!--CONTENT BOX (HOW TO)-->
            <cntSection>
                <div class='tutorialContainer'>
                    <h2>Como ajudar ?</h2>
                    <div class='tutorialCarousel'>
                        <v-carousel
                            :show-arrows='false'
                            hide-delimiter-background
                            light
                        >
                            <v-carousel-item
                                v-for='(item,index) in items'
                                :key='index'
                            >
                                <tutorialCard
                                    :title='index'
                                    :content='item.content'
                                />
                            </v-carousel-item>
                        </v-carousel>
                    </div>
                    <div
                        v-for='(item,index) in items'
                        :key='index'
                        class='tutorialWing'
                    >
                        <cntWing
                            shadow
                            color='#FFFFFF'
                        >
                            <template #content>
                                <div class='tutorialText'>
                                    <p>{{item.content}}</p>
                                </div>
                            </template>
                            <template #box>
                                <div class='tmpBox'>
                                    {{index+1}}
                                </div>
                            </template>
                        </cntWing>
                    </div>
                </div>
            </cntSection>
        </cntContainer>

        <footerCustom />
    </div>
</template>

<script>
// https://unsplash.com/photos/3l19r5EOZaw
//partial_view
    import headerWithoutLogin from '@/components/partial_view/header.vue'
    import footerCustom from '@/components/partial_view/footer.vue'
    //layout
    import cntContainer from '@/components/layout/cnt-container.vue'
    import cntSection from '@/components/layout/cnt-section.vue'
    import cntWing from '@/components/layout/cnt-wing.vue'
    //text
    import textHome from '@/components/text/text-home.vue'
    //image
    import imgAnimated from '@/components/image/img-animated.vue'
    //buttons
    import btnMain from '@/components/buttons/btn-main.vue'
    //card
    import tutorialCard from '@/components/card/tutorialCard.vue'


    export default {
        name: 'Sobre',
        components: {
            headerWithoutLogin,
            textHome,
            imgAnimated,
            btnMain,
            tutorialCard,
            footerCustom,
            cntContainer,
            cntSection,
            cntWing,
        },
        data:function(){
            return {
                text1:{
                    title: "Nossa missão: Transformar",
                    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus lacus quis vestibulum blandit. Nullam ac cursus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vel luctus orci. Cras mollis sit amet sem at vulputate. Aliquam mattis ultrices leo, sed fermentum ex dapibus consequat. Curabitur egestas iaculis justo eget feugiat. Etiam semper ut quam quis porttitor. Phasellus tempor orci quis arcu euismod ultricies. "
                },
                text2:{
                    title: "O que já conseguimos fazer",
                    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus lacus quis vestibulum blandit. Nullam ac cursus lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vel luctus orci. Cras mollis sit amet sem at vulputate. Aliquam mattis ultrices leo, sed fermentum ex dapibus consequat. Curabitur egestas iaculis justo eget feugiat. Etiam semper ut quam quis porttitor. Phasellus tempor orci quis arcu euismod ultricies. "
                },
                items: [
                    {
                        content: 'Faça seu cadastro ou login no BeHope',
                    },
                    {
                        content: 'Selecione o projeto que você gostaria de contribuir',
                    },
                    {
                        content: 'Adicione em sua cesta',
                    },
                    {
                        content: 'Faça sua doação',
                    },
                ],
            }
        },
        methods: {
            routerCatalog() {
                this.$router.push('catalog');
            }
        }
    }
</script>

<style scoped lang="scss">
  @import '../css/global.scss';

  .tmpBox{
    background-color:#3726A6;
    width: 100%;
    min-height: 100%;
    color: #F8F8F8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body{
    background-color: #F8F8F8;
    margin: 0;
    padding: 0%;
  }

  .tutorialContainer{
    width: 100%;
    margin-bottom: 15em;
    h2{
      margin-left: 2em;
      margin-bottom: 2em;
    }
  }
  .tutorialCarousel{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
  }

  .btnArea{
    width: 40%;
    margin-top: 3em;
    margin-left: auto;
    margin-right: auto;
  }

  .imageContainer{
    width: 100%;
    height: 20em;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }

  .positionText{
    margin-top: 2em;
    margin-bottom: 10em;
  }

@media screen and (min-width: $screen-md-min){
  .tutorialCarousel{
    display: none;
  }

  .reordDesktop{
    display: flex;
    flex-direction: row;
  }

  .btnArea{
    width: 15em;
  }

  .positionImage2{
      bottom: -5em;
      right: 2em;
  }

  .positionText{
    margin-top: 4em;
    margin-bottom: 4em;
  }

  .tutorialWing{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .tutorialText{
    margin: 2em 5em 3em 5em;
    p{
      text-align: left;
    }
  }
}
</style>
