<template>
  <div class="p-5">
    <div v-if="loading" class="flex justify-center">Loading...</div>
    <div v-else class="swiper-container">
      <div class="ml-3 mt-2 max-w-2xl text-sm text-gray-500" v-if="!users.length">
        <em>No user online yet</em>
      </div>
      <div
        v-else
        class="antialiased text-gray-900 font-sans p-4 swiper-container"
        style="margin-top: -30px"
      >
        <p class="mt-2 max-w-2xl text-sm text-gray-500">
          <em>showing users online</em>
        </p>
        <swiper
          :breakpoints="swiperOptions.breakpoints"
          :autoplay="swiperOptions.autoplay"
          :effect="swiperOptions.effect"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class=""
          style=""
        >
          <swiper-slide
            v-for="(user, index) in users"
            :key="user.id"
            class="opacity-0 animate-fade-in-down"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div
              class="w-full inset-y-0 left-0 bg-gray-200 max-w-sm rounded overflow-hidden shadow-lg"
              style="height: 570px"
            >
              <div
                class="px-2 py-3 flex justify-center items-center"
                v-if="user.avatar"
              >
                <CloudImageProvider v-bind:cloudImageConfig="cloudimageConfig">
                  <img
                    class="w-full rounded-lg shadow-lg"
                    style="width: 400px; height: 400px"
                    :src="config.urlink + user.avatar"
                    :alt="user.name"
                  />
                </CloudImageProvider>
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

              <div class="px-1 py-1">
                <div class="flex justify-between">
                  <!-- <h2 v-if="user.is_verified == 1" class="mt-2 mb-2 font-bold uppercase">
                    <img class="w-8 h-8" src="/public/verified.png" /> {{ user.username }}
                    <p v-for="status in friends" :key="status.id"></p>
                  </h2> -->
                  <h2 class="mt-1 mb-2 font-bold uppercase">
                    {{ user.username }}
                    <p v-for="status in friends" :key="status.id"></p>
                  </h2>
                  <p class="mt-1 mb-1 font-bold">{{ user.age }} yrs</p>
                </div>
                <div class="flex justify-between items-center">
                  <p v-if="user.city" class="mt-1 mb-2 font-bold">
                    <span class="text-gray-500">{{ user.city }}</span>
                  </p>
                  <p v-else class="mt-1 mb-2 font-bold">
                    <span class="text-red-500">No location</span>
                  </p>
                  <p
                    v-if="user.hook_price == 'bargain'"
                    class="mt-2 mb-2 font-bold"
                  >
                    Invite fare:
                    <span class="text-gray-900">{{ user.hook_price }}</span>
                  </p>
                  <p v-else class="mt-2 mb-2 font-bold">
                    Invite fare:
                    <span class="text-lime-900">{{ user.hook_price }}</span>
                  </p>
                </div>
              </div>

              <div>
                <div
                  class="rounded rounded-b:md-5 bg-connekta-main p-4 flex justify-between items-center text-sm"
                >
                  <button
                    class="inline-flex items-center text-lime-400 text-sm font-medium rounded-md"
                  >
                    <router-link
                      :to="{ name: 'UserView', params: { id: user.uid } }"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </router-link>
                  </button>

                  <button
                    @click="sendFriendRequest(user.uid, user.name, user.id)"
                    class="inline-flex items-center text-lime-400 text-sm font-medium rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                  </button>

                  <button
                    @click="sendHook(user.uid, user.username)"
                    class="inline-flex items-center text-lime-400 text-sm font-medium rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                      />
                    </svg>
                  </button>

                  <button
                    v-show="user.city"
                    class="inline-flex items-center text-lime-400 text-sm font-medium rounded-md"
                  >
                    <a
                      :href="'https://www.google.com/maps/place/' + user.city"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </a>
                  </button>

                  <!-- https://www.google.com/maps/place/Ikorodu -->
                  <button
                  class="inline-flex items-center text-lime-400 text-sm font-medium rounded-md"
                >
                  <router-link :to="{ name: 'ChatGeneral', params: { id: user.id }}"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
                  </router-link>
                </button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import store from "../../store";
import config from "../../config";
import Swal from "sweetalert2";

let loading = ref(false);

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

const users = computed(() => store.state.circles.circle.data.online);

function getConnectedF() {
  loading.value = true;
  store.dispatch("circles/getConnectedFriends").then(() => {
    loading.value = false;
  });
}

onMounted(() => {
  getConnectedF();
  // age.value = getAge(usef.dob);
});


function sendFriendRequest(uid, name, id) {
  Swal.fire({
    background: '#e3e3e3',
    title: "",
    text: "Do you want to continue",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes Send it!",
    cancelButtonText: "No!",
    showCloseButton: true,
    confirmButtonColor: '#955989',
    //showLoaderOnConfirm: true
  }).then((result) => {
    if (result.value) {
      store.dispatch("circles/checkFriendRequest", uid).then((res) => {
        if (res.data.length > 0) {
          Swal.fire("", "You are already friends", "warning");
        } else {
          store
            .dispatch("circles/sendRequest", { uid, name, id })
            .then(() => {
              Swal.fire("Request Sent!", "Friend Request Successful", "success");
           
              router.push({ name: "Circle" });
            })
            .catch(() => {
              
            });
        }
      });
    }
  });
}

function sendHook(uid, name) {
  Swal.fire({
    background: '#e3e3e3',
    title: "You will need 1000connects",
    text: "Do you want to continue",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes!",
    cancelButtonText: "No!",
    showCloseButton: true,
    confirmButtonColor: '#955989',
    //showLoaderOnConfirm: true
  }).then((result) => {
    if (result.value) {
      store.dispatch("hookers/checkHookRequest", uid).then((res) => {
        if (res.data.length > 0) {
          Swal.fire("", "You both have an ongoing hookup", "warning");
          
        } else {
          store
            .dispatch("hookers/sendHookRequest", { uid, name })
            .then(() => {
              Swal.fire("Request Sent!", "Hookup Request Successful", "success");
              store.dispatch("notifications/notifyHookRequest", uid);
              router.push({ name: "HookieDetails", params: { id: uid } });
            })
            .catch(() => {
              
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
