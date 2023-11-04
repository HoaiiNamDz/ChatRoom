<template lang="">
    <div class="relative border-2 border-gray-100 w-[380px] max-h-screen py-6 overflow-hidden px-2">
        <img src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg" alt="" class="w-20 h-20 rounded-full border-2 border-green-400 p-[1px] m-auto">
        <h2 class="text-center text-lg mt-2 font-semibold">Name</h2>
        <div class="flex justify-center text-green-600 text-center mt-2 gap-4">
            <i class="pi pi-phone cursor-pointer p-2 hover:bg-gray-100 hover:rounded-full"></i>
            <i class="pi pi-video cursor-pointer p-2 hover:bg-gray-100 hover:rounded-full"></i>
        </div>
        <p class="font-semibold text-stone-400 text-sm my-2">PHONE NUMBER</p>
        <div class="bg-gray-100 rounded-xl">
            <p class="text-sm pl-3 p-4">+84 855 185 913</p>
        </div>
        <p class="font-semibold text-stone-400 text-sm my-2">BIO</p>
        <div class="bg-gray-100 rounded-xl">
            <p class="text-sm pl-3 p-24 pt-2">Fullstack Developer</p>
        </div>
        <p class="font-semibold text-stone-400 text-sm my-2">ATTACHMENTS </p>
        <div v-for="(attachment, index) in attachments" :key="index" :class="activeIndex" class="flex items-center gap-2 hover:bg-gray-100 hover:rounded-md cursor-pointer p-2 my-2" @click="toogleMediaModal(index)" >
            <i class=" text-green-500 text-xl bg-gray-100 p-2 rounded-full" :class="attachment.icon"></i>
            <p class="text-md font-medium">{{attachment.name}}</p>
        </div>
        <transition name="fade">
            <div v-if="isShowMediaModal" class="absolute right-0 top-0 h-full w-full bg-white ">
                <div class="flex items-baseline gap-4">
                    <i class="pi pi-arrow-left ml-2 mt-2 p-2 border rounded-full bg-gray-100 cursor-pointer" @click="toogleMediaModal"></i>
                    <h1 class="text-lg font-semibold">MEDIA FILES, FILES, LINKS</h1>
                </div>
                <ul class="flex justify-between mt-3 mx-4 border rounded-full">
                    <li  v-for="(attachment, index) in attachments" :key="index" class="cursor-pointer hover:bg-gray-100 hover:rounded-full p-2 px-8" :class="{ 'active': activeIndex === index }" @click="setActive(index)">{{attachment.name}}</li>
                </ul>
                <div v-if="activeIndex !== null" class="text-gray-500 text-center flex flex-col justify-center h-full">
                    <h1 class="">{{ attachments[activeIndex].title}}</h1>
                    <h2 class="">{{ attachments[activeIndex].content}}</h2>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShowMediaModal: false,
            activeIndex: 0,
            attachments: [
                {
                    name: 'Media Files',
                    title: "Don't have any attachments !",
                    content: "Your attachments with Name will appear here",
                    icon: 'pi pi-images'
                }, 
                {
                    name: 'Files',
                    title: "",
                    content: "",
                    icon: 'pi pi-file'
                }, 
                {
                    name: 'Links',
                    title: "Don't have any attachments !",
                    content: "Your attachments with Name will appear here",
                    icon: 'pi pi-link'
                }, 
            ],
        }
    },
    methods: {
        toogleMediaModal(index) { 
            this.isShowMediaModal = !this.isShowMediaModal;
            this.setActive(index)
        },
        setActive(index) {
            this.activeIndex = index;
        }
    }
}
</script>
<style>
    .fade-enter-active {
        opacity: 0;
        animation: fade 0.08s ease;
    }
    .fade-leave-active {
        opacity: 0;
    }
    @keyframes fade {
        from {
            opacity: 0;
            transform: translateX(-10px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    .active {
        background-color: rgb(229, 231, 235);
        font-weight: 600;
        border-radius: 999px;
    }
</style>