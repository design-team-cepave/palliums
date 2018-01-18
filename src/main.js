import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import VueI18n from 'vue-i18n'
require('flag-icon-css/css/flag-icon.min.css')

import App from './App.vue'
import Components from './components'
import messages from './i18n'

Vue.use(VueScrollTo, {
  duration: 800,
  easing: "ease-in-out",
})

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en',
  messages
})

new Vue({
  el: '#app',
  render: h => h(App),
  i18n
})
