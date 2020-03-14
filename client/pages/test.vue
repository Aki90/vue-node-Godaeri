<template>
  <div>
    <a href="https://baianat.github.io/hooper/examples.html#default-example"
      >https://baianat.github.io/hooper/examples.html#default-example</a
    >
    <hooper
      :itemsToShow="3"
      :autoPlay="true"
      :infiniteScroll="true"
      class="text-center"
    >
      <slide>
        slide 1
      </slide>
      <slide>
        slide 2
      </slide>
      <slide>
        slide 3
      </slide>
      <slide>
        slide 4
      </slide>
      <slide>
        slide 5
      </slide>
      <slide>
        slide 6
      </slide>

      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </div>
</template>
<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
};
</script>

<style scoped>
.hooper-slide {
  background-color: #f2f2f2;
  border: 1px solid red;
}
</style>
