<template>
  <b-container>
    <h2 class="text-left"><span>방명록</span></h2>
    <b-form @submit.prevent="submitForm">
      <!-- title -->
      <div class="title text-left">
        <b-form-group id="title" label="" label-for="title">
          <b-form-input
            id="title"
            type="text"
            v-model="title"
            required
            placeholder="제목을 입력해주세요"
          >
          </b-form-input>
        </b-form-group>
      </div>
      <!-- //title -->
      <!-- contents -->
      <b-form-group>
        <b-form-textarea
          id="textarea-no-resize"
          no-resize
          rows="3"
          v-model="contents"
          placeholder="내용을 입력해주세요"
          required
        >
        </b-form-textarea>
        <p v-if="!isContentsValid" class="overLength">
          내용은 200자 이하까지만 가능합니다.
        </p>
        <div class="inputButton text-right">
          <button
            type="submit"
            class="btn btn-info"
            :disabled="!title || !contents || !isContentsValid"
          >
            등록
          </button>
          <button type="submit" class="btn btn-info" @click="submitReturn">
            뒤로가기
          </button>
        </div>
      </b-form-group>
      <!-- //contents -->
    </b-form>
  </b-container>
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
    // POST 생성
    async submitForm() {
      try {
        const postData = {
          title: this.title,
          contents: this.contents,
        };
        await createPost(postData);
        alert('입력이 완료되었습니다.');
        this.$router.push({ path: '/posts' });
      } catch (error) {
        alert(error.response.data.message);
        this.$router.push({ path: '/login' });
      }
    },
    // 뒤로가기(/posts)
    submitReturn() {
      this.$router.push({ path: `/posts` });
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #fff;
  padding: 2rem;
}
#title {
  margin-top: 1rem;
}
.title {
  padding-bottom: 1rem;
  border-bottom: 2px solid #000;
}
.title h3 {
  font-size: 1.3rem;
  font-weight: bold;
}
.title p {
  margin: 0;
}
#textarea-no-resize {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.overLength {
  color: red;
}
.inputButton button {
  margin-right: 0.5rem;
}
</style>
