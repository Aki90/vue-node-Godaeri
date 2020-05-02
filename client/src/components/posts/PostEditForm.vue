<template>
  <b-container>
    <b-form @submit.prevent="submitForm">
      <!-- title -->
      <div class="title text-left">
        <p>게시물 번호 · {{ postId }}</p>
        <p>{{ nickname }} · {{ createdAt | formatDate }}</p>
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
      <b-form-group>
        <!-- //title -->
        <!-- contents -->
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
            수정
          </button>
          <button type="submit" class="btn btn-info" @click="returnRoute">
            뒤로가기
          </button>
        </div>
      </b-form-group>
      <!-- //contents -->
    </b-form>
  </b-container>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';

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
  },
  methods: {
    // POST 수정
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
    // 뒤로가기
    returnRoute() {
      const postId = this.$route.params.id;
      this.$router.replace({ path: `/post/${postId}` });
    },
  },
  async created() {
    const postId = this.$route.params.id;
    const { data } = await fetchPost(postId);

    this.postId = data.post.id;
    this.nickname = data.post.User.nickname;
    this.title = data.post.title;
    this.contents = data.post.contents;
    this.createdAt = data.post.createdAt;
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/posts/PostEditForm.scss';
</style>
