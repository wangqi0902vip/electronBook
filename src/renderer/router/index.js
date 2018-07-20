import Vue from 'vue'
import Router from 'vue-router'
const book = require('@/book/docs/index.html')
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
    {
      path:'/',
      name:'book'
    }
  ]
})
