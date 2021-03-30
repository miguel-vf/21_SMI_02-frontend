import Vue from 'vue'
import VueRouter from 'vue-router'
import Videos from '../views/Videos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/upload',
    name: 'Upload',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Upload.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('../views/Me.vue')
  },
  {
    path: '/login',
    name: 'Login',    
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',    
    component: () => import('../views/Register.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

  
export default router