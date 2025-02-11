import { AboutPage } from "@/pages/AboutPage";
import { HomePage } from "@/pages/HomePage";

export const routes = [
  { path: "/", component: HomePage, name: "Home" },
  {
    path: "/about",
    component: AboutPage,
    name: "AboutPage",
  },
];
