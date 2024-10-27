import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MyComponent from '@/components/MyComponent.vue'
import ProductView from '@/views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'my',
      component: MyComponent,
      // name: 'home',
      // component: HomeView,
    },
    {
      path: `/product`,
      name: 'product',
      // component: () => import('../components/Product.vue'),
      component: ProductView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    // {
    //   path: '/*',
    //   name: 'err',
    //   component: () => <div>error</div>,
    // },
  ],
})

export default router
