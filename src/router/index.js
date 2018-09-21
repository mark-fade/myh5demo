import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vueJsStudy from '@/views/vueJsStudy.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // 访问路径不带井号
  routes: [
    {
      path: '/HelloWorld', 
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/vueJsStudy', //就是我们访问这个页面的路径。
      name:'vueJsStudy', //给这个页面路径定义一个名字，当在页面进行跳转的时候也可以使用名字跳转。唯一性
      //component:vueJsStudy //组件，就是使用import 引入的组件
      component:resolve=>require(['@/views/vueJsStudy.vue'],resolve) //使用懒加载
    }
  ]
})
