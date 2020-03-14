<template>
  <header id="header" class="text-center">
    <nuxt-link to="/"><h1 class="logo">고대리꼬치</h1></nuxt-link>
    <nav class="menu">
      <ul class="spot">
        <li><nuxt-link to="/introduce">소개</nuxt-link></li>
        <li><nuxt-link to="/menu">메뉴</nuxt-link></li>
        <li><nuxt-link to="/community">커뮤니티</nuxt-link></li>
        <li><nuxt-link to="/info">이용안내</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
#header {
  display: inline-block;
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  position: relative;
}

h1 {
  color: #ff4442;
  float: left;
}

.menu {
  float: right;
}
.menu .spot {
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
}
.menu ul li {
  float: left;
  list-style: none;
}

.menu a {
  text-decoration: none;
  color: #000;
  padding: 5px;
}

.menu a:hover {
  color: #c1c1c1;
}
</style>
