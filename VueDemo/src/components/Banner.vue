<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script>
  // 引入Swiper
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    props: ['listImg'],
    mounted () {
      console.log('mounted', this)
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        speed: 400,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        on: {
          click: function () {
            console.log(this.clickedIndex)
          }
        },
        onTouchEnd: function () {
          swiper.startAutoplay()
        }
      })
    }
  }
</script>

<style lang="less">
  .swiper-container {
    width: 100%;
    height: 13rem;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        }
      }
    .swiper-pagination-bullet {
      width: 0.833rem;
      height: 0.833rem;
      display: inline-block;
      background: #8d6a91;
    }
  }
</style>
