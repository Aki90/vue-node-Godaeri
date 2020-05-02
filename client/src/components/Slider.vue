<template>
  <hooper :autoPlay="true" :infiniteScroll="true">
    <slide v-for="image in images" :key="image.id">
      <img :src="image.url" :alt="image.alt" />
    </slide>
  </hooper>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      images: [
        {
          url: require('@/assets/images/store/01.jpeg'),
          alt: '매장이미지01',
        },
        {
          url: require('@/assets/images/store/02.jpeg'),
          alt: '매장이미지02',
        },
        {
          url: require('@/assets/images/store/03.jpeg'),
          alt: '매장이미지03',
        },
        {
          url: require('@/assets/images/store/04.jpeg'),
          alt: '매장이미지04',
        },
        {
          url: require('@/assets/images/store/05.jpeg'),
          alt: '매장이미지05',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.hooper {
  width: 100%;
  height: 100%;
  outline: none;

  .hooper-list li img {
    width: 40%;
  }
}
</style>
