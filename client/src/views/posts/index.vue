<template>
  <main id="main" class="text-center">
    <div v-if="isLoading">
      <LoadingSpinner />
    </div>
    <template v-else>
      <PostsListItem :postItems="postItems" @refresh="fetchData" />
    </template>
  </main>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { fetchPosts } from '@/api/posts';
import PostsListItem from '@/components/posts/PostsListItem';

export default {
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  components: {
    LoadingSpinner,
    PostsListItem,
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
        ].createdAt = `${year}-${month}-${day} ${hours}:${minutes}`;
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

<style scoped></style>
