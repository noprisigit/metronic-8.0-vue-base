import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import JwtService from "@/core/services/JwtService";

import { useAuthStore } from "@/store/modules/useAuthStore";
import { useLayoutConfigStore } from "@/store/modules/useConfigStore";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
        meta: {
          title: 'Dashboard'
        }
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/components/page-layouts/Auth.vue"),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () => import("@/views/auth/SignIn.vue"),
      },
    ],
  },
  {
    // the 404 route, when none of the above matches
    path: "/404",
    name: "404",
    component: () => import("@/views/errors/Error404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  const defaultTitle = `${import.meta.env.VITE_NAME} | ${import.meta.env.VITE_AUTHOR}`;
  document.title = `${defaultTitle} - ${to.meta.title}` || defaultTitle;

  const layoutStore = useLayoutConfigStore();
  const authStore = useAuthStore();

  // reset config to initial state
  layoutStore.resetLayoutConfig();

  authStore.verifyAuth({ api_token: JwtService.getToken() });

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
