<template>
  <main v-if="loading">
    Cargando...
  </main>
  <main v-if="!loading && articles" class="container">
    <article v-for="article of articles" :key="article.id">
      <img src="#" alt="article-img">
      <section class="text">
        <h3>{{article.title}}</h3>
        <p>{{article.body}}</p>
      </section>
    </article>
  </main>
</template>

<script>
import { onMounted, ref } from 'vue'
import api from '@/service/api'
export default {
  name: 'ArticleList',
  props: {sectId: String},
  setup(props) {
    const loading = ref(true);
    const articles = ref(null);
    async function fetchData() {
      loading.value = true;
      await api().get('/posts')
        .then( (res) => {
          articles.value = res.data;
          loading.value = false;
        });
    }
    onMounted(() => {
      fetchData();
    })
    return {loading, articles}
  }
}
</script>

<style>
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
  .container {
    max-width: 1100px;
    margin: auto;
  }
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