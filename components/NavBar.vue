<template>
    <div class="border-2 border-gray-100 w-[380px] max-h-screen py-6 overflow-hidden pl-1 relative">
        <div class="absolute w-full bg-white top-0 pt-4 px-4">
            <div class="flex justify-between items-baseline">
                <h1 class="font-bold text-3xl text-green-600 drop-shadow-xl">ChatRoom</h1>
                <div class="relative">
                    <font-awesome-icon :icon="['fas', 'gear']" class="text-lg cursor-pointer" @click="showSetting"/>
                    <div  v-show="showSettings" class="z-50 absolute right-7 -top-5 p-3 w-24 bg-gray-200 shadow-xl rounded-lg after:absolute after:border-l-[10px] after:border-l-gray-200 after:border-b-transparent after:border-t-[10px] after:border-b-[10px] after:border-t-transparent after:top-5 after:-right-2">
                        <p class="cursor-pointer" @click="onLogout">Logout</p>
                        <p class="cursor-pointer">My profile</p>
                    </div>
                </div>
            </div>
            <div class="relative my-4">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="absolute leading-none top-1/2 -translate-y-1/2 left-2 text-gray-500"/>
                <input type="text" placeholder="Search" class="w-full outline-none border border-gray-500 h-full pl-7 p-2 rounded-full">
            </div>
            <div class="flex items-center justify-between">
                <h2 class="text-md text-gray-600 pb-2">Message</h2>
                <i class="pi pi-plus p-1 border mr-1 border-gray-400 rounded-sm cursor-pointer" @click="toogleModalAddFriends"></i>
            </div>
            
        </div>
        <div class="mt-36">
            <ul class="overflow-auto max-h-screen px-1">
                <li v-for="i in 20" :key="i" class="flex items-center w-full hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
                    <img src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg" alt="" class="w-12 h-12 rounded-full">
                    <div class="ml-2 flex-1">
                        <div class="flex justify-between items-center">
                            <h2 class="font-semibold">Name</h2>
                            <p class="text-sm">1:25</p>                           
                        </div>
                        <div class="w-52 truncate">
                            <span class="text-gray-500 text-sm ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea nisi quae soluta enim, rerum ipsa cupiditate quisquam laudantium ut esse ad, voluptatibus cum eveniet ex aliquam necessitatibus commodi quidem in.</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isLogin: false,
            showSettings: false,
            modalAddFriends: false
        }
    },
    methods: {
        onLogout() {
            this.$store.dispatch('logout');
            this.$router.push('/')
            this.isLogin = true
        },
        showSetting() {
            this.showSettings = !this.showSettings
        },
        toogleModalAddFriends() {
            this.$emit('modal-add-friend', this.modalAddFriends)
        }
    }
}
</script>
<style>
</style>