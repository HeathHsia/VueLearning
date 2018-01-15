import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import firstcomponent from '@/components/firstcomponent'

Vue.use(Router)

// 路由配置, 不同路径配置不同的页面
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/firstcomponent',
      name: 'firstcomponent',
      component: firstcomponent
    }
  ]
})
