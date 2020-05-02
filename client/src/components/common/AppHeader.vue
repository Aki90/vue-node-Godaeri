<template>
  <header id="header">
    <b-navbar toggleable="lg" fixed="top">
      <b-navbar-brand>
        <router-link to="/">
          <h1 class="logo">
            <img src="@/assets/logo.jpeg" alt="로고" />
          </h1>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link to="/introduce">소개</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/menu">메뉴</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/posts">방명록</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/info">이용안내</router-link>
          </b-nav-item>
          <template v-if="isUserLogin">
            <b-nav-item>
              <a href="javascript:;" @click="userLogout">로그아웃</a>
            </b-nav-item>
          </template>
          <template v-else>
            <b-nav-item>
              <router-link to="/login">로그인</router-link>
            </b-nav-item>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="background"></div>
  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    userLogout() {
      this.$store.commit('clearToken');
      deleteCookie('godaeri_auth');
      deleteCookie('user_nick');
      alert('로그아웃 되었습니다.');
      if (this.$route.path !== '/') this.$router.push({ path: '/' });
    },
  },
};
</script>

<style
  lang="scss"
  src="@/assets/scss/components/common/AppHeader.scss"
  scoped
></style>
