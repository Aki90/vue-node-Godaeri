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
  metaInfo: {
    title: '고대리꼬치',
  },
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/App.scss';
</style>
