<!-- This example requires Tailwind CSS v2.0+ -->
<template>
      <div style="margin-top:60px">
       <div v-if="user_send_request.loading" class="flex justify-center">Loading...</div>
  
        <div v-else class="container shadow">

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

   <div v-for="user_c in user_to_connect" :key="user_c.id" class="mt-3">
               <div v-show="user_c.avatar" class="" style="">
               
                <div class="grid grid-cols-1 gap-2">
                
                    <div class="col-span-0.5">
                    <div  class="rounded-lg shadow-md bg-gray-200 divide-y divide-gray-100 ">
                      <div class="py-1">
                        <p class="px-2 py-4 flex items-center justify-center">
                        <h1 class="text-black text-xl font-bold divide-y divide-solid">{{ user_c.name }}({{ user_c.age }})</h1>
                        </p>
                      </div>
             
                    <div class="py-1">
                      <div class="bg-connekta-main text-white px-3 py-4">
                         
                        {{ user_c.description }}
                        </div>
                        
                      </div>
            
  
                    <div v-if="user_c.occupation" class="py-1">
                      <div class="flex items-center justify-between px-3 py-4">
                          <p class="flex items-center font-bold">
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
</svg>

                          </span>&nbsp;Work</p>
                          <p class="flex items-center">{{ user_c.occupation }}</p>
                        </div>
                        
                      </div>

                      <div v-if="user_c.belief" class="py-1">
                      <div class="flex items-center justify-between px-3 py-4">
                          <p class="flex items-center font-bold">
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
</svg>

                          </span>&nbsp;Belief</p>
                          <p class="flex items-center">{{ user_c.belief }}</p>
                        </div>
                        
                      </div>

                      <div  v-if="tribe" class="py-1">
                      <div class="flex items-center justify-between px-3 py-4">
                          <p class="flex items-center font-bold">
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
</svg>

                          </span>&nbsp;Tribe</p>
                          <p class="flex items-center">{{ user_c.tribe }}</p>
                        </div>
                        
                      </div>

                      <div v-if="user_c.hobbies" class="py-1">
                      <div class="flex items-center justify-between px-3 py-4">
                          
                          <p class="flex items-center">{{ user_c.hobbies }}</p>
                        </div>
                        
                      </div>


                      <div v-if="user_c.city" lass="py-1">
                      <div class="flex items-center justify-between px-3 py-4">
                          <p class="flex items-center font-bold">
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
</svg>

                          </span>&nbsp;Lives in</p>
                          <p class="flex items-center">{{ user_c.city }}</p>
                        </div>
                        
                      </div>

                      <div class="py-1">
                      <div class="flex items-center justify-between px-3 py-4">
                          <p class="flex items-center font-bold">
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
</svg>

                          </span>&nbsp;Interested in</p>
                          <p class="flex items-center">{{ user_c.gender_interested }}</p>
                        </div>
                        
                      </div>
                    
                    </div>
                   </div>

                   <div class="grid grid-cols-2 gap-2 px-2 py-3">       
      <div  
      v-for="(vid, index) in fleeks"
                :key="vid.id"
                class="colspan-1 opacity-0 animate-fade-in-down bg-white rounded-md "
      :style="{ animationDelay: `${index * 0.1}s` }">
      

        <div class="max-w-sm rounded overflow-hidden ">
          <video controls>
               
               <source
                   :src="'http://localhost:8000/' + vid.video"
                   type="video/mp4"
               />
          Your browser does not support the video tag.
        </video>
          
        </div>
          
                   </div>
  
                </div>
                    
                  </div>
            
             </div>
                
          </div>
            
            <carousel v-if="pictures.length" :items-to-show="1.5">
                <slide v-for="(pix, index) in pictures"
                        :key="pix.id"
                        :style="{ animationDelay: `${index * 0.1}s` }">
                    <div  class="carousel__item">
                        <CloudImageProvider v-bind:cloudImageConfig="cloudimageConfig">
                            
                            <img class="mx-auto rounded-lg shadow-lg" style="height:350px;" 
                            :src="config.urlink + pix.image " alt="" />
                            </CloudImageProvider>
                    </div>
                    
                </slide>

                <template #addons>
                    <navigation/>
                    <pagination />
                </template>
	          </carousel>
          
   </div>       
         
        </div>
  
  </template>
  
  <script setup>
  import Img, { CloudImageProvider } from 'vue-cloudimage-responsive-plain';
  import { computed, ref, watch, onMounted } from "vue";
  import PageComponent from '../../components/core/PageComponent.vue';
  import store from "../../store";
  import { useRouter, useRoute } from "vue-router";
  import config from "../../config.js";
  

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
  
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

  const settings = {
		itemsToShow: 1,
		snapAlign: "center"
	}
			
	const breakpoints = {
				
				700: {
					itemsToShow: 3.5,
					snapAlign: "center"
				},
				
				1024: {
					itemsToShow: 5,
					snapAlign: "start"
				}
			}
		
  
  const cloudimageConfig = {
    token: 'demo',
    baseURL: 'https://cdn.scaleflex.it/'
  };
  
  const user_to_connect = computed(() => store.state.users.currentUser.data);
  const user_send_request = computed(() => store.state.users.user.data);
  const pictures = computed(() => store.state.gallery.gallery.data);
  const fleeks = computed(()=> store.state.fleeks.userFleek.data);

  store.dispatch("users/getUser");

  
  let send_friend_connects = 100;
  
  let message = ref(`You need ${send_friend_connects} connects(c) to connect`);
  
  const router = useRouter();
  
  const route = useRoute();
  
  if (route.params.id) {
    store.dispatch("users/getUserByUid", route.params.id);
    store.dispatch('gallery/getAllPics', route.params.id);
    store.dispatch('fleeks/getUserFleek', route.params.id)
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
  <style scoped>
    
    .carousel__item {
	min-height: 200px;
	width: 100%;
	background-color: #e3e3e3;
	color: white;
	font-size: 20px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.carousel__slide {
	padding: 10px;
}

.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
}


  </style>