import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/my-adoptions",
      name: "MyAdoption",
      component: () => import("../components/MyAdoption.vue"),
    },
    {
      path: "/my-lost-pets",
      name: "MyLostPets",
      component: () => import("../components/MyLostPets.vue"),
    },
    {
      path: "/my-address",
      name: "MyAddress",
      component: () => import("../components/MyAddress.vue"),
    },
    {
      path: "/my-profile",
      name: "MyProfile",
      component: () => import("../components/MyProfile.vue"),
    },
    {
      path: "/adoption",
      name: "AdoptionPage",
      component: () => import("../components/AdoptionPage.vue"),
    },
    {
      path: "/lost-found",
      name: "LostAndFoundPage",
      component: () => import("../components/LostAndFoundPage.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "Error404",
      component: () => import("../views/Error404.vue"),
    },
  ],
});

export default router;
