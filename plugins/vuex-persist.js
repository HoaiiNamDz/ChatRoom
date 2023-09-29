import * as Cookies from 'js-cookie'
import cookie from 'cookie'

import VuexPersistence from 'vuex-persist'

export default ({ store, req, isDev }) => {
  new VuexPersistence({
    key:'authentication-cookie',
    reducer: (state) => ({accessToken: state.accessToken}),
    restoreState: (key) =>process.client ? Cookies.getJSON(key) : cookie.parse(req.headers.cookie||'')[key],
    saveState: (key, value) =>
    Cookies.set(key, value, { expires: 365, secure: !isDev }),

  }).plugin(store);
}