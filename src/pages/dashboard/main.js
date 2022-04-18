import Vue from 'vue'
import vuetify from '../../plugins/vuetify'
import DashboardPage from "./DashboardPage";

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(DashboardPage)
}).$mount('#app')
