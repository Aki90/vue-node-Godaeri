<template>
  <header id="header" class="text-center">
    <router-link to="/">
      <h1 class="logo">
        <img src="@/assets/logo.jpeg" alt="로고" />
      </h1>
    </router-link>
    <!-- //logo -->
    <nav class="menu">
      <ul class="spot">
        <li><router-link to="/introduce">소개</router-link></li>
        <li><router-link to="/menu">메뉴</router-link></li>
        <li><router-link to="/posts">커뮤니티</router-link></li>
        <li><router-link to="/info">이용안내</router-link></li>
        <template v-if="isUserLogin">
          <li><a href="javascript:;" @click="userLogout">로그아웃</a></li>
        </template>
        <template v-else>
          <li><router-link to="/login">로그인</router-link></li>
        </template>
      </ul>
    </nav>
    <!-- //menu -->
  </header>
</template>

<script>
import { deleteCookie } from '../../utils/cookies';
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
      alert('로그아웃 되었습니다.');
      if (this.$route.path !== '/') this.$router.push({ path: '/' });
    },
  },
};
</script>

<!-- <style
  src="@/assets/scss/components/common/header.scss"
  lang="scss"
  scoped
></style>
-->
<style></style>
