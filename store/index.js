import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            token: null,
        },
        mutations: {
            setToken(state, token) {
                state.token = token;
            },
        },
        actions: {
            authenticatorUser(vuexContext, payload) {
                return new Promise((resolve, reject) => {
                    let authUrlApi = `/v1/auth/login`;
                    
                    if(!payload.isLogin) {
                        authUrlApi = `/v1/auth/register`;
                    }
                    this.$axios
                        .$post('/api' + authUrlApi, {
                            fullname: payload.userName,
                            email: payload.email,
                            password: payload.password,
                            birthday: payload.birthday, 
                            gender: payload.gender,
                        })
                        .then((response) => {
                            console.log(response);
                        })
                        .catch((error) => {console.log(error);})
                })
            }
        }
    })
}

export default createStore;