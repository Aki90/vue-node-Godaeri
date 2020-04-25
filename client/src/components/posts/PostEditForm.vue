<template>
  <div>
    <form class="form" @submit.prevent="submitForm">
      <div>
        <label for="title">Title:</label>
        <input id="title" type="text" v-model="title" />
      </div>
      <div>
        <label for="contents">Contents:</label>
        <textarea id="contents" type="text" rows="5" v-model="contents" />
      </div>
      <p v-if="!isContentsValid" class="overLength">
        내용은 200자 이하까지만 가능합니다.
      </p>
      <button
        type="submit"
        class="btn btn-primary"
        :disabled="!isContentsValid"
      >
        수정
      </button>
    </form>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      const postId = this.$route.params.id;
      const postData = {
        title: this.title,
        contents: this.contents,
      };
      try {
        await editPost(postId, postData);
        alert('수정을 완료했습니다.');
        this.$router.push({ path: '/posts' });
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  },
  async created() {
    const postId = this.$route.params.id;
    const { data } = await fetchPost(postId);
    this.title = data.post.title;
    this.contents = data.post.contents;
  },
};
</script>

<style>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: #fff;
}
</style>
