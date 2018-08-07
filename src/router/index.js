import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home.vue'
import HighLight from '@/views/highLight.vue'
import Pure from '@/test/pure.vue'
import pureModel from '@/test/pure-model.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{
      path: '/home.html',
      name: 'Home',
      component: Home
    },
    {
      path: '/highLight.html',
      name: 'HighLight',
      component: HighLight
    },    
    {
        path: '/pure.html',
        name: 'Pure',
        component: Pure
    },
    {
        path: '/pure-model.html',
        name: 'pureModel',
        component: pureModel
    }        
  ]
})
