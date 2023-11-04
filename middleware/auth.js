export default function(context) {
    console.log(context.store.getters.isAuthenticated);
    if(context.store.getters.isAuthenticated) {
        return false
    } else {context.redirect('/chat');}
}