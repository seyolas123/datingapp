<template>
<div class="mb-5 mx-auto">
 <div class="">
        <swiper
          :breakpoints="swiperOptions.breakpoints"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class=""
        >
        <p class="mt-2 max-w-2xl text-sm text-gray-500"><em>showing all fleeks</em></p>
          <swiper-slide>
            <div
              class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg"
            >
              <div class="p-4">
                <div class="flex">
                  <div class="mt-1 flex items-center">
                    <div v-if="fleek.video">
                       <video width="400" height="240" controls>
            <source :src="config.urlink +fleek.video" type="video/mp4">
            Your browser does not support the video tag.
          </video>
                    </div>
                    <div v-else>
                      <span
                        class="inline-block object-cover overflow-hidden bg-gray-100"
                      >
                        <svg
                          style="width: 350px; height: 180px"
                          class="object-cover text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="flex justify-between">
                  <h2 class="mt-2 mb-2 font-bold uppercase">
                    {{ fleek.title }}
                  </h2>
                  <p class="mt-2 mb-2 font-bold">by {{ fleek.username }} </p>
                </div>
              </div>

            </div>
          </swiper-slide>
        </swiper>
      </div>
      </div>

   
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import config from "../../config"; 

 const { fleek } = defineProps({
  fleek: Object,
});

const swiperOptions = {
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
};
</script>

<style scoped>
.default-slider .swiper-slide {
  display: flex;
  height: 450px !important;
  width: 300px !important;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 24px;
  font-weight: 700;
}
</style>