<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex justify-between">
        <div class="flex">
          <div class="px-2 py-4 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              <div v-for="user_c in user_to_connect" :key="user_c.id">
                Hook with
                <span class="font-bold text-lime-900"
                  >{{ user_c.name }}({{ user_c.username }})</span
                >
              </div>
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">{{ message }}</p>
          </div>
        </div>

        <div
          v-for="user_c in user_to_connect"
          :key="user_c.id"
          class="flex justify-center items-center"
        >
          <button
            @click="sendHook(user_c.uid, user_c.username)"
            type="button"
            class="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-white-500 group-hover:text-white-400"
                aria-hidden="true"
              />
            </span>
            Hook
          </button>
        </div>
      </div>
    </template>

    <div
      class="sm:flex sm:block sm:justify-start lg:grid lg:grid-flow-col gap-5"
    >
      <div class="col-span-3">
        <div v-if="user_send_request.loading" class="flex justify-center">
          Loading...
        </div>

        <div
          v-else
          class="container mb-5 bg-white shadow overflow-hidden sm:rounded-lg"
        >
          <div class="flex flex-1 flex-col lg:items-start">
            <div
              v-for="user_c in user_to_connect"
              :key="user_c.id"
              class="flex divide-x md:col-span-1"
            >
              <div v-show="user_c.avatar">
                <img
                  :src="config.urlink + user_c.avatar"
                  :alt="user_c.name"
                  class="rounded-lg object-cover"
                  style="width: 400px; height: 280px"
                />
              </div>
            </div>

            <div v-for="user_c in user_to_connect" :key="user_c.id" class="">
              <h1 class="text-3xl font-extrabold divide-y divide-solid">
                {{ user_c.name }}
              </h1>
              <hr class="font-extrabold" />
              <p>
                <span class="font-extrabold">Sex: </span
                ><span class="text-lime-900">{{ user_c.gender }}</span>
              </p>
              <p>
                <span class="font-extrabold">Username: </span
                ><span class="text-lime-900">{{ user_c.username }}</span>
              </p>
              <p>
                <span class="font-extrabold">Quote: </span
                ><span class="text-lime-900">{{ user_c.description }}</span>
              </p>
              <p>
                <span class="font-extrabold">Hobbies: </span
                ><span class="text-lime-900">{{ user_c.hobby }}</span>
              </p>
              <p>
                <span class="font-extrabold">Interested in: </span
                ><span class="text-lime-900">{{
                  user_c.gender_interested
                }}</span>
              </p>

              <br />
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <div
          class="flex justify-center container mx-auto sm:flex sm lg:grid lg:grid-cols-5 lg:gap-6"
        >
          <div v-for="pic in user_pics" :key="pic.id" class="w-full rounded-md">
            <a class="spotlight" :href="'http://localhost:8000/' + pic.image">
              <img :src="'http://localhost:8000/' + pic.image" />
            </a>
          </div>
        </div>

        <div class="container mt-5 mb-5">
          <div
            v-for="fleeks in user_fleeks"
            :key="fleeks.id"
            class="grid grid-cols-5 gap-6"
          >
            <div class="w-300 h-300 mr-3 mb-5">
              <video width="300" height="300" controls>
                <source
                  :src="'http://localhost:8000/' + fleeks.video"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-3">

        <div class="container mx-auto">
      <div class="max-w-2xl border rounded">
    
        <div>
          <div class="w-full">
            <div class="relative flex items-center p-3 border-b border-gray-300" v-for="user in user_to_connect" :key="user.id">
              <img :src="config.urlink  +user.avatar" class="object-cover w-10 h-10 rounded-full"
                 alt="" />
              <span class="block ml-2 font-bold text-gray-600">{{ user.username }}</span>
              <span v-show="user.is_online" class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
              </span>
            </div>
            <div v-for="user in user_to_connect" :key="user.id" class="relative bg-grey-700 w-full p-6 overflow-y-auto h-[40rem]" >
            
              <ul v-for="message in messages" :key="message.id" class="space-y-2">
                <li 
               
                >
                  <div 
                  :class="[
                  message.user_id === user.id
                    ? 'self'
                    : 'justify-end bg-green-500 text-white',
                    'flex w-full max-w-xl px-4 py-2 text-indigo rounded-md mb-3 shadow'
                ]"
                 >
                
                    <span 
                   >
                {{ message.message }}</span>
                  </div>
                </li>
              
              </ul>

            </div>

            <div class="flex items-center justify-between w-full p-3 border-t border-gray-300">

              
                <form @submit.prevent="sendMessage">
                  <input 
                  hidden
                    type="text"
                    v-model="userForm.id"
                    />

