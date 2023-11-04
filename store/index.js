import Cookies from 'js-cookie'
import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            id: null,
            data: {},
            accessToken: null,
            refreshToken: null,
            isOpenInfoBar: false
        },
        mutations: {
            setToken(state, {accessToken, refreshToken = null}) {
                state.accessToken = accessToken
                if(refreshToken) state.refreshToken = refreshToken
            },
            setData(state, data) {
                state.data = data
            },
            clearToken(state) {
                state.token = {}
                state.data = {}
            },
            setIsOpenInfoBar(state) {
                state.isOpenInfoBar = !state.isOpenInfoBar
            }
        },
        actions: {
            register(vuexContext, payload) {
                return new Promise((resolve, reject) => {
                    const PATH_API = `/auth/register`;
                    this.$axios
                        .$post(process.env.baseApiUrl + PATH_API, {
                            fullname: payload.fullname,
                            email: payload.email,
                            password: payload.password,
                            birthday: payload.birthday, 
                            gender: payload.gender,
                        })
                        .then((result) => {
                            vuexContext.commit('setData', result.data)
                            console.log(result.data);
                            resolve({succes:true, result})
                        })
                        .catch((error) => reject(error))
                })
            },
            login(vuexContext,payload) {
                return new Promise((resolve, reject) => {
                    const PATH_API = `/auth/login`;
                    this.$axios
                        .$post(process.env.baseApiUrl + PATH_API, {
                            email: payload.email,
                            password: payload.password,
                        })
                        .then((result) => {
                            console.log(result);
                            vuexContext.commit('setToken', result.data.token)
                            Cookies.set('refreshToken', result.data.token.refreshToken)
                            resolve({succes:true, result})
                        })
                        .catch((error) => reject(error))
                        
                    
                })
            },
            verifyRegister(vuexContext,payload) {
                return new Promise((resolve, reject) => {
                    this.$axios
                        .$post(process.env.baseApiUrl + '/auth/verify', {
                            fullname: payload.fullname,
                            email: payload.email,
                            password: payload.password,
                            birthday: payload.birthday, 
                            gender: payload.gender,
                            id: payload.id,
                            otp: payload.otp
                    })
                    .then((result) => {
                        console.log(result);
                        this.state.data = ''
                        resolve({succes:true, result})
                    })
                    .catch((error) => reject(error))
                })
            },
            reSendOTP(vuexContext,payload) {
                this.$axios.$post(process.env.baseApiUrl + '/auth/send-otp', {
                    id: localStorage.getItem('id'),
                    email: payload.email
                })
                .then((result) => {
                    console.log(result);
                    
                });
            },
            initAuth(vuexContext, axios){
                let accessToken,refreshToken
                if(axios) {
                    // if(!$axios.headers.cookie) return false
                    console.log(axios);
                }
                 else {
                    refreshToken = Cookies.get('refreshToken');
                    accessToken = axios.req.headers.Authorization.split('Bearer')
                    if(!refreshToken || !accessToken) vuexContext.dispatch('logout')
                }
            },
            logout(vuexContext) {
                vuexContext.commit('clearToken');
                Cookies.remove('refreshToken')
                Cookies.remove('authentication-cookie')
            }
        },
        getters: {
            getData(state) { 
                return state.data
            },
            isAuthenticated(state) {
                return state.accessToken != null
            }
        }
    })
}

export default createStore;