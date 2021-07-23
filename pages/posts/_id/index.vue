<template>
  <div class="container" style="position: relative">
    <!-- Title -->
    <h1 class="mt-4">{{ loadedPost.title }}</h1>

    <!-- Author -->
    <p class="lead">
      <a href="#">{{ loadedPost.author }}</a>
    </p>

    <hr />

    <!-- Date/Time -->
    <p>Posted on {{ loadedPost.updatedDate }}</p>

    <hr />

    <!-- Preview Image -->
    <img
      class="img-fluid rounded"
      :src="loadedPost.thumbnail"
    />

    <hr />

    <!-- Post Content -->
    <p>{{ loadedPost.content }}</p>

    <br />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  asyncData(context) {
    return axios
      .get(
        'https://nuxt-blog-cbb7b-default-rtdb.asia-southeast1.firebasedatabase.app/posts/' +
          context.params.id +
          '.json'
      )
      .then((res) => {
        return {
          loadedPost: res.data
        };
      })
      .catch((e) => context.error(e));
  }
};
</script>

<style scoped>
img {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
}
</style>
