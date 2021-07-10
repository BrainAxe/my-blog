import axios from 'axios';

export const state = () => ({
  loadedPosts: []
});

export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts;
  },

  addPost(state, post) {
    state.loadedPosts.push(post);
  },
  editPost(state, editedPost) {
    const postIndex = state.loadedPosts.findIndex(
      (post) => post.id === editedPost.id
    );
    state.loadedPosts[postIndex] = editedPost;
  }
};

export const actions = {
  setPosts(vuexContext, posts) {
    vuexContext.commit('setPosts', posts);
  },

  addPost(vuexContext, post) {
    const createdPost = { ...post, updatedDate: new Date() };
    return axios
      .post(
        'https://nuxt-blog-cbb7b-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json?auth=' +
          this.state.auth.token,
        createdPost
      )
      .then((result) => {
        vuexContext.commit('addPost', {
          ...createdPost,
          id: result.data.name
        });
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
      });
  },
  editPost(vuexContext, editedPost) {
    return axios
      .put(
        'https://nuxt-blog-cbb7b-default-rtdb.asia-southeast1.firebasedatabase.app/posts/' +
          editedPost.id +
          '.json?auth=' +
          this.state.auth.token,
        editedPost
      )
      .then((res) => {
        vuexContext.commit('editPost', editedPost);
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
      });
  }
};

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts;
  }
};
