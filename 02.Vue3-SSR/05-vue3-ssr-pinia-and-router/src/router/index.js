import { createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/about",
    component: () => import("../views/about.vue"),
  },
];

export default function (history) {
  return createRouter({
    // 动态创建路由：客户端、服务端路由模式不同
    history,
    routes,
  });
}
