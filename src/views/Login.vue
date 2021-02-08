<template>
    <cnt-container class='ma-0'>
        <g-header class='mobile' />
        <div class='content'>
            <div class='formContainer'>
                <header-login class='desktop' />

                <v-form
                    ref='form'
                    lazy-validation
                    class='form'
                >
                    <v-text-field
                        v-model='user.username'
                        :rules='[rules.required]'
                        label='Usuário'
                        outlined
                        dense
                        required
                    />
                    <v-text-field
                        v-model='user.password'
                        :append-icon='show ? "mdi-eye" : "mdi-eye-off"'
                        :rules='[rules.required, rules.min]'
                        :type='show ? "text" : "password"'
                        label='Senha'
                        outlined
                        dense
                        @click:append='show = !show'
                    />
                    <div class='links'>
                        <a
                            class='forgetPwd'
                            href='/'
                        >Esqueci a senha</a>
                        <g-btn
                            _type='primary'
                            class='mt-1'
                            :disabled='loading'
                            @click='login'
                        >
                            Login
                        </g-btn>
                    </div>
                    <div v-if='loginError'>
                        <v-alert
                            class='error'
                            dismissible
                            elevation='12'
                            type='error'
                        >
                            {{errorMessage}}
                        </v-alert>
                    </div>
                    <div
                        v-if='loading'
                        class='loading'
                    >
                        <v-progress-circular
                            indeterminate
                            color='primary'
                        />
                    </div>
                </v-form>
            </div>
            <div class='image'>
                <v-img
                    src='../assets/img/imgBkg2.jpg'
                    height='100vh'
                />
            </div>
        </div>
    </cnt-container>
</template>

<script>
    import HeaderLogin from '@/components/partial_view/header-login.vue'

    import User from '@/models/user';

    export default {
        name:"Login",
        components:{
            HeaderLogin,
        },
        data () {
            return {
                show: false,
                user: new User('', ''),
                loginError: false,
                loading: false,
                errorMessage: 'Usuário ou senha incorretos',
                message: '',
                rules: {
                    required: value => !!value || 'Obrigatório.',
                    min: v => v.length >= 8 || 'No mínimo 8 caracteres',
                    emailMatch: () => (`The email and password you entered don't match`),
                },
            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            }
        },
        created() {
            if (this.loggedIn) {
                this.$router.push({name: 'Home'});
            }
        },
        methods: {
            login () {
                const validate = this.$refs.form.validate();
                if(validate){
                    if (this.user.username && this.user.password) {
                        this.$store.dispatch('auth/login', this.user).then(
                            () => {
                                this.$router.push('/');
                            },
                            error => {
                                this.loading = false;
                                this.loginError = true;
                                this.message = error.message;
                            }
                        );
                    }
                }
            },
        },
    }
</script>

<style scoped lang="scss">
@use "@/css/modules/_typography.scss";
@import "@/css/global.scss";

.formContainer{
    margin-top: 5em;
}

.form{
    padding: 1.5em;
    @include md{
        padding: 0;
    }
}
.forgetPwd{
    @include typography.link;
    opacity: 0.5;
    font-weight: 500;
}

.links{
    text-align: right;
}

.image{
    display: none;
}

.desktop{
    display: none;
}

.error{
    margin-top: 3em;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}

.loading{
    margin-top: 3em;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-content: center;
}

.content{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    @include md{
        flex-direction: row;
    }
}
@media screen and (min-width: $screen-md-min){
    .mobile{
        display: none;
    }
    .container{
        display: flex;
        flex-direction: row;
    }
    .image{
        display: block;
        height: 100vh;
        width: 45%;
    }
    .formContainer{
        margin: 0;
        height: 100vh;
        width: 55%;
    }
    .form{
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10em;
    }

    .desktop{
        display: block;
    }
}
</style>
