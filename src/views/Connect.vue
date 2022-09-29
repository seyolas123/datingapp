<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <PageComponent>
      <template v-slot:header>

        <div class="flex justify-between">
           <div class="flex">
              <div class="px-2 py-4 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  <div v-for="user_c in user_to_connect" :key="user_c.id">
                    Connect with <span class="font-bold text-lime-900">{{ user_c.name }}({{ user_c.username }})</span>
                  </div>
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">{{ message }}</p>
              </div>
           </div>

           <div class="flex justify-center items-center" v-for="user_c in user_to_connect" :key="user_c.id">
         
              <button @click="sendFriendRequest(user_c.uid, user_c.username)" type="submit" class="group relative  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon class="h-5 w-5 text-white-500 group-hover:text-white-400" aria-hidden="true" />
                </span>
                Connect
              </button>
              
          </div>
        </div>

      </template>

     <div v-if="user_send_request.loading" class="flex justify-center">Loading...</div>

      <div v-else class="shadow overflow-hidden sm:rounded-lg">

        <div class="hidden lg:grid lg:grid-cols-3 lg:gap-3">
           <div v-for="user_c in user_to_connect" :key="user_c.id" class="sm:flex sm:inset-y-0 divide-x md:col-span-1">
             <div v-show="user_c.avatar">
                 <img
                    :src="config.urlink + user_c.avatar"
                    :alt="user_c.name"
                    class="rounded-lg object-contain"
                    style="width: 400px; height: 350px;"
                  />
                </div>
             
           </div>

           <div v-for="user_c in user_to_connect" :key="user_c.id" class="mt-5 md:mt-0 md:col-span-2">
             <h1 class="text-3xl font-bold divide-y divide-solid">{{ user_c.name }}({{ user_c.gender }}), {{ user_c.age }} yrs</h1>
             <hr class="font-extrabold">
             <p>About</p>
             {{ user_c.description }}
             <p class="mt-3">{{ user_c.hobbies }}</p>
             
           </div>

        </div>
 
        <div class="lg:hidden sm:flex mobile-view flex-cols">
        <div v-for="user_c in user_to_connect" :key="user_c.id" class="">
             <div v-show="user_c.avatar" class="" style="">
             
              <div class="grid grid-cols-2 gap-2">
                 <div class="col-span-1.5">
                  <CloudImageProvider v-bind:cloudImageConfig="cloudimageConfig">
                  
                  <img style="height:350px;" :src="config.urlink + user_c.avatar" :alt="user_c.name" />
                  </CloudImageProvider>
                 </div>

                 <div class="col-span-0.5">
                  <div style="height:350px" class="rounded-lg shadow-md bg-white divide-y divide-gray-100 ">
                    <div class="py-1">
                      <p class="px-2 py-4 flex items-center justify-center">
                      <h1 class="text-black text-xl font-bold divide-y divide-solid">{{ user_c.name }}({{ user_c.age }})</h1>
                      </p>
                    </div>
           
                  <div class="py-1">
                    <div class="px-3 py-4">
                        <p class="text-2xl font-bold text-black">About</p>
                      {{ user_c.description }}
                      </div>
                      
                    </div>
          

                  <div class="py-1">
                    <div class="px-3 py-4">
                        <p class="text-2xl font-bold text-black">About</p>
                      {{ user_c.description }}
                      </div>
                      
                    </div>
                  
                  </div>
                 </div>
              </div>
                  
                </div>
          
           
              
        </div>
      </div>
       
      </div>
  </PageComponent>
</template>

<script setup>
import Img, { CloudImageProvider } from 'vue-cloudimage-responsive-plain';
import { computed, ref, watch, onMounted } from "vue";
import PageComponent from '../components/core/PageComponent.vue';
import { PaperClipIcon } from '@heroicons/vue/solid'
import store from "../store";
import { useRouter, useRoute } from "vue-router";
import config from "../config.js";

const user_send_requestForm = ref({
   name: '',
   area_id: '',
   dob: '',
   phone: '',
   description: '',
   gender_interested: '',
   avatar: null,
   avatar_url:null

});

const cloudimageConfig = {
  token: 'demo',
  baseURL: 'https://cdn.scaleflex.it/'
};

const user_to_connect = computed(() => store.state.users.currentUser.data);
const user_send_request = computed(() => store.state.users.user.data);

store.dispatch("users/getUser");

let send_friend_connects = 100;

let message = ref(`You need ${send_friend_connects} connects(c) to connect`);

const router = useRouter();

const route = useRoute();

if (route.params.id) {
  store.dispatch("users/getUserByUid", route.params.id);
}

 function sendFriendRequest(uid, name) {
  
    if(
        confirm(`Are you sure you want to send this request, can't be undone, It will cost ${send_friend_connects}c`)
    )
    if (store.dispatch("circles/checkFriendRequest", uid )) {
       store.commit("notify", {
              type: "failure",
              message: `You already have a pending connection with ${name}`,
            });
    }else {
      store.dispatch('circles/sendRequest', { uid, name })
         .then(() => {
          store.dispatch('notifications/sendNotification', uid)
          store.commit("notify", {
                type: "success",
                message: "Friend Request sent succesfully",
              });
            router.push({ name: 'Circle' })
         })
         .catch((error) => {
          if (error.response.status === 422) {
            error.value = error.response.data.error;
            //console.log(error.value);
            store.commit("notify", {
              type: "failure",
              message: `${error.value}`,
            });
          }
        });
    }
}

store.dispatch('notifications/getNotifications')


</script>