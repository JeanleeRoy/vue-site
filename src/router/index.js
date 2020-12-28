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
    props: true
  },
  {
    path: "/article/:articleId",
    name: "article",
    component: Article,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;