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
                    let PATH_API = `/auth/login`;
                    
                    if(!payload.isLogin) {
                        PATH_API = `/auth/register`;
                    }
                    this.$axios
                        .$post(process.env.baseApiUrl + PATH_API, {
                            fullname: payload.userName,
                            email: payload.email,
                            password: payload.password,
                            birthday: payload.birthday, 
                            gender: payload.gender,
                        })
                        .then((result) => {
                            localStorage.setItem('token', result.data.id);
                            console.log(result);
                            resolve({succes:true, result})
                        })
                        .catch((error) => reject(error))
                })
            },
            verifyRegister(vuexContext,payload) {
                return new Promise((resolve, reject) => {
                    this.$axios
                        .$post(process.env.baseApiUrl + '/auth/verify', {
                            fullname: payload.userName,
                            email: payload.email,
                            password: payload.password,
                            birthday: payload.birthday, 
                            gender: payload.gender,
                            id: localStorage.getItem('token'),
                            otp: payload.otp
                    })
                    .then((result) => {
                        console.log(result);
                    })
                    .catch((error) => reject(error))
                })
            }
        }
    })
}

export default createStore;