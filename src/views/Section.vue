<template>
  <section class="hero">
    <img src="@/assets/CoverSection/1.jpg" alt="cover">
    <div class="section">
      <h1>Section name {{sectId}}</h1>
    </div>
  </section>
  <section class="recent">
    <p class="container" >Publicaiones recientes</p>
  </section>
  <br>

  <div v-if="articles.length">
    <article-list :articles="articles" />
  </div>
  <div v-else>
    <main>Cargando..</main>
  </div>
  <br><br>

</template>

<script>
import ArticleList from '../components/ArticleList.vue';
import { getArticles } from '@/services/articleService';
import { watchEffect } from 'vue';

export default {
  name : 'Section',
  components: {ArticleList},
  props: ['sectId'],
  
  setup( props ) {
    const {articles, error, load} = getArticles();

    watchEffect(() => load(props.sectId));

    return {articles, error}
  }
}
</script>

<style scoped>
.hero {
  width: 100%;
  height: calc(100vh - 50px);
  overflow: hidden;
}
.hero img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
}
h1 {
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px 30px;
  margin: 10px;
  color: white;
  border: 4px solid white;
  background-color: rgba(0, 0, 0, .6);
}
.recent {
  padding: 10px 20px;
  font-size: 1.3rem;
  background-color: black;
  color: white;
  text-align: left;
}
.container {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  h1 {
    right: 0;
    margin-right: 150px;
    max-width: 380px;
    text-align: right;
    font-size: 38px;
  }
  .container {
    max-width: 1100px;
    margin: auto;
  }
  .recent {
    padding-left: 70px;
  }
}
</style>
