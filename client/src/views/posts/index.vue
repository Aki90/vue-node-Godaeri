<template>
  <main id="main" class="text-center">
    <div v-if="isLoading">
      <LoadingSpinner />
    </div>
    <template v-else>
      <PostListItem :postItems="postItems" @refresh="fetchData" />
    </template>
    <div>
      <router-link to="/posts/create">
        <i class="fa fa-plus-circle fa-4x" aria-hidden="true"></i>
      </router-link>
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

      // Bootstrap 관련 문제로 인한 작위적인 filter 처리
      for (let index = 0; index < data.posts.length; index++) {
        const filterCreatedAt = data.posts[index].createdAt;
        const date = new Date(filterCreatedAt);
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month > 9 ? month : `0${month}`;
        const day = date.getDate();
        let hours = date.getHours();
        hours = hours > 9 ? hours : `0${hours}`;
        const minutes = date.getMinutes();
        data.posts[
          index
        ].createdAt = `${year}.${month}.${day} ${hours}:${minutes}`;
      }

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
/* test
#main {
  background-color: #ff0;
} */
.fa-pen-square {
  color: red; /* TEST */
}
</style>
