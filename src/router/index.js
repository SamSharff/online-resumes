import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import ShowView from "../views/ShowView.vue";
import TwitterView from "../views/TwitterView.vue";

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
    path: "/twitter",
    name: "twitter",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TwitterView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
