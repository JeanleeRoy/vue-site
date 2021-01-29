<template>
  <section v-if="error" class="article-error">
    <h2>- 404 -</h2>Oops! Artículo no encontrado
  </section>
  <section v-if="post">
    <article-head :imagen="post.feature_image" :autor="post.primary_author" 
      :categoria="post.primary_tag" :fecha_pb="post.published_at" :titulo="post.title"
    />
    <article-body :contenido="post.html" :extracto="post.custom_excerpt" />
  </section>
  <section v-else-if="!error">
    <br>
    <loading/>
  </section>
  <Footer v-if="post"/>
</template>

<script>
import Footer from '@/components/Footer.vue'
import { getPost } from '@/services/ghostService';
import { watchEffect } from 'vue';
import ArticleHead from '../components/article/ArticleHead.vue';
import ArticleBody from '../components/article/ArticleBody.vue';
import Loading from '../components/Loading.vue';

export default {
  components: { Loading, ArticleBody, ArticleHead, Footer },
  name : 'Articulo',
  props: ['slug'],

  setup(props) {
    const {post, error, getData} = getPost();
    
    watchEffect(() => {
      getData(props.slug);
    });

    return {error, post}
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,600;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,300&display=swap');

.article-error {
  width: 100%;
  margin: 30px auto;
  color: #8f979e;
  font-size: 20px;
  font-weight: bold;
  padding: 30px;
  box-shadow: 0 10px 40px 0 rgba(66, 80, 148, 0.12);
  border-radius: 10px;
}

@media only screen and (min-width: 600px) {
  .article-error {
    max-width: 300px;
  }
}
</style>