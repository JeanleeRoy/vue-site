<template>
  <nav>
    <div class="container">
      <router-link to="/" class="enlace">
        <img src="@/assets/logo_blanco.png">
      </router-link>
      <a class="hamburger" href="#">
        <img class="hamburger-img" src="@/assets/menu.png" alt="menu">
      </a>
      <ul class="sections">
        <li><router-link to="/" class="enlace">Home</router-link></li>
        <li><router-link
          :to="{ name: 'Seccion', params: {sectId: 1} }"
          class="enlace">
          Section 1
        </router-link></li>
        <li><router-link
          :to="{ name: 'Seccion', params: {sectId: 2} }"
          class="enlace">
          Section 2
        </router-link></li>
        <li><router-link
          :to="{ name: 'Seccion', params: {sectId: 3} }"
          class="enlace">
          Section 3
        </router-link></li>
        <li><router-link
          :to="{ name: 'Seccion', params: {sectId: 4} }"
          class="enlace">
          Section 4
        </router-link></li>
        <li><router-link
          :to="{ name: 'Seccion', params: {sectId: 5} }"
          class="enlace">
          Section 5
        </router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name : 'Menu',
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
  height: 50px;
  padding: 8px;
}
ul.sections {
  display: none;
}
.hamburger {
  display: flex;
  align-items: center;
}
.hamburger-img {
  height: 40px;
}
.enlace {
  text-decoration: none;
  color: white;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
}

 .sections .router-link-exact-active {
   background-color: rgba(255, 255, 255, .3);
 }

@media only screen and (min-width: 768px) {
  .hamburger {
    display: none;
  }
  ul.sections {
    display: flex;
    align-items: center;
  }
  li {
    display: inline-block;
    height: 100%;
    text-decoration: none;
  }
  .sections .enlace {
    padding: 10px;
    margin-left: 10px;
    height: 100%;
  }
}
</style>