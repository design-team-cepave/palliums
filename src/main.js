import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

import App from './App.vue'
import Components from './components'

Vue.use(VueScrollTo, {
  duration: 800,
  easing: "ease-in-out",
})

new Vue({
  el: '#app',
  render: h => h(App)
})
