<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex justify-between px-2 py-2 sm:px-4">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          <em>Connected Friends</em>
        </h3>
        <h3 class="text-lg leading-6 font-medium text-gray-900"><em></em></h3>
      </div>
    </template>

    <div v-if="loading" class="flex justify-center">Loading...</div>
    <div v-else class="swiper-container">
      <div class="mt-2 max-w-2xl text-sm text-gray-500" v-if="!users.length"><em>You have no connected friends yet</em></div>
      <div v-else>
        <p class="mt-2 max-w-2xl text-sm text-gray-500"><em>showing connected friends...</em></p>
        <swiper
          :breakpoints="swiperOptions.breakpoints"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="defaultslide"
        >
          <swiper-slide
            v-for="(user, index) in users"
            :key="user.id"
            class="opacity-0 animate-fade-in-down"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div
              class="c-card block bg-gray-200 shadow-md hover:shadow-xl rounded-lg"
            >
              <div class="p-4">
                <div class="flex">
                  <div class="mt-1 flex items-center">
                    <div v-if="user.avatar">
                      <img
                        :src="config.urlink + user.avatar"
                        :alt="user.name"
                        class="rounded-lg object-cover"
                        style="width: 400px; height: 280px"
                      />
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
                    {{ user.name }}
                  </h2>
                  <p class="mt-2 mb-2 font-bold">{{ user.age }} yrs</p>
                </div>
              </div>

              <div
                class="rounded rounded-b:md-5 bg-connekta-main p-4 flex justify-center items-center text-sm"
              >
                <button
                  class="mr-3 inline-flex items-center px-4 py-2 bg-lime-700 hover:bg-lime-800 text-white text-sm font-medium rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Hook
                </button>
                <button
                  @click="disconnect(user.uid)"
                  class="inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Disconnect
                </button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </PageComponent>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import PageComponent from "../../components/core/PageComponent.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import store from "../../store";
import config from "../../config";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const router = useRouter();


let loading = ref(false);
let error = ref('');

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

const users = computed(() => store.state.circles.circle.data.approved);

function getConnectedF() {
  loading.value = true;
  store.dispatch("circles/getConnectedFriends").then(() => {
    loading.value = false;
  });
}

onMounted(() => {
  getConnectedF();
});

function disconnect(uid) {
  Swal.fire({
    background: '#e3e3e3',
    title: "",
    text: "Are you sure you want to delete this friend",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No!",
    showCloseButton: true,
    confirmButtonColor: '#955989',
    //showLoaderOnConfirm: true
  }).then((result) => {
       if (result.value) {
          store.dispatch('circles/deleteFriend', uid)
            .then(() => {
              Swal.fire("Friend Deleted!", "Friend deleted succesfully", "success");
              store.dispatch("notifications/notifyDeletionRequest", uid);
              getConnectedF();
              router.push({ name: "Circle" });
            })
            .catch((error) => {
              if (error.response.status === 422) {
          error.value = error.response.data.error;
          store.commit("notify", {
            type: "failure",
            message: `${error.value}`,
          });
        }
            });
        }  
  });
}


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
