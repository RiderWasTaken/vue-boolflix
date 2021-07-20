import Vue from 'vue'
import App from './App.vue'
import FlagIcon from 'vue-flag-icon'
Vue.use(FlagIcon);
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

