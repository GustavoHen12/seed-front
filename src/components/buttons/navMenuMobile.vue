<template>
    <v-expand-transition>
        <div
            v-show='enable'
            class='topnav'
        >
            <router-link to='/'>
                <h4>
                    HOME
                </h4>
            </router-link>
            <router-link to='/'>
                <h4>
                    CONTATO
                </h4>
            </router-link>
            <router-link to='/'>
                <h4>
                    SOBRE
                </h4>
            </router-link>
        </div>
    </v-expand-transition>
</template>
<script>
    export default {
        name:"NavMenuMobile",
        props: {
            enable: {
                type:Boolean,
                default: false,
            },
        },
        methods:{
            myFunction: function () {
                var x = document.getElementById("myLinks");
                if (x.style.display === "block") {
                    x.style.display = "none";
                } else {
                    x.style.display = "block";
                }
            }
        }

    }
</script>
<style scoped lang="scss">
.icon{
    height: auto;
    width: 2em;
    margin-left: 1em;
}

.topnav{
  background-color: white;
}
/* Hide the links inside the navigation menu (except for logo/home) */
.topnav #myLinks {
  display: none;
}

/* Style navigation menu links */
.topnav a {
  color: black;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: flex;
  justify-content: center;
}

/* Add a grey background color on mouse-over */
.topnav a:hover {
  background-color: #F8F8F8;
  color: black;
}

</style>
