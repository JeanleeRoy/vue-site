import { ref } from 'vue'
import api from './api'

const getArticles = () => {
  const articles = ref([]);
  const error = ref(null);

  const load = async (id) => {
    await api().get('/posts')
      .then(res => articles.value = res.data.slice(0, id))
      .catch(err => error.value = err);
  }

  return { articles, error, load };
}


export {getArticles};