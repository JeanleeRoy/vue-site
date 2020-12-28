<template>
  <main class="container">
    <article v-for="article of articles" :key="article.id">
      <img src="#" alt="article-img">
      <section class="text">
        <h3>{{ article.title }}</h3>
        <p>{{ short(article.body, 120) }}</p>
        <router-link :to="{ name: 'article', params: {articleId: article.id} }">
          Ver Articulo
        </router-link>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: 'ArticleList',
  props: ['articles'],

  setup() {
    const short = (text, c) => {
      return text.slice(0, c) + (text.length > c ? "..." : "");
    }

    return {short};
  }
}
</script>

<style scoped>
article {
  display: flex;
  width: 90%;
  margin: 10px auto;
  flex-direction: column;
  background-color: gray;
}
article img {
  width: 100%;
  height: 170px;
  background-color: antiquewhite;
}
article .text {
  width: 100%;
  padding: 10px;
}

@media only screen and (min-width: 768px) {
  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  article {
    flex-direction: row;
  }
  article img {
    width: 350px;
  }
}
</style>