<template>
    <div class="flex">
        <NavBar  @modal-add-friend="handleModalAddFriend"/>
        <transition name="fade">
            <ChatBox v-if="!modalAddFriend" class="flex-1"/>
            <ModalAddFriends v-else  class="flex-1"/>
        </transition>
        <InfoBar v-if="this.$store.state.isOpenInfoBar"/>
    </div>
</template>
<script>
export default {
    layout: 'chat',
    data() {
        return {
            isLogin: false,
            modalAddFriend: false
        }
    },
    middleware: ['auth','check-auth'],
    methods: {
        handleModalAddFriend() {
            this.modalAddFriend = !this.modalAddFriend
        }
    }
}
</script>
<style>
    .fade-enter-active {
        opacity: 0;
        animation: fade 0.5s linear;
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
</style>