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
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="!isContentsValid"
        >
          Create
        </button>
      </form>
      <p v-if="!isContentsValid" class="overLength">
        내용은 200자 이하까지만 가능합니다.
      </p>
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
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      try {
        const postData = {
          title: this.title,
          contents: this.contents,
        };
        const { data } = await createPost(postData);
        alert('입력이 완료되었습니다.');
        this.$router.push({ name: 'Posts' });
      } catch (error) {
        alert(error.response.data.message);
        this.$router.push({ path: '/login' });
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
