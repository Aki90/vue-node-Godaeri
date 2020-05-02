<template>
  <b-container>
    <b-row align-h="center" class="mt-5">
      <b-col cols="5">
        <b-card class="p-3">
          <h2 class="mb-4"><span>회원가입</span></h2>
          <b-form @submit.prevent="submitForm">
            <!-- 이메일폼 -->
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
            <!-- //이메일폼 -->
            <!-- 닉네임폼 -->
            <b-form-group
              id="nicknameForm"
              label="닉네임"
              label-for="nicknameForm"
            >
              <b-form-input
                id="nicknameForm"
                type="text"
                v-model="nickname"
                required
                placeholder="닉네임을 입력해주세요"
              >
              </b-form-input>
            </b-form-group>
            <!-- //닉네임폼 -->
            <!-- 비밀번호폼 -->
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
            <!-- //비밀번호폼 -->
            <!-- 비밀번호확인폼 -->
            <b-form-group
              id="passwordConfirmForm"
              label="비밀번호 확인"
              label-for="passwordConfirmForm"
            >
              <b-form-input
                id="passwordConfirmForm"
                type="password"
                v-model="passwordConfirm"
                required
                placeholder="비밀번호를 한번 더 입력해주세요"
              >
              </b-form-input>
              <p class="validation-text" v-if="!confirm">
                <span class="warning">
                  두 비밀번호를 맞춰주세요!
                </span>
              </p>
            </b-form-group>
            <!-- //비밀번호확인폼 -->

            <div class="justify-content-between">
              <b-button
                :disabled="!isEmailValid || !password"
                type="submit"
                :class="
                  !isEmailValid || !nickname || !password || !passwordConfirm
                    ? 'disabled'
                    : null
                "
                variant="primary"
              >
                회원가입
              </b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { registerUser } from '@/api/user';
import { validateEmail } from '@/utils/validation.js';

export default {
  data() {
    return {
      email: '',
      nickname: '',
      password: '',
      passwordConfirm: '',
    };
  },
  computed: {
    isEmailValid() {
      return validateEmail(this.email);
    },
    confirm() {
      return this.password == this.passwordConfirm;
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

<style lang="scss" scoped>
.validation-text {
  margin-top: 0.5rem;
}
.validation-text .warning {
  color: red;
}
</style>
