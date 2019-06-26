import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Calculate from './views/Calculate.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/calculate',
      name: 'calculate',
      component: Calculate
    },

  ]
})