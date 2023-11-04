<template>
    <div class="bg-gray-200">
        <div class="cursor-pointer relative">
            <div class="flex bg-white h-14 overflow-hidden items-center pl-2">
                <label for="" class="">Đến: </label>
                <input   
                        v-model="valueSearch"
                        class="flex-1 p-1 outline-none resize-none overflow-hidden my-2" 
                />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            valueSearch: ""
        }
    }
}
</script>
<style>
    
</style>