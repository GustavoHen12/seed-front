import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'
import vuetify from './plugins/vuetify';

import headerWithoutLogin from '@/components/partial_view/header.vue'
import footerCustom from '@/components/partial_view/footer.vue'
import cntContainer from '@/components/layout/cnt-container.vue'
import cntDiv from '@/components/layout/cnt-div.vue'
import gRow from '@/components/layout/general-row.vue'
import gCol from '@/components/layout/general-column.vue'
import gCnt from '@/components/layout/general-container.vue'
import gBtn from '@/components/buttons/btn-general.vue'

Vue.component('GHeader', headerWithoutLogin)
Vue.component('GFooter', footerCustom)
Vue.component('GBtn', gBtn)
Vue.component('GRow', gRow)
Vue.component('GCol', gCol)
Vue.component('GCnt', gCnt)

Vue.component('CntContainer', cntContainer)
Vue.component('CntDiv', cntDiv)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
