import { ref } from 'vue'
import api from './api'

const getArticles = () => {
  const articles = ref([]);
  const error = ref(null);

  const load = async (id) => {
    await api().get('/posts')
      .then(res => articles.value = res.data.slice(0, id*2))
      .catch(err => error.value = err.message);
  }

  return { articles, error, load };
}

const getArticle = () => {
  const article = ref(null);
  const error = ref(null);

  const load = async (id) => {
    await api().get('/posts/' + id)
      .then(res => article.value = res.data)
      .catch(err => error.value = err.message);
  }

  return { article, error, load };
}


export {getArticles, getArticle};