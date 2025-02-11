import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routing";

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
