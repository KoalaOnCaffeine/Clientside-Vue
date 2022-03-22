import Vue from 'vue'
import SignUpPage from './SignUpPage.vue'
import vuetify from '../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(SignUpPage)
}).$mount('#app')
