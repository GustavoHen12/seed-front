<template>
    <div id='header' class='headerContainer is-transparent is-fixed-top'>
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
                <g-btn
                    class='icon'
                    color='primary'
                    icon
                >
                    <v-icon large>
                        $iconBag
                    </v-icon>
                </g-btn>
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
</template>

<script>
    import navMobile from '@/components/buttons/navMenuMobile.vue'

    export default {
        name:"Header",
        components:{
            navMobile
        },
        data: function(){
            return {expand : false}
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
                    if(document.documentElement.scrollTop >= 150) {
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
      padding-left: 1.5em;
      padding-right: 1.5em;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
  }
}

shrink {
  padding: 0.3rem;
  background: gray;
}

.logoImage{
    height: 2.5em;
    width: auto;
    @include md{
        height: 4em;
        width: auto;
        margin-right: 2em;
    }
}

.iconsHeader{
    height: auto;
    width: auto;
    display: flex;
    .icon{
        height: auto;
        width: 2em;
        margin-right: 1em;
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
