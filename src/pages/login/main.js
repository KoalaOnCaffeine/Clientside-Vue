import Vue from 'vue'
import LogInPage from './LogInPage.vue'
import vuetify from '../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(LogInPage)
}).$mount('#app')
