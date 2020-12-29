<template>
  <div class="article-title">
    <h1>{{ article.title }}</h1>
  </div>
  <img 
    src="@/assets/articles/temporal.webp"
    class="article-hero-image" :alt="'img_article_'+article.id"
    onerror="this.src='https://raw.githubusercontent.com/JeanleeRoy/images/master/project/piso11/default.jpg';"
  >
  <section class="article-info">
    <p><b>Escrito por: </b> Autor-{{ article.userId }} </p>
    <span>&nbsp; &middot; &nbsp;</span>
    <p><b> Fecha: </b> {{ fecha }}</p>
    <span>&nbsp; &middot; &nbsp;</span>
    <p><b> Categoría: </b> Section #</p>
  </section>
</template>

<script>
import { watchEffect } from 'vue';

export default {
  name: "ArticleHead",
  props: ['article'],
  setup(props) {
    const fecha = new Date(Date.now()).toLocaleDateString();

    watchEffect(() => {
      document.title = 'Piso11 - ' + props.article.title;
    });

    return { fecha }
  }
}
</script>

<style>
.article-title {
  margin: 20px auto;
  font-size: 1.5em;
  font-family: 'Montserrat', sans-serif;
}
.article-title h1 {
  text-align: center;
}
.article-hero-image {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 16 / 9;
  background-color: #eee;
  max-height: 600px;
}
.article-info {
  margin: 10px auto;
  width: 100%;
  padding: 0 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1em;
  color: #858484;
  font-family: 'Montserrat', sans-serif;
}

@media only screen and (min-width: 600px) {
  .article-title h1 {
    margin: auto;
    max-width: 700px;
  }
  .article-info {
    max-width: 1100px;
    justify-content: right;
  }
}
</style>