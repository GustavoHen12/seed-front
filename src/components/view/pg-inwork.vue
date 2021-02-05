<template>
    <div class='pg'>
        <h2>{{page}}</h2>
        <h3>Pagina em Construção, aguarde</h3>
        <router-link to='/'>
            <v-btn>Voltar</v-btn>
        </router-link>
    </div>
</template>

<script>
    export default {
        name:"PgInwork",
        props: {
            page:{
                type: String,
                default: '',
            },
        }
    }
</script>
<style scoped lang="scss">
@import "@/css/global.scss";

a{
  text-decoration: none;
}
.pg{
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2, h3{
  text-align: center;
  margin-bottom: 2em;
}

h2{
  color: $primary;
}
</style>
