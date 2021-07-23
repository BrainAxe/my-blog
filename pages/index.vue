<template>
  <div class="home-page">
    <section class="intro">
      <Banner />
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';
import Banner from '@/components/Banner.vue';

export default {
  components: {
    PostList,
    Banner
  },
  computed: {
    loadedPosts() {
      return this.$store.getters['posts/loadedPosts'];
    }
  }
};
</script>

<style scoped>
.intro {
  height: 400px;
  position: relative;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