<div class="flex justify-center" >
                    <input 
                    v-on:ready="childReady = true"
                    v-model="userForm.message" type="text" placeholder="Message"
                    class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                    ref="field" name="message" required />

                    <button type="submit">
                <svg class="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
                 </div>
                </form>
              
              
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
import { computed, ref, onMounted, watch } from "vue";
import PageComponent from "../components/core/PageComponent.vue";
import store from "../store";
import { useRouter, useRoute } from "vue-router";
import Echo from "laravel-echo";
import config from "../config.js";

function refreshChat() {
  store.dispatch("messages/getChat", route.params.uid)
}

onMounted(() => {
  window.setInterval(() => {
    this.refreshChat()
  }, 30000)
})

const router = useRouter();

const route = useRoute();

const messageQueue = [];

const userForm = ref({
  message: "",
  id: route.params.uid
});

let messag = ref({});


const user_to_connect = computed(() => store.state.users.currentUser.data);
const user_send_request = computed(() => store.state.users.user.data);
const user_pics = computed(() => store.state.gallery.gallery.data);
const user_fleeks = computed(() => store.state.fleeks.userFleek.data);

const messages = computed(() => store.state.messages.message.data);


watch(
  () => store.state.users.user.data,
  (newVal, oldVal) => {
    // userFormd.value = {
    //   ...JSON.parse(JSON.stringify(newVal)),
    //   status: !!newVal.status,
    // };
    
  }
);

store.dispatch("users/getUser");
store.dispatch("messages/getChat", route.params.uid)
     

if (route.params.id) {
  store.dispatch("users/getUserByUid", route.params.id);
  store.dispatch("gallery/getAllPics", route.params.id);
  store.dispatch("fleeks/getUserFleek", route.params.id);
}

let childReady = false;

function isValid(number){
      return mySwitch(number)
  }

  function  mySwitch(number){
    // Prevents the normal switch code from running until the child component mounts.
    if(!this.childReady) {
      return false;
    }
    let v = false
    switch(number){
      case '1':
      //v = this.$refs.MyReference.$refs.MyTagForm.validate()
      break
    }
    return v
  }

function sendMessage() {
  store.dispatch("messages/sendChat", { ...userForm.value })
       .then((response) => {
        //this.$refs.field.reset();
        //this.userForm.message.value = '';
         store.dispatch("messages/getChat", route.params.uid)
        //messageQueue.push({ userForm.message, userForm.user })
        //this.messages.unshift(message);
        // message.push({
        //             message: response.data.message.message,
        //             user: response.data.user
        // });
       })
}

let hook_connects = 70;

let message = ref(`You need ${hook_connects} connects(c) to hook`);

function sendHook(uid, name) {
  if (
    confirm(
      `Are you sure you want to send this request, can't be undone, It will cost ${hook_connects}c`
    )
  )
    store
      .dispatch("hookers/checkHookRequest", uid)
      .then(() => {
        store
          .dispatch("hookers/sendHookRequest", { uid, name })
          .then(() => {
            store.commit("notify", {
              type: "success",
              message: "Hook Request sent succesfully",
            });
            router.push({ name: "Hook", params: { id: uid } });
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
      })
      .catch((error) => {
        store.commit("notify", {
          type: "failure",
          message: "You both have an ongoing hookup",
        });
      });
}
</script>

<style scoped>
.form {
  padding: 8px;
}
.form-input {
  width: 100%;
  border: 1px solid #d3e0e9;
  padding: 5px 10px;
  outline: none;
}
.notice {
  color: #aaa;
}

.user {
        font-weight: 800;
    }
    .body {
        margin-bottom: 0;
        white-space: pre-wrap;
    }
    .message {
        border-bottom: 1px solid #000000
    }
    .self {
        display: flex justify-start;
        
        
    }

    .message-area {
        height: 150px;
        max-height: 150px;
        overflow-y: scroll;
        padding: 5px;
        border-bottom: 1px solid #eee;
    }
</style>
