import axios from 'axios';


export const actions = {
  nuxtServerInit(vuexContext, context) {
    return axios
      .get(
        'https://nuxt-blog-cbb7b-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
      )
      .then((res) => {
        const postsArray = [];
        for (const key in res.data) {
          postsArray.push({ ...res.data[key], id: key });
        }
        vuexContext.commit('posts/setPosts', postsArray);
      })
      .catch((e) => context.error(e));
  }
}