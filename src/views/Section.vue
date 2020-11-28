<template>
  <section class="hero">
    <img src="@/assets/CoverSection/1.jpg" alt="cover">
    <div class="section">
      <h1>Section name {{sectionId}}</h1>
    </div>
  </section>
  <section class="recent">
    <p class="container" >Publicaiones recientes</p>
  </section>
  <br>
  <main v-if="loading">
    Cargando..
  </main>
  <main v-if="!loading && articles" class="container">
    <article v-for="article of articles" :key="article.id">
      <img src="#" alt="article-img">
      <section class="text">
        <h3>{{article.title}}</h3>
      </section>
    </article>
  </main>
  <br><br>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from "vue-router";
import api from '@/service/api'
export default {
  name : 'Section',
  setup() {
    const route = useRoute();
    const sectionId = computed(() => route.params.sectId);
    const loading = ref(true);
    const articles = ref(null);

    async function fetchData() {
      loading.value = true;
      await api().get('/posts')
        .then( (res) => {
          articles.value = res.data.slice(0, sectionId.value);
          loading.value = false;
        });
    }

    watch(() => sectionId.value, fetchData);

    onMounted(() => {
      fetchData();
    })

    return {sectionId, loading, articles}
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
