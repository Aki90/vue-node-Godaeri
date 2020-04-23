<template>
  <main id="main" class="text-center">
    <div v-if="isLoading">
      <LoadingSpinner />
    </div>
    <ul>
      <li v-for="postItem in postItems" :key="postItem.id">
        <p>{{ postItem.title }}</p>
        <p>{{ postItem.contents }}</p>
        <p>{{ postItem.createdAt }}</p>
        <p>{{ postItem.User.nickname }}</p>
      </li>
    </ul>
    <div>
      <router-link to="/posts/create"
        ><i class="fa fa-plus-circle fa-4x" aria-hidden="true"></i
      ></router-link>
    </div>
  </main>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { fetchPosts } from '@/api/posts';

export default {
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  components: {
    LoadingSpinner,
  },
  methods: {
    async fetchData() {
      // POST 데이터 가져오기
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
/* test */
#main {
  background-color: #ff0;
}
</style>
