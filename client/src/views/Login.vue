<template>
  <main class="text-center">
    <LoginForm />
  </main>
</template>

<script>
import LoginForm from '@/components/user/LoginForm';

export default {
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 2rem 0 6rem;
  background: #eef1f4 !important;
}
</style>
