import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HighLight from '@/views/highLight.vue';
import Pure from '@/test/pure.vue';
import pureModel from '@/test/pure-model.vue';
import jsTest from '@/views/jsTest.vue';
import countDown from '@/views/countDown.vue';
import copy from '@/views/copy.vue';
import changeDatas from '@/views/changeDatas.vue';
import cssTest from '@/views/cssTest.vue';
import wholeLife from '@/views/wholeLife.vue';

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
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
    },
    {
        path: '/js-test.html',
        name: 'jsTest',
        component: jsTest
    },
    {
        path: '/count-down.html',
        name: 'countDown',
        component: countDown        
    },
    {
        path: '/copy.html',
        name: 'copy',
        component: copy        
    },
    {
        path: '/changeDatas.html',
        name: 'changeDatas',
        component: changeDatas
    },
    {
        path: '/cssTest.html',
        name: 'cssTest',
        component: cssTest
    },
    {
        path: '/wholeLife.html',
        name: 'wholeLife',
        component: wholeLife
    }        
  ]
})
