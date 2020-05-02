<template>
  <main class="text-center">
    <PostsCreateForm />
  </main>
</template>

<script>
import PostsCreateForm from '@/components/posts/PostsCreateForm.vue';
export default {
  data() {
    return {
      title: '',
      contents: '',
    };
  },
  components: {
    PostsCreateForm,
  },
};
</script>
<style lang="scss" scoped>
main {
  padding: 2rem 0 6rem;
  background: #eef1f4 !important;
}
</style>
