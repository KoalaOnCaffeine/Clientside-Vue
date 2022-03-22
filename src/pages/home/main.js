import Vue from 'vue'
import IndexPage from './IndexPage.vue'
import vuetify from '../../plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(IndexPage)
}).$mount('#app')
