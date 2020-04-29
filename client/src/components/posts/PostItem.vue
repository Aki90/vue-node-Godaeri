<template>
  <b-container>
    <div class="title text-left">
      <h3>{{ title }}</h3>
      <p>게시물 번호 · {{ postId }}</p>
      <p>{{ nickname }} · {{ createdAt | formatDate }}</p>
    </div>
    <b-form-textarea
      id="textarea-plaintext textarea-no-resize"
      plaintext
      no-resize
      rows="3"
      :value="contents"
    >
    </b-form-textarea>
    <div class="inputButton text-right">
      <button
        type="submit"
        class=" btn btn-info"
        v-show="userCheck"
        @click="submitEdit"
      >
        수정
      </button>
      <button
        type="submit"
        class=" btn btn-info"
        v-show="userCheck"
        @click="submitDelete"
      >
        삭제
      </button>
      <button type="submit" class=" btn btn-info" @click="submitReturn">
        목록
      </button>
    </div>
  </b-container>
</template>

<script>
import { fetchPost, deletePost } from '@/api/posts';

export default {
  data() {
    return {
      postId: '',
      nickname: '',
      title: '',
      contents: '',
      createdAt: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
    userCheck() {
      // 작성자 비교 확인
      return this.nickname === this.$store.state.nickname;
    },
  },
  methods: {
    // 데이터 가져오기
    async fetchData() {
      const postId = this.$route.params.id;
      const { data } = await fetchPost(postId);

      this.postId = postId;
      this.nickname = data.post.User.nickname;
      this.title = data.post.title;
      this.contents = data.post.contents;
      this.createdAt = data.post.createdAt;
    },
    // 수정버튼 클릭 시
    submitEdit() {
      const postId = this.$route.params.id;
      this.$router.push({ path: `/post/${postId}/edit` });
    },
    // POST 삭제버튼
    async submitDelete() {
      try {
        if (confirm('게시물을 삭제하시겠습니까?')) {
          const postId = this.$route.params.id;
          await deletePost(postId);
          alert('게시물이 삭제되었습니다.');
          this.$router.push({ path: '/posts' });
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    submitReturn() {
      this.$router.replace({ path: '/posts' });
    },
  },
  async created() {
    this.fetchData();
  },
};
</script>

<style>
.container {
  background-color: #fff;
  padding: 2rem;
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

.form-control-plaintext {
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.inputButton button {
  margin-right: 0.5rem;
}
</style>
