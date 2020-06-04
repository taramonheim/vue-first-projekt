import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueSocketIO from "vue-socket.io"

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://3.121.41.235:3000',
  options:{} //Optional options
}))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

