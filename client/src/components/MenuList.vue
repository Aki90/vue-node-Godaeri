<template>
  <b-container>
    <h2><span>메뉴</span></h2>
    <ul class="wrapper">
      <li class="menu" v-for="menu in menus" :key="menu.id">
        <span>
          <img :src="menu.url" :alt="menu.alt" />
          <em></em><strong>{{ menu.name }}</strong>
        </span>
      </li>
    </ul>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          url: require('@/assets/images/menu/01.jpeg'),
          alt: '과장님set',
          name: '과장님 Set / 20.0',
        },
        {
          url: require('@/assets/images/menu/02.jpeg'),
          alt: '꼬끼오set',
          name: '꼬끼오 Set / 18.0',
        },
        {
          url: require('@/assets/images/menu/03.jpeg'),
          alt: '꿀꿀set',
          name: '꿀꿀 Set / 18.0',
        },
        {
          url: require('@/assets/images/menu/04.jpeg'),
          alt: '동물농장set',
          name: '동물농장 Set / 21.0',
        },
        {
          url: require('@/assets/images/menu/05.jpeg'),
          alt: '개운한오뎅탕',
          name: '개운한 오뎅탕 / 16.0',
        },
        {
          url: require('@/assets/images/menu/06.jpeg'),
          alt: '샹그리아',
          name: '샹그리아 / 6.5, 13.0',
        },
        {
          url: require('@/assets/images/menu/07.jpeg'),
          alt: '준마이사케시리즈',
          name: '준마이 사케 시리즈',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/components/MenuList.scss';
</style>
