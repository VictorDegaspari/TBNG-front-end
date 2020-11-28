/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import Conquistas from "../views/Conquistas.vue";
import Home from "../views/Home.vue";
import Members from "../views/Members.vue";
import NewMember from "../views/NewMember.vue";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // children: [        sub rotas
    //     { path: ":name", name: "content", component: NamesContent }
    //     { path: ":name", name: "content", component: NamesContent }
    //     { path: ":name", name: "content", component: NamesContent }
    //   ],
  },
  {
    path: "/achievements",
    name: "Conquistas",
    component: Conquistas,
    // children: [        sub rotas
    //     { path: ":name", name: "content", component: NamesContent }
    //     { path: ":name", name: "content", component: NamesContent }
    //     { path: ":name", name: "content", component: NamesContent }
    //   ],
  },
  {
    path: "/join",
    name: "NewMember",
    component: NewMember,
    // children: [        sub rotas
    //     { path: ":name", name: "content", component: NamesContent }
    //     { path: ":name", name: "content", component: NamesContent }
    //     { path: ":name", name: "content", component: NamesContent }
    //   ],
  },
  {
    path: "/members",
    name: "Members",
    component: Members,
    // children: [        sub rotas
    //     { path: ":name", name: "content", component: NamesContent }
    //     { path: ":name", name: "content", component: NamesContent }
    //     { path: ":name", name: "content", component: NamesContent }
    //   ],
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
