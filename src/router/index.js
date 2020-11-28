import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Section from "@/views/Section.vue";
import Article from "@/views/Article.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/section/:sectId",
    name: "Section",
    component: Section,
  },
  {
    path: "/article/:id",
    name: "article",
    component: Article,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;