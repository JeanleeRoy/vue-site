<template>
  <main class="article-container">
    <div v-if="extracto" class="description">
        {{ extracto }}
      </div>
    <article class="article-body" v-html="contenido">
    </article>
  </main>
</template>

<script>
export default {
  name: 'ArticleBody',
  props: ['article', 'contenido', 'extracto'],
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
.description {
  font-size: 1.5em;
  margin-bottom: 1em;
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
.article-body pre {
	/* overflow-x: auto; */
  white-space: pre-wrap;
  margin: 1.5em 0 2em;
  padding: 25px;
  max-width: 100%;
  border: 1px solid #000;
  color: white;
  line-height: 1.5em;
  background: #0e1012;
  border-radius: 5px;
  font-size: 15px;
}

.article-body h1,
.article-body h2,
.article-body h3,
.article-body h4 {
  margin: 2rem 0px .5rem;
  color: #2b2b2b;
}
.article-body h1 {
  font-size: 1.8em;
  margin-bottom: 1.2rem;
}
.article-body h2 {
  font-size: 1.6em;
  margin-bottom: 1.1rem;
}
.article-body h3 {
  font-size: 1.4em;
}
.article-body h4 {
  font-size: 1.2em;
}
.article-body .imagen,
.article-body figure {
  width: 100%;
  display: flex;
  justify-content: center;
}
.article-body img {
  margin: auto;
  min-width: 60%;
  max-width: 100%;
  height: auto;
}
.article-body .text {
  display: block;
  width: 100%;
  font-size: .9em;
  text-align: center;
}
.article-body ul,
.article-body ol {
  list-style-position: outside;
  padding-left: 1.2em;
}
.article-body ul li,
.article-body ol li {
  margin-bottom: 0.6em;
}
.kg-gallery-container {
    display: flex;
    flex-direction: column;
    max-width: 1040px;
    width: 100vw;
}
.kg-gallery-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.kg-bookmark-container {
  width: 100%;
  display: flex;
  padding: 15px;
  flex-direction: column-reverse;
  text-decoration: none;
  font-size: .8em;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.kg-bookmark-container > * {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.kg-bookmark-content {
  padding-top: 10px;
  min-width: 140px;
}
.kg-bookmark-thumbnail img{
  max-width: 340px;
  width: 100%;
}
.kg-bookmark-container .kg-bookmark-icon {
  min-width: 22px;
  height: 22px;
  transform: translateY(0.4em);
  margin-right: 5px;
}

@media only screen and (min-width: 600px) {
  .article-container {
    max-width: 850px;
    margin: auto;
    color: #464646;
    line-height: 1.5em;
  }
  .article-body > p, 
  .article-body blockquote {
    margin-bottom: 1.2em;
    line-height: 1.48em;
  }
  .description {
    margin-bottom: 10px;
    line-height: 1.35em;
  }
  .article-body ul,
  .article-body ol {
    margin-bottom: 1.27em;
  }
  .kg-bookmark-container {
    flex-direction: row;
  }
  .kg-bookmark-content {
    padding-right: 15px;
  }
}
</style>