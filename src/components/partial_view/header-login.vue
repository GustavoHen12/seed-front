<template>
    <div class='headerContainer'>
        <div class='navMobile navDesktop'>
            <div>
                <router-link to='/'>
                    <img
                        class='logoImage'
                        alt='BeHope logo'
                        src='../../assets/logo/logo.png'
                    >
                </router-link>
            </div>

            <div class='navDesktop'>
                <g-btn
                    :_to='{name: "Home"}'
                    _type='text'
                >
                    INSCREVA-SE
                </g-btn>
            </div>
        </div>
        <navMobile :enable='expand' />
    </div>
</template>

<script>
    import navMobile from '@/components/buttons/navMenuMobile.vue'

    export default {
        name:"HeaderLogin",
        components:{
            navMobile
        },
        data: function(){
            return {expand : false}
        }
    }
</script>

<style scoped lang="scss">
@use "@/css/modules/_typography.scss";
@import "@/css/global.scss";

.navDesktop{
    display: none;
}
.headerContainer{
    height: auto;
    width: 100%;
}

.navMobile{
    padding-top: .5em;
    padding-left: 1em;
    padding-right: 1em;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.logoImage{
    height: 2.5em;
    width: auto;
}

.iconsHeader{
    height: auto;
    width: auto;
    display: flex;
    .icon{
        height: auto;
        width: 2em;
        margin-left: 1em;
    }
}

@media screen and (min-width: 641px){
.navMobile{
    display: none;
}

.navDesktop{
    padding-top: 1em;
    padding-left: 1.5em;
    padding-right: 1.5em;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.btnTitle{
    font-family: 'Lato';
    font-weight: 800;
    font-size: 27pt;
}

.logoImage{
    height: 4em;
    width: auto;
}

.headerLinks{
    a{
        @include typography.link;
        margin-left: 1em;
    }
}
}
</style>
