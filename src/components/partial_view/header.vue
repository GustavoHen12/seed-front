<template>
    <div id='header' class='wraper is-transparent is-fixed-top'>
        <div class='headerContainer'>
            <div class='header'>
                <div class='logoSection'>
                    <router-link to='/'>
                        <img
                            class='logoImage'
                            alt='BeHope logo'
                            src='../../assets/logo/logo.png'
                        >
                    </router-link>
                    <div
                        v-if='userLogged'
                        class='headerLinks showOnDesktop'
                    >
                        <router-link to='/'>
                            HOME
                        </router-link>
                        <router-link to='/'>
                            PROJETOS
                        </router-link>
                    </div>
                </div>

                <div
                    v-if='!userLogged'
                    class='headerLinks showOnDesktop'
                >
                    <router-link to='/'>
                        HOME
                    </router-link>
                    <router-link to='/'>
                        SOBRE
                    </router-link>
                    <router-link to='/'>
                        CONTATOS
                    </router-link>
                </div>

                <div class='rightSection'>
                    <bag-button class='icon' />
                    <div v-if='userLogged'>
                        <v-menu
                            v-model='menu'
                            :close-on-content-click='false'
                            :nudge-width='200'
                            rounded='0'
                            offset-y
                        >
                            <template #activator='{ on, attrs }'>
                                <g-btn
                                    class='showOnDesktop'
                                    v-bind='attrs'
                                    type='text'
                                    xlarge
                                    v-on='on'
                                >
                                    PERFIL
                                </g-btn>
                                <g-btn
                                    class='showOnMobile icon'
                                    icon
                                    v-bind='attrs'
                                    v-on='on'
                                >
                                    <v-icon color='black' large>
                                        mdi-account-outline
                                    </v-icon>
                                </g-btn>
                            </template>
                            <v-card>
                                <v-list flat>
                                    <v-list-item-group>
                                        <v-list-item @click='history'>
                                            <v-list-item-title>
                                                Histórico
                                            </v-list-item-title>
                                        </v-list-item>
                                        <v-list-item @click='logout'>
                                            <v-list-item-title>
                                                Logout
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-card>
                        </v-menu>
                    </div>
                    <div v-else>
                        <g-btn
                            class='showOnMobile icon'
                            icon
                        >
                            <v-icon color='black' large>
                                mdi-account-outline
                            </v-icon>
                        </g-btn>
                        <div class='showOnDesktop'>
                            <g-btn
                                type='text'
                                xlarge
                                :_to='{name: "Login"}'
                            >
                                LOGIN
                            </g-btn>
                        </div>
                    </div>
                    <g-btn
                        class='showOnMobile icon'
                        icon
                        @click='() => {expand = !expand}'
                    >
                        <v-icon
                            large
                            color='black'
                        >
                            mdi-menu
                        </v-icon>
                    </g-btn>
                </div>
            </div>
            <navMobile :enable='expand' />
        </div>
    </div>
</template>

<script>
    import navMobile from '@/components/buttons/navMenuMobile.vue'
    import bagButton from '@/components/buttons/bag.vue'

    export default {
        name:"Header",
        components:{
            navMobile,
            bagButton,
        },
        data: function(){
            return {
                expand : false,
                menu: false,
            }
        },
        computed: {
            userLogged() {
                //return false;
                return this.$store.state.auth.status.loggedIn;
            },
        },
        // https://codesandbox.io/s/lxkp1m4xjq?file=/pages/index.vue:3153-3232
        mounted() {
            this.$nextTick(function(){
                window.addEventListener("scroll", function(){
                    var header = document.getElementById("header");
                    var nav_classes = header.classList;
                    if(document.documentElement.scrollTop >= 50) {
                        if (nav_classes.contains("shrink") === false) {
                            nav_classes.toggle("shrink");
                        }
                    }
                    else {
                        if (nav_classes.contains("shrink") === true) {
                            nav_classes.toggle("shrink");
                        }
                    }
                })
            })
        },
        methods: {
            logout() {
                this.$store.dispatch('auth/logout');
                this.$router.push('/login');
            },
            history() {
                console.log('history');
            },
        },
    }
</script>

<style scoped lang="scss">
@use "@/css/modules/_typography.scss";
@import "@/css/global.scss";
@import 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css';

.headerContainer{
    height: auto;
    width: 100%;
    @include xl{
        min-width: $screen-xl-min;
        max-width: $screen-xl-min;
        margin-left: auto;
        margin-right: auto;
    }
}

.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: .5em;
  padding-left: 1em;
  padding-right: 1em;
  @include md{
      padding-top: 1em;
      padding-bottom: 1em;
      padding-left: 1.5em;
      padding-right: 1.5em;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
  }
}

.is-transparent{
    background-color: transparent;
}

.is-fixed-top{
    position: fixed; /* Fixed position - sit on top of the page */
    top: 0;
    width: 100vw;
    transition: 0.2s;
    z-index: 20;
}

.shrink {
    background: rgb(255,255,255);
    background: -moz-linear-gradient(126deg, rgba(255,255,255,1) 0%, rgba(248,248,248,1) 28%, rgba(242,242,242,1) 100%);
    background: -webkit-linear-gradient(126deg, rgba(255,255,255,1) 0%, rgba(248,248,248,1) 28%, rgba(242,242,242,1) 100%);
    background: linear-gradient(126deg, rgba(255,255,255,1) 0%, rgba(248,248,248,1) 28%, rgba(242,242,242,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#f2f2f2",GradientType=1);
    -webkit-box-shadow: 2px -2px 25px -2px rgba(0,0,0,0.62);
    box-shadow: 2px -2px 25px -2px rgba(0,0,0,0.62);
    @include md{
        padding-top: .5;
        .logoImage{
            height: 3em;
        }
    }
}

.logoImage{
    height: 2.5em;
    width: auto;
    @include md{
        height: 4em;
        width: auto;
        margin-right: 2em;
        transition: 0.2s;
    }
}

.headerLinks{
    a{
        @include typography.link;
        margin-left: 1em;
    }
}

.logoSection{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.rightSection{
    display: flex;
    flex-direction: row;
    align-items: center;

    .icon{
        margin-right: .8em;
        @include md {
            margin-right: 2em;
        }
    }

    @include md {
        padding-right: 1.3em;
    }
}
</style>
