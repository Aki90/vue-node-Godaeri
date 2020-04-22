<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="email">id: </label>
          <input id="email" type="text" v-model="email" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button type="submit" class="btn">회원 가입</button>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/user';

export default {
  data() {
    return {
      // form values
      email: '',
      nickname: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          email: this.email,
          nickname: this.nickname,
          password: this.password,
        };
        await this.$store.dispatch('users/SIGNUP', userData);
        this.$router.push({ path: '/' });
      } catch (error) {
        console.error(error);
      }
    },
    initForm() {
      this.email = '';
      this.nickname = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
