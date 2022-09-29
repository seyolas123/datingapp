<template>
    <PageComponent>
    
      <template v-slot:header>
       <div class="px-2 py-2 sm:px-4">
          <h3 class="text-lg leading-6 font-medium text-gray-900"><em>Pending Sent Requests</em></h3>
        </div>
      </template>
     
     <div v-if="loading" class="flex justify-center">
       Loading...
     </div>
     <div v-else>
        <div v-if="!users.length">
          You have no sent requests
        </div>
        <div v-else class="swiper-container">
          <p class="mt-2 max-w-2xl text-sm text-gray-500"><em>showing friend request(s) sent...</em></p>
            <swiper
            :breakpoints="swiperOptions.breakpoints"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="defaultslide"
            >
                <swiper-slide
            v-for="(user,index) in users" 
            :key="user.id"
            class="opacity-0 animate-fade-in-down"
            :style="{ animationDelay: `${index * 0.1}s` }"
            >
            <div class="c-card block bg-gray-200 shadow-md hover:shadow-xl rounded-lg ">
            <div class="p-4">
                <div class="flex">
                
                <div class="mt-1 flex items-center">
                    
                    <div v-if="user.avatar">
                    <img
                        :src="config.urlink +user.avatar"
                        :alt="user.name"
                        class="rounded-lg object-cover"
                        style="width: 400px; height: 280px;"
                    />
                    </div>
                    <div v-else>
                    <span class="inline-block  object-cover overflow-hidden bg-gray-100">
                        <svg style="width: 350px; height: 180px;" class="object-cover text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </span>
                    </div>
                </div>
                </div>
            
                <div class="flex justify-between">
                    <h2 class="mt-2 mb-2 font-bold uppercase">
                        {{ user.name }}
                    </h2>
                    <p class="mt-2 mb-2 font-bold ">
                        {{ user.age }} yrs   
                    </p>
                </div>
                
            </div>
                
                <div class="rounded rounded-b:md-5 bg-connekta-main p-4 flex justify-center items-center text-sm">
                <h3 class="mr-3 inline-flex items-center px-4 py-2 bg-transparent text-white text-sm font-medium rounded-md">
                    Pending request
                </h3>
                <button @click="cancelRequest(user.uid, user.id)" class="inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    Delete
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
import PageComponent from '../../components/core/PageComponent.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import store from '../../store';
import moment from "moment";
import config from "../../config";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const router = useRouter();

let loading = ref(false);
let age = ref();

const swiperOptions = ({
    breakpoints: {
     // when window width is >= 320px
     320: {
      slidesPerView: 1,
      spaceBetween: 10
     },
     // when window width is >= 480px
     480: {
      slidesPerView: 1,
      spaceBetween: 10
     },
     // when window width is >= 640px
     640: {
      slidesPerView: 3,
      spaceBetween: 40
     }
    },
})


const users = computed(() => store.state.circles.circle.data.sent);

let ago = getAgo(users.created_at);
//console.log(users.created_at)
function getConnectedF() {
  loading.value = true;
  store.dispatch("circles/getConnectedFriends").then(()=> {
    loading.value = false;
  });
  
  };

function getAgo(dateago){
    const dateTimeAgo = moment(dateago).fromNow();
    return dateTimeAgo;
}
  
onMounted(() => {
   getConnectedF();
  // age.value = getAge(usef.dob);
});

 function cancelRequest(uid, id) {
  Swal.fire({
    title: "Cancel Request",
    text: "Do you want to continue",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No!",
    showCloseButton: true,
    //showLoaderOnConfirm: true
  }).then((result) => {
    if (result.value) {
        store.dispatch("circles/cancelFriendRequest", id ).then(() => {
          Swal.fire("Cancel Friend Request!", "Friend Request Cancelled", "success");
          getConnectedF();
          router.push({ name: "Circle" });
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