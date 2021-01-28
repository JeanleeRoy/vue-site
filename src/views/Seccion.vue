<template>
  <section class="hero">
    <img :src="sectionImage" alt="Cargando..."
      @error="err_img"
    >
    <div class="section">
      <h1 v-if="seccion" >{{seccion.name}} </h1>
    </div>
  </section>
  <section class="recent">
    <p class="container" >Publicaiones recientes</p>
  </section>
  <br>
  <div v-if="posts.length">
    <article-list :articles="posts"/>
  </div>
  <div v-else>
    <main><loading/></main>
  </div>
  <br><br>

</template>

<script>
import sectNames from '@/assets/sections.json';
import { getPosts } from '@/services/ghostService';
import Loading from '@/components/Loading.vue'
import { computed, watchEffect } from 'vue';
import ArticleList from '@/components/article/ArticleList.vue';

export default {
  name : 'Seccion',
  components: { ArticleList, Loading },
  props: ['slug'],
  
  setup( props ) {
    const seccion = computed(() => sectNames.sections[sectNames[props.slug]])
    const {posts, error, getData}= getPosts();

    const sectionImage = computed(() => require(`@/assets/coverSection/${props.slug[2].charCodeAt(0)%4+1}.jpg`));
    const err_img = (e) => e.target.src = 
    "https://raw.githubusercontent.com/JeanleeRoy/images/master/project/piso11/default.jpg";

    watchEffect(() => {
      getData(props.slug);
      document.title = `Piso11 - ${seccion.value.name}`;
    });

    return { posts, error, sectionImage, err_img, seccion}
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
