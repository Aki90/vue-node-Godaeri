<template>
  <fixed-header>
    <div class="navbar">
      <header id="header" class="text-center">
        <nuxt-link to="/">
          <h1 class="logo">
            <img src="images/logo.jpeg" alt="로고" />
          </h1>
        </nuxt-link>
        <!-- //logo -->
        <nav class="menu">
          <ul class="spot">
            <li><nuxt-link to="/introduce">소개</nuxt-link></li>
            <li><nuxt-link to="/menu">메뉴</nuxt-link></li>
            <li><nuxt-link to="/posts">커뮤니티</nuxt-link></li>
            <li><nuxt-link to="/info">이용안내</nuxt-link></li>
            <template v-if="isUserLogin">
              <li><a href="javascript:;" @click="userLogout">로그아웃</a></li>
            </template>
            <template v-else>
              <li><nuxt-link to="/login">로그인</nuxt-link></li>
            </template>
          </ul>
        </nav>
        <!-- //menu -->
      </header>
    </div>
  </fixed-header>
</template>

<script>
import FixedHeader from 'vue-fixed-header';

export default {
  components: {
    FixedHeader,
  },
  computed: {
    isUserLogin() {
      return this.$store.getters['users/isLogin'];
    },
  },
  methods: {
    userLogout() {
      this.$store.commit('users/clearToken');
      alert('로그아웃 되었습니다.');
      this.$router.push({ path: '/' });
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
