<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
h2 span {
  font-size: 1.5rem;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid #000;
}
</style>
<!-- resetCSS -->
