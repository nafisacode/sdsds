<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

// Swiper CSS importlari
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Pagination sozlamalari
const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
  },
};
</script>

<template>
  <main>
    <section class="banner">
      <swiper
        :pagination="pagination"
        :modules="[Navigation, Pagination]"
        navigation
        class="mySwiper"
      >
        <swiper-slide v-for="slide in 3" :key="slide">
          <div class="banner__item relative">
            <div class="banner__img absolute">
              <img src="/images/banner.png" alt="" />
            </div>
            <div class="banner-info absolute">
              <h1><span>бренд</span> american vintage</h1>
              <router-link to="/collection/collection.vue">{{ $t('collection') }}</router-link>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </main>
</template>
