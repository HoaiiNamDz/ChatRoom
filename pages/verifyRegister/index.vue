<template lang="">
    <div class="flex flex-col m-auto items-center justify-center container relative top-1/2 -translate-y-1/2 w-full">
        <div class="text-center mb-4">
            <h1 class="text-2xl font-bold leading-9 tracking-tight text-gray-800">Verify Account</h1>
            <p class="text-base text-gray-700">Verify your account with ChatRoom</p>
        </div>
        <div class="bg-white p-10">
            <form class="space-y-6">
                <div class="">
                    <div class="flex justify-between mb-2">
                        <label for="verify" class="mb-2 block text-sm font-medium leading-6 text-gray-900">OTP Code ({{minutes}}:{{seconds}})</label>
                        <a v-if="this.totalTime == 0" class="font-medium cursor-pointer text-indigo-600 hover:text-indigo-500" @click.prevent="reSendOTP">Resend OTP</a>
                    </div>
                    <div class="flex items-center gap-4">
                        <input  
                            v-for="index in 6"
                            :key="index"
                            :data-index="index-1"
                            type="text" 
                            name="verify" 
                            required
                            maxlength="1" 
                            autofocus
                            class="block w-10 rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-500 bg-[#F7F7FF]"
                            @keyup="autoFocusNextInput"
                            @change="handleOnChange"
                        >
                    </div>
                </div>
                <div class="">
                    <button class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click.prevent="verify">Verify</button>
                </div>
            </form>
        </div>
        <div class="mt-4">
            <span class="font-medium">Already have an account? <nuxt-link to="/login" class="text-md font-medium leading-6 text-gray-500 hover:text-gray-900">Sign in!</nuxt-link></span>
        </div>
    </div>
</template>
<script> 

export default {
    layout: 'auth',
    data() {
        return {
            otp: [],
            otpJoined: '',
            totalTime: 60,
            timer: null,
        }
    },
    computed: {
        minutes() {
            return Math.floor(this.totalTime/60).toString().padStart(2, '0')
        },
        seconds() {
            return (this.totalTime%60).toString().padStart(2, '0')
        }
    },
    mounted() {
        this.countdown(this.totalTime)
    },
    methods: {
        autoFocusNextInput(e) {
            const inputElements = document.querySelectorAll('input')
            if(e.target.value.length === 1) {
                if(inputElements[inputElements.length -1].value.length === 1) {
                    return false
                }
                e.target.nextSibling.focus()
            }
            if(e.keyCode === 8 && e.target.dataset.index !== 1) {
                if(inputElements[0].value.length === 0) {
                    return false
                }
                e.target.previousSibling.focus()
            }
        },
        verify() {
            this.$store.dispatch('verifyRegister', {
                otp: this.otpJoined,
                fullname: this.$store.getters.getData.fullname,
                email: this.$store.getters.getData.email,
                password: this.$store.getters.getData.password,
                birthday: this.$store.getters.getData.birthday,
                gender: this.$store.getters.getData.gender,
                id: this.$store.getters.getData.id
            })
            .then(() => {
                this.$toast.success('Register successfully')
                this.$router.push('/login')
            })
            .catch((error) => {
                this.otp = []
                this.$toast.error(error.response.data.message)
            })
        },
        handleOnChange(e) {
            this.otp.push(e.target.value);
            this.otpJoined = this.otp.join('');
        },
        countdown() {
            this.timer = setInterval(() => {
                this.totalTime--;
                if(this.totalTime === 0) {
                    clearInterval(this.timer);
                }
            }, 1000);
        },
        reSendOTP() {
            const inputElements = document.querySelectorAll('input')
            this.totalTime = 60
            this.countdown()
            this.$store.dispatch('reSendOTP', {
                email: this.$store.getters.getData.email,
                id: this.$store.getters.getData.id
            })
            inputElements.forEach(inputElement => {inputElement.value = ''})
            this.otp = []
        }
    },
}
</script>
<style lang="">
    
</style>