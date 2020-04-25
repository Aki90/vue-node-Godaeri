<template>
  <main id="main" class="text-center">
    <div v-if="isLoading">
      <LoadingSpinner />
    </div>
    <ul v-else>
      <PostListItem
        v-for="postItem in postItems"
        :key="postItem.id"
        :postItem="postItem"
        @refresh="fetchData"
      />
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
import { fetchPosts, deletePost } from '@/api/posts';
import PostListItem from '@/components/posts/PostListItem';

export default {
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  components: {
    LoadingSpinner,
    PostListItem,
  },
  methods: {
    // POST 데이터 가져오기
    async fetchData() {
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
.fa-pen-square {
  color: red; /* TEST */
}
</style>
