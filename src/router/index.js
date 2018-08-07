import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Caculate from '@/components/Caculate'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/he',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/caculate',
      name:'Caculate',
      component:Caculate
    }
  ]
})
