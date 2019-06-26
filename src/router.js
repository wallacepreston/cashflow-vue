import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './views/HelloWorld.vue'
import Calculate from './views/Calculate.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello-world',
      component: HelloWorld
    },
    {
      path: '/calculate',
      name: 'calculate',
      component: Calculate
    },

  ]
})