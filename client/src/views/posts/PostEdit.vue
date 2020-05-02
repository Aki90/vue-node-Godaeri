<template>
  <main class="text-center">
    <PostEditForm />
  </main>
</template>

<script>
import PostEditForm from '@/components/posts/PostEditForm.vue';
export default {
  components: {
    PostEditForm,
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 2rem 0 6rem;
  background: #eef1f4 !important;
}
</style>
