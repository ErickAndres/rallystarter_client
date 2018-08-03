import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueAuth from 'vue-auth'
import axios from 'axios'

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = 'http://localhost:3000/';

// Vue.use(require('@websanova/vue-auth'), {
//   auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
//   http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
//   router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
// })
