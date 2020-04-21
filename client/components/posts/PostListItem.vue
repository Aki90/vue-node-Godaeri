<template>
  <div>
    PostListItem 컴포넌트로 분리하기 나중에 prop 로 상위 컴포넌트에서
    내리고(:postItem) 추후에 postItem 으로 받아서 활용하기
  </div>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
