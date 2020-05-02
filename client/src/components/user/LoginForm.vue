<template>
  <b-container>
    <b-row align-h="center" class="mt-5">
      <b-col cols="5">
        <b-card class="p-3">
          <h2 class="mb-4"><span>로그인</span></h2>
          <b-form @submit.prevent="submitForm">
            <b-form-group id="emailForm" label="이메일" label-for="emailForm">
              <b-form-input
                id="emailForm"
                type="email"
                v-model="email"
                required
                placeholder="이메일 주소를 입력해주세요"
              >
              </b-form-input>
              <p class="validation-text" v-if="!isEmailValid && email">
                <span class="warning">
                  이메일형식을 맞춰주세요!
                </span>
              </p>
            </b-form-group>
            <b-form-group
              id="passwordForm"
              label="비밀번호"
              label-for="passwordForm"
            >
              <b-form-input
                id="passwordForm"
                type="password"
                v-model="password"
                required
                placeholder="비밀번호를 입력해주세요"
              >
              </b-form-input>
            </b-form-group>

            <div class="justify-content-between">
              <b-button
                :disabled="!isEmailValid || !password"
                type="submit"
                :class="!isEmailValid || !password ? 'disabled' : null"
                variant="primary"
              >
                로그인
              </b-button>
            </div>
          </b-form>
          <div class="register">
            <span>아직 회원이 아니시라면? </span>
            <router-link to="/signup">회원가입</router-link>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
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
        alert(error.response.data.message);
        initForm();
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.password = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.validation-text {
  margin-top: 0.5rem;

  .warning {
    color: red;
  }
}
.register {
  margin-top: 1rem;
}
</style>
