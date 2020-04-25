<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="email">id: </label>
          <input id="email" type="text" v-model="email" />
          <p class="validation-text">
            <span class="warning" v-if="!isEmailValid && email">
              이메일 주소를 입력해 주세요
            </span>
          </p>
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
import { validateEmail } from '@/utils/validation.js';

export default {
  data() {
    return {
      // form values
      email: '',
      nickname: '',
      password: '',
    };
  },
  computed: {
    isEmailValid() {
      return validateEmail(this.email);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          email: this.email,
          nickname: this.nickname,
          password: this.password,
        };
        await this.$store.dispatch('SIGNUP', userData);
        this.$router.push({ name: 'Main' });
      } catch (error) {
        alert(error.response.data.message);
        initForm();
      }
    },
    initForm() {
      this.password = '';
    },
  },
};
</script>

<style></style>
