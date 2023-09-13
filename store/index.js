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
                    let PATH_API = `/api/v1/auth/login`;
                    
                    if(!payload.isLogin) {
                        PATH_API = `/api/v1/auth/register`;
                    }
                    this.$axios
                        .$post(process.env.baseApiUrl + PATH_API, {
                            fullname: payload.userName,
                            email: payload.email,
                            password: payload.password,
                            birthday: payload.birthday, 
                            gender: payload.gender,
                        }, {timeout: 20000})
                        .then((result) => {
                            console.log(result);
                        })
                        .catch((error) => {console.log(error);})
                })
            }
        }
    })
}

export default createStore;