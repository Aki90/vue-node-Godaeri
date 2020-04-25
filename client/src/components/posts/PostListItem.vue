<template>
  <li>
    <div class="post-user-nickname">
      {{ postItem.User.nickname }}
    </div>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt | formatDate }}
      <button @click="routeEditPage">수정</button>
      <button @click="deleteItem">삭제</button>
    </div>
  </li>
</template>

<script>
import { fetchPosts, deletePost } from '@/api/posts';

export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // POST 수정 페이지로
    routeEditPage() {
      const postId = this.postItem.id;
      this.$router.push(`/post/${postId}`);
    },
    // POST 삭제
    async deleteItem() {
      try {
        if (confirm('글을 삭제하시겠습니까?')) {
          await deletePost(this.postItem.id);
          this.$emit('refresh');
          alert('작성한 글을 삭제했습니다.');
        }
      } catch (error) {
        if (error.response.status === 401) {
          alert(error.response.data.message);
          this.$router.push({ path: '/login' });
        } else {
          alert(error.response.data.message);
        }
      }
    },
  },
};
</script>

<style></style>
