<template>
  <section v-if="error" class="article-error">
    {{ error }}
  </section>
  <article v-if="article">
    <div class="article-title">
      <h1>{{ article.title }}</h1>
    </div>
    <img 
      src="@/assets/articles/temporal.webp"
      class="article-hero-image" :alt="'img_article_'+articleId"
      onerror="this.src='https://raw.githubusercontent.com/JeanleeRoy/images/master/project/piso11/default.jpg';"
    >
    <section class="container">
      <section class="article-info">
        <p><b>Por: </b> Autor-{{article.userId}}</p>
        <p><b>Fecha: </b> {{fecha}}</p>
      </section>
      <section class="article-body">
        <p > {{article.body}} {{article.body}}  </p>
        <p > {{article.body}} </p>
        <p > {{article.body}} {{article.body}} {{article.body}}</p>
      </section>
    </section>
  </article>
  <article v-else-if="!error">
    <loading/>
  </article>
</template>

<script>
import { getArticle } from '@/services/articleService';
import { watchEffect } from 'vue';
import Loading from '../components/Loading.vue';

export default {
  components: { Loading },
  name : 'Article',
  props: ['articleId'],

  setup(props) {
    const {article, error, load} = getArticle();
    const fecha = new Date(Date.now()).toLocaleDateString();
    console.log(fecha)

    watchEffect(() => load(props.articleId));

    return {article, error, fecha}
  }
}
</script>

<style>
.container {
  width: 100%;
  padding: 1rem auto;
}
.article-title {
  margin: 20px auto;
  font-size: 30px;
}
.article-title h1 {
  text-align: center;
}
.article-hero-image {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 16 / 9;
  background-color: #eee;
  max-height: 500px;
}
.article-body {
  font-size: 17px;
  padding: 5px;
  margin-bottom: 2rem;
}
.article-info {
  margin: 10px auto;
  width: 100%;
  padding: 0 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 17px;
}
.article-error {
  width: 100%;
  margin: 30px auto;
  padding: 30px;
  background-color: #62ffff;
  border: 1px solid #c0c0c0;
  border-radius: 10px;
}

@media only screen and (min-width: 600px) {
  .article-title h1 {
    margin: auto;
    max-width: 600px;
  }
  .container {
    max-width: 1100px;
    margin: auto;
  }
  .article-info {
    width: 90%;
  }
  .article-error {
    max-width: 300px;
  }
}
</style>