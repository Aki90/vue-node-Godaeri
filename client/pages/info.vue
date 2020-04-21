<template>
  <main class="text-center">
    <h2 class="title">이용안내</h2>
    <section class="info">
      <KakaoMap />
      <aside class="address">
        <h3>고대리꼬치</h3>
        <p>서울특별시 서대문구 창천동 494 (연희로 22)</p>
        <dl>
          <dt>영업시간</dt>
          <dd>매일 18:00 ~ 04:00</dd>
          <dt>전화번호</dt>
          <dd>02-323-5312</dd>
        </dl>
      </aside>
      <!-- //address -->
    </section>
    <!-- //info -->
  </main>
</template>

<script>
import KakaoMap from '@/components/KakaoMap';
export default {
  components: {
    KakaoMap,
  },
  // mounted() {
  //   // 이미지 지도에 표시할 마커
  //   const markers = [
  //     {
  //       position: new kakao.maps.LatLng(37.560808, 126.926876),
  //       text: '고대리꼬치',
  //     },
  //   ];

  //   const staticMapContainer = document.getElementById('staticMap'), // 이미지 지도를 표시할 div
  //     staticMapOption = {
  //       center: new kakao.maps.LatLng(37.560808, 126.926876), // 이미지 지도의 중심좌표
  //       level: 3, // 이미지 지도의 확대 레벨
  //       marker: markers, // 이미지 지도에 표시할 마커
  //     };

  //   // 이미지 지도를 생성
  //   const staticMap = new kakao.maps.StaticMap(
  //     staticMapContainer,
  //     staticMapOption,
  //   );
  // },
};
</script>

<!-- <style src="@/assets/scss/info.scss" lang="scss" scoped></style> -->
<style scoped></style>
