import Vue from 'vue'
import App from './App.vue'
import routers from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;

Vue.filter('setWH',(url='', arg)=>{
  return url.replace(/w\.h/, arg);
})

// 引用组件为全局组件
import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller);
import Loading from '@/components/Loading'
Vue.component('Loading',Loading);

Vue.config.productionTip = false;

new Vue({
  router: routers,
  store,
  render: h => h(App)
}).$mount('#app')
