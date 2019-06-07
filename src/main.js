import Vue from 'vue'
import App from './App.vue'
import routers from './routers'
import stores from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;

Vue.filter('setWH',(url, arg)=>{
  return url.replace(/w\.h/, arg);
})

Vue.config.productionTip = false

new Vue({
  router: routers,
  stores,
  render: h => h(App)
}).$mount('#app')
