<template lang="">
    <div class="flex flex-col m-auto items-center justify-center container relative top-1/2 -translate-y-1/2 w-full">
        <div class="text-center mb-4">
            <h1 class="text-2xl font-bold leading-9 tracking-tight text-gray-800">Sign in</h1>
            <p class="text-base text-gray-700">Sign in to continue to ChatRoom</p>
        </div>
        <div class="bg-white p-10">
            <form action="" class="space-y-6" @submit.prevent="onSubmit">
                <div class="">
                    <label for="email" class="mb-2 block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="flex items-center">
                        <i class="pi pi-envelope rounded-md rounded-tr-none rounded-br-none border-gray-300 border-[1px] border-r-0 shadow-sm p-[0.71rem] bg-[#F7F7FF] "></i>
                        <input 
                            id="email" 
                            v-model="email"
                            type="text" 
                            name="email" 
                            autocomplete="email" 
                            required="" 
                            placeholder="example@gmail.com"
                            class="block rounded-md rounded-bl-none rounded-tl-none border-0 py-2 w-72 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-500 bg-[#F7F7FF]"
                        >
                    </div>
                </div>
                <div class="">
                    <div class="flex justify-between mb-2">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <nuxt-link to="/resetPassword" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</nuxt-link>
                    </div>
                    <div class="flex items-center">
                        <i class="pi pi-lock rounded-md rounded-tr-none rounded-br-none border-gray-300 border-[1px] border-r-0 shadow-sm p-[0.71rem] bg-[#F7F7FF]"></i>
                        <input 
                            id="password" 
                            v-model="password"
                            type="password" 
                            name="password" 
                            autocomplete="current-password" 
                            required="" 
                            placeholder="Password"
                            class="block w-full rounded-md rounded-bl-none rounded-tl-none border-0 py-2 pr-14 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-500 bg-[#F7F7FF]"
                        >
                    </div>
                </div>
                <div class="">
                    <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                </div>
            </form>
        </div>
        <div class="mt-4">
            <span class="font-medium">Have no account? <nuxt-link to="/register" class="text-md font-medium leading-6 text-gray-500 hover:text-gray-900">Register here!</nuxt-link></span>
        </div>
    </div>
</template>
<script>
import 'primeicons/primeicons.css';
export default {
    layout: 'auth',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password,
                isLogin: true
            })
            .then((result) => {
                if(result.succes) {
                    this.$router.push('/chat')
                } 
            })
        }
    }
}
</script>
<style>
</style>