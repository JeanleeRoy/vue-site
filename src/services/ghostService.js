import { ref } from "vue";
import api from "./ghostApi";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const getData = async (slug) => {
    await api()
      .get("/posts/", {
        params: {
          filter: `tag:${slug}`,
          fields: "id,title,slug,feature_image,custom_excerpt",
        }
      })
      .then((res) => (posts.value = res.data.posts))
      .catch((err) => (error.value = err.message));
  };
  return { posts, error, getData };
};

//----- deprecated ------

const getTags = () => {
  const tags = ref([]);
  const error = ref(null);
  const load = async () => {
    await api()
      .get("/tags/")
      .then((res) => (tags.value = res.data.tags))
      .catch((err) => (error.value = err.message));
  };
  return { tags, error, load };
};

const getTagName = () => {
  const tag_name = ref(null);
  const getTag = async (slug) => {
    await api()
      .get(`/tags/slug/${slug}/`)
      .then((res) => (tag_name.value = res.data.tags[0].name))
      .catch((err) => console.log(err.message));
  };
  return { tag_name, getTag };
};

//----- 

export { getTags, getTagName, getPosts };
