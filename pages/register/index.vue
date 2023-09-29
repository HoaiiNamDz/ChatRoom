<template lang="">
    <div class="flex flex-col m-auto items-center justify-center container relative top-1/2 -translate-y-1/2 w-full">
        <div class="text-center mb-4">
            <h1 class="text-2xl font-bold leading-9 tracking-tight text-gray-800">Sign up</h1>
            <p class="text-base text-gray-700">Get your ChatRoom account now</p>
        </div>
        <div class="bg-white p-10">
            <form class="space-y-5" @submit.prevent="onSubmit" >
                <div class="">
                    <label for="fullname" class="mb-2 block text-sm font-medium leading-6 text-gray-900">Full name</label>
                    <div class="flex items-center">
                        <i class="pi pi-user rounded-md rounded-tr-none rounded-br-none border-gray-300 border-[1px] border-r-0 shadow-sm p-[0.71rem] bg-[#F7F7FF] "></i>
                        <input 
                            id="fullname" 
                            v-model="fullname"
                            type="text" 
                            name="fullname" 
                            required="" 
                            placeholder="Enter your full name"
                            class="block w-full rounded-md rounded-bl-none rounded-tl-none border-0 py-2 pr-28 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-500 bg-[#F7F7FF]"
                        >
                    </div>
                </div>
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
                            class="block w-full rounded-md rounded-bl-none rounded-tl-none border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-500 bg-[#F7F7FF]"
                        >
                    </div>
                </div>
                <div class="">
                    <div class="flex justify-between mb-2">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
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
                            class="block w-full rounded-md rounded-bl-none rounded-tl-none border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-500 bg-[#F7F7FF]"
                        >
                    </div>
                </div>
                <div class="">
                    <div class="flex justify-between mb-2">
                        <label class="block text-sm font-medium leading-6 text-gray-900">Birthday</label>
                    </div>
                    <div class="flex items-center">
                        <div class="flex w-full gap-2">
                            <select id="date" v-model="date" name="date" class="w-full border-[1px] p-2 rounded-md "  >
                                <option v-for="i in 31" :key="i">{{i}}</option>
                            </select>
                            <select id="month" v-model="month" name="month" class="w-full border-[1px] p-2 rounded-md "  >
                                <option v-for="i in 12" :key="i">{{i}}</option>
                            </select>
                            <select id="year" v-model="year" name="year" class="w-full border-[1px] p-2 rounded-md "  >
                                <option v-for="i in years" :key="i">{{i}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="flex justify-between mb-2">
                        <label class="block text-sm font-medium leading-6 text-gray-900">Gender</label>
                    </div>
                    <div class="flex items-center gap-2 ">
                        <label class="flex justify-between w-full border-[1px] p-2 rounded-md cursor-pointer" for="male">
                            <label for="male">Male</label>
                            <input id="male" v-model="gender" name="sex" value="Male" type="radio">
                        </label>
                        <label class="flex justify-between w-full border-[1px] p-2 rounded-md cursor-pointer" for="female">
                            <label for="female">Female</label>
                            <input id="female" v-model="gender" name="sex" value="Female" type="radio">
                        </label>
                    </div>
                </div>
                <div class="">
                    <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
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
            fullname: '',
            email: '',
            password: '',
            date: new Date().getDate(),
            month:new Date().getMonth() + 1,
            year: new Date().getFullYear(),
            gender: '',
        }
    },
    computed: {
        years () {
            const year = new Date().getFullYear()
            return Array.from({length: year - 1900}, (value, index) => 1901 + index)
        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch('register', {
                fullname: this.fullname,
                email: this.email,
                password: this.password,
                // birthday: this.$dateFns.format(new Date(this.year,this.month-1,this.date), 'dd-MM-yyyy'),
                birthday: new Date(this.year,this.month-1,this.date),
                gender: this.gender,
                isLogin: false
            })
            .then((result) => {
                if(result.succes) {
                    this.$toast.success(result.result.message)
                    this.$router.push('/verifyRegister')
                } 
            })
            .catch((error) => {
                this.$toast.error(error.response.data.message)
            })
        }   
    },

}
</script>
<style lang="">
    
</style>