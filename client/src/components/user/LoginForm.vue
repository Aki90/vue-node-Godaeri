<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="email">id:</label>
          <input id="email" type="text" v-model="email" />
          <p class="validation-text">
            <span class="warning" v-if="!isEmailValid && email">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button
          :disabled="!isEmailValid || !password"
          type="submit"
          class="btn"
          :class="!isEmailValid || !password ? 'disabled' : null"
        >
          로그인
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation.js';
export default {
  data() {
    return {
      // form values
      email: '',
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
        // 비즈니스 로직
        const userData = {
          email: this.email,
          password: this.password,
        };
        await this.$store.dispatch('LOGIN', userData);
        // console.log(data);
        this.$router.push('/');
      } catch (error) {
        console.log(error); // TODO:
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.email = '';
      this.password = '';
    },
  },
};
</script>

<style>
.btn {
  color: white;
}
</style>
