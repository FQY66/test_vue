import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeMain from "../components/Home.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeMain',
      component: HomeMain
    },
    {
      path: '/a',
      name: 'HomeMain',
      component: HomeMain
    },
    {
      path: '/b',
      name: 'HomeMain',
      component: HomeMain
    },
    {
      path: '/c',
      name: 'HomeMain',
      component: HomeMain
    },
    {
      path: '/d',
      name: 'HomeMain',
      component: HomeMain
    },
    {
      path: '/f',
      name: 'HomeMain',
      component: HomeMain
    },
    {
      path:'/HelloWorld',
      name:'HelloWordld',
      component:HelloWorld
    }
  ]
})
