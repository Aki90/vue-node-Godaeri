<template>
  <main class="text-center">
    <SignupForm />
  </main>
</template>

<script>
import SignupForm from '@/components/user/SignupForm';
export default {
  components: {
    SignupForm,
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 2rem 0 6rem;
  background: #eef1f4 !important;
}
</style>
