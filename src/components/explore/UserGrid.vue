<template>
  <div v-if="loading" class="flex justify-center">Loading...</div>

  <div
    v-else
    class="antialiased text-gray-900 font-sans p-4 swiper-container"
    style="margin-top: -30px"
  >
    <p class="mt-4 max-w-2xl text-sm text-gray-500">
      <em>search all users</em>
    </p>
    <div class="grid grid-cols-2 gap-3">
      <div  
      v-for="(user, index) in users" 
      :key="user.id"
      class="colspan-1 opacity-0 animate-fade-in-down bg-white"
      :style="{ animationDelay: `${index * 0.1}s` }">

        <div class="max-w-sm rounded overflow-hidden ">
          <img
            class="w-full h-full"
            :src="config.urlink + user.avatar"
            :alt="user.username"

          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ user.name }}</div>
            <p class="text-gray-700 text-base">
              {{ user.description }}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ user.username }}({{ user.age }}yrs)</span
            >
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  setup>
import { computed, watch, ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import config from "../../config";
import store from "../../store";
import Img, { CloudImageProvider } from 'vue-cloudimage-responsive-plain';
import VueSimpleAlert from "vue3-simple-alert";
import { notify } from "@kyvg/vue3-notification";
import Swal from 'sweetalert2'
import Echo from 'laravel-echo'

let loading = ref("false");


const cloudimageConfig = {
    token: 'demo',
    baseURL: 'https://cdn.scaleflex.it/'
  };


let status = ref(0);
let msg = ref("");

const users = computed(() => store.state.users.users.data.users);
const friends = computed(() => store.state.users.users.data.friends);

status.value = { ...friends.status };

const isFriend = computed(() => {
  if ((this.status.value = 1)) {
    msg.value = "Already Friends";
    return msg;
  }
});

const user_area = computed(() => store.state.users.users.location);

function getUsers() {
  loading.value = true;
  store.dispatch("users/getAllUsers").then(() => {
    loading.value = false;
  });
}


onMounted(() => {
  getUsers();
//   window.Echo.channel('search')
//                     .listen('.searchResults', (e) => {
//                         this.$store.commit('users/getAllUsers', e.users)
//         })
  
});


let send_friend_connects = 100;

let message = ref(`You need ${send_friend_connects} connects(c) to connect`);

</script>
<style scoped>

</style>
