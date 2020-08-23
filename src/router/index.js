import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
// import Home from '@/test/confirm.vue';
import HighLight from '@/views/highLight.vue';
import Pure from '@/test/pure.vue';
import PureModel from '@/test/pure-model.vue';
import JsTest from '@/views/jsTest.vue';
import CountDown from '@/views/countDown.vue';
import Copy from '@/views/copy.vue';
import ChangeDatas from '@/views/changeDatas.vue';
import CssTest from '@/views/cssTest.vue';
import WholeLife from '@/views/wholeLife.vue';
import Extend from '@/views/extend.vue';
import ExpendCard from '@/views/expendCard.vue';
import VueQuillEditor from '@/views/vueQuillEditor.vue';
import Wechat from '@/views/wechat.vue';
import CssTestPhone from '@/views/cssTestPhone.vue';
import Tree from '@/views/tree.vue';
import Currying from '@/views/currying.vue';
import Proxy from '@/views/proxy.vue';

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
        path: '/pureModel.html',
        name: 'PureModel',
        component: PureModel
    },
    {
        path: '/jsTest.html',
        name: 'JsTest',
        component: JsTest
    },
    {
        path: '/countDown.html',
        name: 'CountDown',
        component: CountDown        
    },
    {
        path: '/copy.html',
        name: 'Copy',
        component: Copy,
        showInfo: 'Copy & Paste'        
    },
    {
        path: '/changeDatas.html',
        name: 'ChangeDatas',
        component: ChangeDatas
    },
    {
        path: '/cssTest.html',
        name: 'CssTest',
        component: CssTest
    },
    {
        path: '/cssTestPhone.html',
        name: 'CssTestPhone',
        component: CssTestPhone
    },
    {
        path: '/wholeLife.html',
        name: 'WholeLife',
        component: WholeLife
    },
    {
        path: '/extend.html',
        name: 'Extend',
        component: Extend
    },
    {
        path: '/expendCard.html',
        name: 'ExpendCard',
        component: ExpendCard
    },
    {
        path: '/quillEditor.html',
        name: 'VueQuillEditor',
        component: VueQuillEditor
    },
    {
        path: '/wechat.html',
        name: 'Wechat',
        component: Wechat,
        showInfo: 'WechatQrCode'
    },
    {
        path: '/tree.html',
        name: 'Tree',
        component: Tree,
        showInfo: '用 iView 实现 Tree'
    }, 
    {
        path: '/currying.html',
        name: 'Currying',
        component: Currying,
        showInfo: '手动实现 bind/call/apply/Currying'
    }, 
    {
        path: '/proxy.html',
        name: 'Proxy',
        component: Proxy,
        showInfo: 'Proxy 的使用'
    }
  ]
})
