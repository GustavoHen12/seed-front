<template>
    <div id='app'>
        <v-app>
            <router-view />
        </v-app>
    </div>
</template>

<style lang="scss">
@import "./css/global.scss";

body{
  background-color: #F8F8F8;
  margin: 0;
  padding: 0%;
}
#app {
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: black;
    // background-color: var(--v-background-base);
    // https://cssgradient.io/
    background: rgb(255,255,255);
    background: -moz-linear-gradient(126deg, rgba(255,255,255,1) 0%, rgba(248,248,248,1) 28%, rgba(242,242,242,1) 100%);
    background: -webkit-linear-gradient(126deg, rgba(255,255,255,1) 0%, rgba(248,248,248,1) 28%, rgba(242,242,242,1) 100%);
    background: linear-gradient(126deg, rgba(255,255,255,1) 0%, rgba(248,248,248,1) 28%, rgba(242,242,242,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#f2f2f2",GradientType=1);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
