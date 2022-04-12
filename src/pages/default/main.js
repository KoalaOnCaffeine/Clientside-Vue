import Vue from 'vue'
import DefaultPage from './DefaultPage.vue'
import vuetify from '../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(DefaultPage)
}).$mount('#app')
