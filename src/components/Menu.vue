<template>
  <nav>
    <div class="container">
      <router-link to="/" class="enlace">
        <img src="@/assets/logo_blanco.png">
      </router-link>
      <a class="hamburger" href="#">
        <img @click="toggle" class="hamburger-img" src="@/assets/menu.png" alt="menu">
      </a>
      <ul id="sections" class="sections" :class="{open: mostrar}">
        <img v-if="mostrar" @click="toggle" class="hamburger-img" src="@/assets/close.png" alt="menu">
        <li @click="not_show"><router-link 
          to="/" class="enlace">
          Home
        </router-link></li>
        <li @click="not_show"><router-link
          :to="{ name: 'Seccion', params: {sectId: 1} }"
          class="enlace">
          Section 1
        </router-link></li>
        <li @click="not_show"><router-link
          :to="{ name: 'Seccion', params: {sectId: 2} }"
          class="enlace">
          Section 2
        </router-link></li>
        <li @click="not_show"><router-link
          :to="{ name: 'Seccion', params: {sectId: 3} }"
          class="enlace">
          Section 3
        </router-link></li>
        <li @click="not_show"><router-link
          :to="{ name: 'Seccion', params: {sectId: 4} }"
          class="enlace">
          Section 4
        </router-link></li>
        <li @click="not_show"><router-link
          :to="{ name: 'Seccion', params: {sectId: 5} }"
          class="enlace">
          Section 5
        </router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';
export default {
  name : 'Menu',
  setup() {
    const mostrar = ref(false);

    const toggle = () => { mostrar.value = !(mostrar.value) };
    const not_show = () => { mostrar.value = false };
    window.addEventListener("resize", not_show);

    return {mostrar, toggle, not_show}
  }
}
</script>

<style scoped>
nav {
  width: 100%;
  background-color: #1E1E1E;
}
.container {
  display: flex;
  width: 100%;
  max-width: 1100px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0 10px;
}
nav img {
  height: 45px;
  padding: 8px;
}
ul.sections {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
  transition: .4s transform cubic-bezier(0,.12,.14,1);
}
ul.sections.open {
  transform: none;
}
ul.sections img {
  position: absolute;
  top: 7px;
  right: 14px;
  height: 35px;
  cursor: pointer;
}
ul.sections li {
  display: inline-block;
  width: fit-content;
  text-decoration: none;
  list-style: none;
  margin-bottom: 25px;
}
.hamburger {
  display: flex;
  align-items: center;
}
.hamburger-img {
  height: 43px;
}
.enlace {
  text-decoration: none;
  color: white;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
}
.sections .enlace {
  padding: 7px 15px;
  border-radius: 13px;
}
 .sections .router-link-exact-active {
   background-color: rgba(255, 255, 255, 0.25);
   border-bottom: 1px solid rgba(238, 238, 238, 0.4);
 }

@media only screen and (min-width: 768px) {
  .hamburger {
    display: none;
  }
  nav img {
    height: 50px;
  }
  ul.sections {
    position: inherit;
    transform: none;
    width: auto;
    height: auto;
    flex-direction: row;
  }
  ul.sections li {
    margin-bottom: 0;
  }
  .sections .enlace {
    margin-left: 10px;
    height: 100%;
  }
  .sections .enlace:hover {
    border-bottom: 1px solid rgba(238, 238, 238, 0.4);
  }
}
</style>