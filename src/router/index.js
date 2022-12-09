import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import UserManagement from "../views/UserManagement.vue";
import ProjectManagement from "../views/ProjectManagement.vue";
import ChartView from "../views/ChartView.vue";
import ImageView from "../views/ImageView.vue";
import MapView from "../views/MapView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      component: HomeView,
      meta: { requireAuth: true },
    },
    {
      path: "/users",
      name: "用户管理",
      component: UserManagement,
      meta: { requireAuth: true },
    },
    {
      path: "/projects",
      name: "项目管理",
      component: ProjectManagement,
      meta: { requireAuth: true },
    },
    {
      path: "/chart",
      name: "图表统计",
      component: ChartView,
      meta: { requireAuth: true },
    },
    {
      path: "/image",
      name: "图片查看",
      component: ImageView,
      meta: { requireAuth: false },
    },
    {
      path: "/map",
      name: "地图查看",
      component: MapView,
      meta: { requireAuth: false },
    },
    {
      path: "/login",
      name: "登录",
      component: LoginView,
      meta: { notShowMenu: true, requireAuth: false },
      /*
        登陆后不应该通过/login显示访问login界面
        如果有登录信息，则禁止访问登录界面
        如果没有存储登录信息，则跳转到登录界面
      */
      beforeEnter: (to, from, next) => {
        let token = localStorage.getItem("user");
        if (token) {
          next({
            path: from.fullPath,
          });
        } else {
          next();
        }
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  /*
   未登录则跳转到登录页
   未登录跳转到登录页,也可以通过axios的响应拦截器去实现,但是会先在当前页面渲染一下,再跳转到登录页,会有个闪动的现象
   这里通过路由守卫的方式,不会在当前页闪现一下,但是需要在每个路由组件添加一个是否需要登录的标识位,如本项目中的requireAuth字段
  */
  if (to.matched.some((record) => record.meta.requireAuth)) {
    let token = localStorage.getItem("user");
    if (token) {
      next();
    } else {
      localStorage.setItem("preRoute", to.fullPath);
      next({
        path: "/login",
      });
    }
  } else {
    next();
  }
});

export default router;
