
export default function({store, $axios}) {
    $axios.onRequest((config) => {
        // check if the user is authenticated
        if (store.state.accessToken) {
          // set the Authorization header using the access token
          config.headers.Authorization = 'Bearer ' + store.state.accessToken
        }
    
        return config
    })
    // $axios.interceptors.response.use(response => response, async error => {
    //   if(error.response.status === 401) {
    //     const {status, data} = await 
    //   }
    // })
}