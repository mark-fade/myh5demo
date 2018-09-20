import Vue from 'vue'
import Router from 'vue-router'
import vueJsStudy from '@/views/vueJsStudy.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/vueJsStudy',
      name:'vueJsStudy',
      component:vueJsStudy
    }
  ]
})
