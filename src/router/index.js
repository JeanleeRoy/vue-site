import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Seccion from "@/views/Seccion.vue";
import Articulo from "@/views/Articulo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/section/:slug",
    name: "Seccion",
    component: Seccion,
    props: true
  },
  {
    path: "/article/:articleId",
    name: "articulo",
    component: Articulo,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.params.title === null)
    document.title = 'Revista Piso 11';
  next();
})

export default router;