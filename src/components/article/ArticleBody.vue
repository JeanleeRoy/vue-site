<template>
  <main class="article-container">
    <article class="article-body">
      <div class="description">
        {{article.body}} {{article.body}}
      </div>
      <p> {{article.body}} <a href="#">link to anywhere</a> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, error.</p>
      <h1>Titulo 1</h1>
      <p> {{article.body}} {{article.body}} {{article.body}} </p>
      <blockquote>
        <cite> {{ article.body }} </cite>
        <span><b>- Nombre Here</b></span>
      </blockquote>
      <p><b>Ipsum dolor sit amet consectetur adipisicing elit. Autem libero magnam fuga deserunt.</b> {{article.body}}</p>
      <h2>Titulo 2</h2>
      <p> {{article.body}} Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magni ullam commodi dolor modi quidem fugit praesentium, illum atque libero. {{article.body}} </p>
      <h3>Titulo 3</h3>
      <div class="imagen">
        <div>
          <img src="https://raw.githubusercontent.com/JeanleeRoy/images/master/project/piso11/default.jpg">
        <div class="text">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
      <p> {{ article.body }} </p>
      <h4>Titulo 4</h4>
      <p>Impedit voluptates veritatis corrupti ullam fugit doloribus quos esse?</p>
      <ul>
        <li>Lorem ipsum dolor sit amet </li>
        <li>Consectetur adipisicing elit</li>
        <li>Nam ratione voluptates ipsa modi</li>
        <li>Amet adipisicing elit suscipit ad.</li>
      </ul>
      <p>Impedit voluptates veritatis corrupti ullam fugit doloribus quos esse?</p>
      <ol>
        <li>Lorem ipsum dolor sit amet </li>
        <li>Consectetur adipisicing elit</li>
        <li>Nam ratione voluptates ipsa modi</li>
        <li>Amet adipisicing elit suscipit ad.</li>
      </ol>
    </article>
  </main>
</template>

<script>
export default {
  name: 'ArticleBody',
  props: ['article'],
  setup() {

  }
}
</script>

<style>
.article-container {
  width: 100%;
  padding: 1em;
  font-family: 'Poppins', sans-serif;
}
.article-body {
  font-size: 17px;
  padding: 5px;
  margin-bottom: 2rem;
  text-align: left;
}
.article-body a {
  color: #464646;
  transition: all ease .3s;
}
.article-body a:hover {
  color: #000;
}
.article-body > p, .article-body .imagen {
  margin-bottom: 0.8em;
}
.description {
  font-size: 1.2em;
  margin-bottom: 1em;
}
.article-body blockquote {
  position: relative;
  padding-left: 2ch;
  padding-bottom: 1.5ch;
  margin-bottom: 1em;
  font-size: .95em;
  color: #000000;
  border-left: 3px solid #838383;
  font-family: 'Montserrat', sans-serif;
}
.article-body blockquote::before {
  position: absolute;
  z-index: -1;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);
  content: "\201c";
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: normal;
  font-size: 150px;
  line-height: .41;
  color: #eaeeff;
}
.article-body blockquote span {
  position: absolute;
  right: 1ch;
  bottom: -0.5ch;
  color: #5f5f5f;
}
.article-body h1,
.article-body h2,
.article-body h3,
.article-body h4 {
  margin: 1rem 0px .5rem;
  color: #2b2b2b;
}
.article-body h1 {
  font-size: 1.6em;
}
.article-body h2 {
  font-size: 1.4em;
}
.article-body h3 {
  font-size: 1.2em;
}
.article-body h4 {
  font-size: 1em;
}
.article-body .imagen {
  width: 100%;
  display: flex;
  justify-content: center;
}
.article-body img {
  margin: auto;
  min-width: 60%;
  max-width: 100%;
}
.article-body .text {
  display: block;
  width: 100%;
  font-size: .9em;
  text-align: center;
}
.article-body ul,
.article-body ol {
  list-style-position: inside;
}
.article-body ul li,
.article-body ol li {
  margin-bottom: 0.6em;
}

@media only screen and (min-width: 600px) {
  .article-container {
    max-width: 850px;
    margin: auto;
    color: #464646;
    line-height: 1.5em;
  }
  .article-body > p, 
  .article-body blockquote,
  .description {
    margin-bottom: 1.2em;
    line-height: 1.35em;
  }
  .article-body ul,
  .article-body ol {
    padding-left: 1em;
    margin-bottom: 1.25em;
  }
}
</style>