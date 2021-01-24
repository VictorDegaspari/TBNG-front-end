/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import NewMember from "../views/NewMember.vue";
import Vip from "../views/Vip.vue";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "achievements" */ "../views/Home.vue"),
  },
  {
    path: "/Vip",
    name: "Vip",
    component: Vip,
  },
  {
    path: "/achievements",
    name: "Conquistas",
    component: () =>
      import(/* webpackChunkName: "achievements" */ "../views/Conquistas.vue"),
  },
  {
    path: "/join",
    name: "NewMember",
    component: NewMember,
  },
  {
    path: "/members",
    name: "Members",
    component: () =>
      import(/* webpackChunkName: "members" */ "../views/Members.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
