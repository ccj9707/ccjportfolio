import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import Router from 'vue-router'
import routes from './routes.js'

Vue.use(VueScrollTo)
Vue.use(Router)

const router = new Router({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
