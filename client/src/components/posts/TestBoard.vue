<template>
  <div class="text-center">
    <b-table
      striped
      hover
      :per-page="perPage"
      :current-page="currentPage"
      :items="items"
      :fields="fields"
      @row-clicked="rowClick"
    ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
import data from '@/data';
let items = data.Content.sort((a, b) => {
  return b.content_id - a.content_id;
});
items = items.map(contentItem => {
  return {
    ...contentItem,
    user_name: data.User.filter(
      userItem => userItem.user_id === contentItem.user_id,
    )[0].name,
  };
});
export default {
  name: 'Board',
  data() {
    return {
      currentPage: 1,
      perPage: 5,
      fields: [
        {
          key: 'content_id',
          label: '글번호',
        },
        {
          key: 'title',
          label: '제목',
        },
        {
          key: 'created_at',
          label: '등록일',
        },
        {
          key: 'user_name',
          label: '글쓴이',
        },
      ],
      items: items,
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  methods: {
    rowClick(item, index, event) {
      console.log(index);
      //   this.$router.push({ path: `/post/${content_id}` });
    },
  },
};
</script>
