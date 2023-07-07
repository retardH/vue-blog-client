import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView/index.vue";
import BlogView from "@/views/BlogView/index.vue";
import CategoryView from "@/views/CategoryView/index.vue";
import ContactView from "@/views/ContactView/index.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogView,
  },
  {
    path: "/category",
    name: "Category",
    component: CategoryView,
  },
  {
    path: "/contact",
    name: "Contact Us",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
