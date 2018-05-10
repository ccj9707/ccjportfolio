import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import Router from 'vue-router'
import routes from './routes.js'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueScrollTo)
Vue.use(Router)
Vue.use(VueScrollReveal,{
  class: 'v-scroll-reveal',
  duration:1500,
  scale:1,
  distance:'30px',
  mobile:false,
  origin: 'left'
})

const router = new Router({
  mode:'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
