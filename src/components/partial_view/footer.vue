<template>
    <v-footer
        class='footer'
        padless
    >
        <v-row
            justify='center'
            no-gutters
        >
            <a href='http://www.inf.ufpr.br/ghsb19/'>
                <img src='../../assets/logo/ghsbLogo.png'>
            </a>
        </v-row>
    </v-footer>
    <!-- <div class='footer'>
        <img src='../../assets/logo/ghsbLogo.png'>
    </div> -->
</template>
<script>
    export default {
        name:"GFooter"
    }
</script>

<style scoped>
/* .footer {
  position:absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  border-top: solid 1px #B8B8B8;
  color: white;
  text-align: center;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
} */

.footer {
    margin-top: 3em;
    border-top: solid 1px #B8B8B8;
    color: white;
    text-align: center;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

img{
  margin-top: .8em;
  margin-bottom: .8em;
  margin-right: 2em;
  height: 4em;
  width: auto;
}
</style>
