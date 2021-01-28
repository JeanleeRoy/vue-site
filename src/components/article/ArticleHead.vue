<template>
  <div class="article-title">
    <h1>{{ titulo }}</h1>
  </div>
  <img 
    :src="imagen"
    class="article-hero-image" :alt="'img__'+ categoria.name"
    @error="err_img"
  >
  <section class="article-info">
    <p><b>Escrito por: </b> {{ autor.name }} </p>
    <span>&nbsp; &middot; &nbsp;</span>
    <p><b> Fecha: </b> {{ fecha }}</p>
    <span>&nbsp; &middot; &nbsp;</span>
    <p><b> Categoría: </b> {{ categoria.name }} </p>
  </section>
</template>

<script>
import { watchEffect } from 'vue';

export default {
  name: "ArticleHead",
  props: ['titulo', 'autor', 'categoria', 'fecha_pb', 'imagen'],
  setup(props) {
    const fecha = new Date(props.fecha_pb).toLocaleDateString();
    const err_img = (e) => e.target.src = 
    "https://raw.githubusercontent.com/JeanleeRoy/images/master/project/piso11/default.jpg";
    watchEffect(() => {
      document.title = 'Piso11 - ' + props.titulo;
    });

    return { fecha, err_img }
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
    max-width: 1000px;
    padding: 0 50px;
    justify-content: right;
  }
}
</style>