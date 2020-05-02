<template>
  <b-container>
    <h2 class="text-left"><span>방명록</span></h2>
    <b-table
      striped
      hover
      :per-page="perPage"
      :current-page="currentPage"
      :items="items"
      :fields="fields"
      @row-clicked="rowClick"
      class="mt-3"
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
    >
    </b-pagination>
    <div class="inputButton text-right">
      <button type="submit" class=" btn btn-info" @click="createRoute">
        글쓰기
      </button>
    </div>
  </b-container>
</template>

<script>
import { fetchPosts } from '@/api/posts';

export default {
  props: {
    postItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      perPage: 5,
      fields: [
        {
          key: 'id',
          label: '번호',
        },
        {
          key: 'title',
          label: '제목',
        },
        {
          key: 'User.nickname',
          label: '작성자',
        },
        {
          key: 'createdAt',
          label: '작성일',
        },
      ],
      items: this.postItems,
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  methods: {
    rowClick(item, index, event) {
      this.$router.push({ path: `/post/${item.id}` });
    },
    // 글쓰기
    createRoute() {
      this.$router.push('/posts/create');
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem;
}
.table {
  border: 1px solid #dee2e6;
}
</style>
