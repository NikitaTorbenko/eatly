import { Home } from "@/pages/Home";
import { Auth } from "@/pages/Auth";
import { Login } from "@/pages/Login";

export const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/auth", component: Auth, name: "Auth" },
  { path: "/login", component: Login, name: "Login" },
  {
    path: "/blogs",
    component: () => import("@/pages/Blogs/ui/Blogs.vue"),
    name: "Blogs",
  },
  {
    path: "/contact",
    component: () => import("@/pages/Contact/ui/Contact.vue"),
    name: "ContactPage",
  },
];
