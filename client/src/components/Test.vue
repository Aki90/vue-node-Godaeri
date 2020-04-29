<template>
  <main class="text-center">
    <b-container>
      <b-row align-h="center" class="mt-5">
        <b-col cols="5">
          <b-card class="p-3">
            <h2 class="mb-4"><span>로그인</span></h2>
            <b-form @submit.prevent="onSubmit">
              <b-form-group id="emailForm" label="이메일" label-for="emailForm">
                <b-form-input
                  id="emailForm"
                  type="email"
                  v-model="form.email"
                  required
                  placeholder="이메일 주소를 입력해주세요"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group
                id="passwordForm"
                label="비밀번호"
                label-for="passwordForm"
              >
                <b-form-input
                  id="passwordForm"
                  type="password"
                  v-model="form.password"
                  required
                  placeholder="비밀번호를 입력해주세요"
                >
                </b-form-input>
              </b-form-group>

              <div class="justify-content-between">
                <b-button type="submit" variant="primary">로그인</b-button>
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
  </main>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      form: {
        email: '',
        password: '',
        food: null,
        checked: [],
      },
    };
  },
  methods: {
    handleClick() {
      this.showDismissibleAlert = true;
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style scoped>
main {
  padding: 2rem 0 6rem;
  background: #eef1f4 !important;
}

.register {
  margin-top: 1rem;
}
</style>
