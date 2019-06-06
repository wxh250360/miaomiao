import Vue from 'vue'
import App from './App.vue'
import routers from './routers'
import stores from './stores'

Vue.config.productionTip = false

new Vue({
  router: routers,
  stores,
  render: h => h(App)
}).$mount('#app')
