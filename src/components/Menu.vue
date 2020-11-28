<template>
  <nav>
    <div class="container">
      <router-link to="/" class="enlace">
        <img src="@/assets/logo150x50.png">
      </router-link>
      <a class="hamburger" href="#">
        <img class="hamburger-img" src="@/assets/menu.png" alt="menu">
      </a>
      <ul class="sections">
        <li><router-link to="/" class="enlace">Home</router-link></li>
        <li><router-link to="/section/1" class="enlace">Section 1</router-link></li>
        <li><router-link to="/section/2" class="enlace">Section 2</router-link></li>
        <li><router-link to="/section/3" class="enlace">Section 3</router-link></li>
        <li><router-link to="/section/4" class="enlace">Section 4</router-link></li>
        <li><router-link to="/section/5" class="enlace">Section 5</router-link></li>
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
ul.sections {
  display: none;
}
.hamburger {
  display: flex;
  align-items: center;
}
.hamburger-img {
  height: 32px;
}
.enlace {
  text-decoration: none;
  color: white;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
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
    padding: 10px;
    text-decoration: none;
  }
}
</style>