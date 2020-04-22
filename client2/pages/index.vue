<template>
  <main id="main" class="text-center">
    <section id="banner">
      <Slider />
    </section>
    <!-- //banner -->
    <section class="story">
      <div class="warp_story">
        <p><strong>고대리 이야기</strong></p>
        <nuxt-link to="/introduce">고대리꼬치를 소개합니다</nuxt-link>
      </div>
    </section>
    <!-- //story -->
    <section class="sns">
      <div class="warp_sns">
        <p><strong>고대리 SNS</strong></p>
        <p class="tag">#고대리 #고대리신메뉴 #고대리이벤트</p>
        <p class="icon">
          <a href="https://www.facebook.com/godaeri623/" target="_blank">
            <i class="fab fa-facebook-square fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/godaeri_skewers/" target="_blank">
            <i class="fab fa-instagram-square fa-2x"></i>
          </a>
        </p>
      </div>
      <!-- //.warp_sns -->
    </section>
    <!-- //sns -->
  </main>
</template>

<script>
import Slider from '@/components/Slider';

export default {
  components: {
    Slider,
  },
};
</script>

<style scoped></style>
