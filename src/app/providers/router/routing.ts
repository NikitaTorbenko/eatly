import { HomePage } from "@/pages/HomePage";

export const routes = [
  { path: "/", component: HomePage, name: "Home" },
  {
    path: "/about",
    component: () => import("@/pages/AboutPage/ui/AboutPage.vue"),
    name: "AboutPage",
  },
  {
    path: "/contact",
    component: () => import("@/pages/ContactPage/ui/ContactPage.vue"),
    name: "ContactPage",
  },
];
