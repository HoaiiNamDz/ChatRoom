<template lang="">
    <div class="flex flex-col m-auto items-center justify-center container relative top-1/2 -translate-y-1/2 w-full">
        <div class="text-center mb-4">
            <h1 class="text-2xl font-bold leading-9 tracking-tight text-gray-800">Reset Password</h1>
            <p class="text-base text-gray-700">Reset Password with ChatRoom</p>
        </div>
        <div class="bg-white p-10">
            <form action="" class="space-y-6">
                <div class="">
                    <label for="email" class="mb-2 block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="flex items-center">
                        <i class="pi pi-envelope rounded-md rounded-tr-none rounded-br-none border-gray-300 border-[1px] border-r-0 shadow-sm p-[0.71rem] bg-[#F7F7FF] "></i>
                        <input 
                            id="email" 
                            type="text" 
                            name="email" 
                            autocomplete="email" 
                            required="" 
                            placeholder="Enter your email address"
                            class="block w-72 rounded-md rounded-tl-none rounded-bl-none border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-500 bg-[#F7F7FF]"
                        >
                    </div>
                </div>
                <div class="">
                    <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Reset</button>
                </div>
            </form>
        </div>
        <div class="mt-4">
            <span class="font-medium">Remember it? <nuxt-link to="/login" class="text-md font-medium leading-6 text-gray-500 hover:text-gray-900">Sign in!</nuxt-link></span>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'auth'
}
</script>
<style lang="">
    
</style>