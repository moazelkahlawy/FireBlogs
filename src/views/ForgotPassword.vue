<template>
<div class="reset-password">
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <Loading v-if="loding" />
    <div class="form-wrap">
        <form class="reset">
              <p class="login-register">
                Back to
                <router-link class="router-link" :to="{ name: 'Login'}">Login</router-link>
            </p>
            <h2>Reset Password</h2>
            <p class="login-register">Forgot your password? Enter your email to reset it</p>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                    <email class="icon" />
                </div>
            </div>
            <button @click.prevent="resetPassword">Reset</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
    </div>
</template>

<script>
    import email from '../assets/Icons/envelope-regular.svg'
    import Modal from '../components/Modal.vue'
    import Loading from '../components/Loading.vue'
    import firebase from 'firebase/app'
    import 'firebase/auth'
    export default {
        name: "ForgotPassword",
        data() {
            return {
                email: "",
                modalActive: false,
                modalMessage: "",
                loding: null
            }
        },
        components : {
            email,
            Modal,
            Loading
        },
        methods: {
            resetPassword(){
                this.loding = true;
                firebase.auth().sendPasswordResetEmail(this.email).then(() => {
                    this.modalMessage = "If your accout exists, you will receive a email";
                    this.loding = false;
                    this.modalActive = true;
                }).catch(err => {
                    this.modalMessage = err.message;
                    this.loding = false;
                    this.modalActive = true;
                })
            },
            closeModal(){
                this.modalActive = !this.modalActive;
                this.email = "";
            }
        },
    }
</script>

<style lang="scss" scoped>
.reset-password{
    position: relative;
    .form-wrap{
        .reset{
            h2{
                margin-bottom: 8px;
            }
            p{
                text-align: center;
                margin-bottom: 32px;
            }
        }
    }
}
</style>