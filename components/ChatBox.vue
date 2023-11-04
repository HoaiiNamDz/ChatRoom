<template lang="">
    <div class="flex flex-col justify-between h-screen bg-gray-200 overflow-hidden relative">
        <div class="bg-white w-full z-10">
            <div class="flex justify-between items-center py-4 shadow-md ">
                <div class="flex items-center rounded-lg cursor-pointer ml-4">
                    <img src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg" alt="" class="w-12 h-12 rounded-full">
                    <div class="ml-2 flex-1">
                        <div class="flex justify-between items-center">
                            <h2 class="font-semibold">Name</h2>                         
                        </div>
                        <div class="w-52 truncate">
                            <span class="text-green-500 text-sm">Typing...</span>
                        </div>
                    </div>
                </div>
                <div class="flex gap-4 text-lg text-green-600 cursor-pointer mr-4">
                    <i class="pi pi-video p-2 hover:bg-gray-100 hover:rounded-full"></i>
                    <i class="pi pi-phone p-2 hover:bg-gray-100 hover:rounded-full"></i>
                    <i class="pi pi-info-circle p-2 hover:bg-gray-100 hover:rounded-full" @click="handleInfoBar"></i>
                </div>
            </div>
        </div>
        <div class="overflow-y-scroll flex-1 flex items-end flex-col justify-end">
            <ul>
                <li v-for="msg in messages" :key="msg">
                    <span>{{msg.userName}}</span>
                    <span>{{msg.message}}</span>
                </li>
            </ul>
            <h1 class="text-white py-2 px-4 bg-green-600 text-lg my-3 mx-4 rounded-2xl">hello</h1>
        </div>
        <div class="bg-white rounded-3xl m-3 pl-5 overflow-hidden flex items-end gap-1">
            <div class="pb-[0.65rem] relative">
                <font-awesome-icon :icon="['far', 'face-smile']" class="cursor-pointer hover:bg-gray-100 hover:border text-gray-500 text-lg rounded-full" @click="toogleDialogEmoji"/>
            </div>
            <client-only>
                <div 
                    v-show="showDialog" 
                    class="absolute bottom-16 left-4 after:absolute after:border-l-[20px] after:border-r-[20px] after:border-l-transparent after:border-r-transparent after:border-t-[20px] after:border-t-gray-100 after:-bottom-[1.15rem] after:left-2 shadow-xl after:drop-shadow-lg" 
                >
                    <VEmojiPicker
                        class="h-[440px]" 
                        @select="onSelectEmoji"
                    />
                </div>
            </client-only>
            <textarea   
                    v-model="message"
                    rows="1" cols="50" 
                    class="flex-1 p-1 break-words outline-none resize-none overflow-hidden border-r-2 my-2" 
                    placeholder="Write a message" 
                    @input="autoResizeTextarea" 
            ></textarea>
            <div class="pr-6 pb-3">
                <label for="upload-file" class=" cursor-pointer hover:bg-gray-100 hover:rounded-full py-2 px-3 mr-1">
                    <i class="pi pi-paperclip text-gray-400"></i>
                </label>
                <input id="upload-file" type="file" class="hidden" multiple >
                <i class="pi pi-send text-green-500 cursor-pointer" @click="sendMessage"></i>
            </div>
        </div>
    </div>
</template>
<script>
import {VEmojiPicker} from 'v-emoji-picker'
export default {
    components: { VEmojiPicker },
    data() {
        return {
            showDialog: false,
            message: "",
            messages: [],
        }
    },
    methods: {
        handleInfoBar() {
            this.$store.commit('setIsOpenInfoBar');
        },
        autoResizeTextarea() {
          const textarea = this.$el.querySelector('textarea');
          textarea.style.height = 'auto';
          textarea.style.height = textarea.scrollHeight + 'px';
        },
        toogleDialogEmoji() {
            this.showDialog = !this.showDialog;
        },
        onSelectEmoji(emoji) {
            this.message += emoji.data;
        },
        sendMessage() {
            console.log(this.message);
        }
    }
}
</script>
<style lang="">
    
</style>