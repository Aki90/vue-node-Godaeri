<template>
  <main class="text-center">
    <h1>생성 페이지</h1>
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
        <button type="submit" class="btn btn-primary">Create</button>
      </form>
    </div>
  </main>
</template>

<script>
import { createPost } from '@/api/posts';
export default {
  data() {
    return {
      title: '',
      contents: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const postData = {
          title: this.title,
          contents: this.contents,
        };
        const cookie = this.$cookies.get('godaeri_auth');
        const { data } = await createPost(postData);
        // await this.$store.dispatch('posts/CREATE', postData);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: #fff;
}
</style>
