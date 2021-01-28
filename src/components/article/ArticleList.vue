<template>
  <main class="container">
    <article v-for="article of articles" :key="article.id">
      <section class="image">
        <div><img :src="article.feature_image" alt="article-img"
          @error="err_img"></div>
      </section>
      <section class="text">
        <div>
          <h3>{{ article.title }}</h3>
        <p v-if="article.custom_excerpt">{{ short(article.custom_excerpt) }}</p>
        </div>
        <div class="article-link">
          <router-link :to="{ name: 'articulo', params: {slug: article.slug} }">
            Ver Articulo
          </router-link>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: 'ArticleList',
  props: ['articles'],

  setup() {
    const txSize = 180;
    const short = (text) => {
      return text.slice(0, txSize) + (text.length > txSize ? "..." : "");
    }
    const image = () => require(`@/assets/img_bg.jpg`);
    const err_img = (e) => e.target.src = 
    "https://raw.githubusercontent.com/JeanleeRoy/images/master/project/piso11/default.jpg";

    return { short, image, err_img };
  }
}
</script>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
article {
  display: flex;
  width: 90%;
  margin: 20px 0px;
  flex-direction: column;
  box-shadow: 0 10px 40px 0 rgba(66, 80, 148, 0.12);
  border-radius: 10px;
}
article .image {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
}
article .image > div{
  position:  absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
article .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
}
article .text {
  width: 100%;
  height: 100%;
  padding: 15px;
  text-align: left;
}
article .text h3 {
  font-size: 18px;
  margin-bottom: 10px;
}
.article-link {
  display: flex;
  justify-content: right;
}
.article-link a {
  display: inline-block;
  margin: 15px 20px 5px;
  padding: 10px 15px;
  border-radius: 10px;
  text-decoration: none;
  background-color: rgb(92, 92, 92);
  box-shadow: 0 5px 10px 0 rgba(66, 80, 148, 0.12);
  color: #fff;
  font-weight: 600;
  transition: all ease .5s;
}
.article-link a:hover {
  color: #4B5A6A;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 5px 10px 0 rgba(31, 37, 66, 0.2);
}

@media only screen and (min-width: 768px) {
  article {
    width: 30%;
    margin: 20px;
    min-width: 450px;
  }
  article .text {
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
  }
}
</style>