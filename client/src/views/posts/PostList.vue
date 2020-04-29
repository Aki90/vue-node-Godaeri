<template>
  <main class="text-center">
    <PostItem />
  </main>
</template>

<script>
import PostItem from '@/components/posts/PostItem.vue';
export default {
  components: {
    PostItem,
  },
};
</script>

<style scoped>
main {
  padding: 2rem 0 6rem;
  background: #eef1f4 !important;
}
</style>
