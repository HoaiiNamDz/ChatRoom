<template lang="">
    <div>
        <h1>hello</h1>
        <h1 @click="onLogout">Logout</h1>
    </div>
</template>
<script>
export default {
    layout: 'chat',
    data() {
        return {
            isLogin: false
        }
    },
    middleware: ['auth','check-auth'],
    methods: {
        onLogout() {
            this.$store.dispatch('logout');
            this.$router.push('/')
            this.isLogin = true
        }
    }
}
</script>
<style lang="">
    
</style>