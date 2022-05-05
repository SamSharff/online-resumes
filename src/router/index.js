import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import ShowView from "../views/ShowView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/index",
    name: "index",
    component: IndexView,
  },
  {
    path: "/show/:id",
    name: "show",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ShowView,
  },
  {
    path: "/home",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
