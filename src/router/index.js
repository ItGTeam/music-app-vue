import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from "@/stores/user";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/manage-music',
    // alias: "/manage",
    name: 'manage',
    beforeEnter: (to, from, next) => {
      next()
    },
    component: () => import('../views/Manage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/manage',
    redirect: { name: 'manage' }
  },
  {
    path: '/song/:id',
   name: 'song' ,
   component: () => import('../views/Song.vue')

  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-300"
})
router.beforeEach((to, from, next) => {

  if (!to.meta.requiresAuth) {
    next();
    return;
  }

  const store = useUserStore();

  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
})

export default router
