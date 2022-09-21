import Vue from 'vue'
import VueRouter from 'vue-router'

import homeTiktok from '../components/homeTiktok.vue'


Vue.use(VueRouter)

const routes = [
  
 
  {
    path:'/',
    redirect:'/home',
    name:homeTiktok,
    component:{homeTiktok}
  },
  {
    path:'/home',
    name:'ForYouTiktok',
    icon:"mdi-home-outline",
    component:()=>(import('../components/ForYouTiktok.vue'))
    
  },
  {
    path:'/feedback',
    name:'feedback',
    icon:"mdi-video-check-outline",
    component:()=>(import('../components/feedbackTiktok.vue'))
 },
  {
    path:'/following',
    name:'FollowingTiktok',
    icon:"mdi-account-supervisor-outline",
    component:()=>(import('../components/FollowingTiktok.vue'))
  },
  {
    path:'/live',
    name:'LiveTiktok',
    icon:"mdi-video-check-outline",
    component:()=>(import('../components/LiveTiktok.vue'))
  },
  {
    path:'/:userId',
    name:'userTiktok',
    icon:"mdi-video-check-outline", 
    component:()=>(import('../components/userTiktok.vue'))
  },
  

  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component: ()=>(import('../components/NotFound.vue')),
    
 },
 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})

export default router
