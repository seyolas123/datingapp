<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    
  <div
    style="margin-top:70px;" class="sm:flex sm:block sm:justify-start lg:grid lg:grid-flow-col gap-5"
  >
    <div class="col-span-3">
      <div v-if="user_to_connect.loading" class="flex justify-center">
        Loading...
      </div>

      <div
        v-else
        class="container mb-5 bg-white shadow overflow-hidden sm:rounded-lg"
      >
      <div class="container mx-auto">
    <div class="w-full border rounded mb-5">
  
      <div>
        <div class="w-full">
          <div  class="relative flex items-center p-3 border-b border-gray-300" v-for="user in user_to_connect" :key="user.id">
            <img :src="config.urlink  +user.avatar" class="object-cover w-10 h-10 rounded-full"
               alt="" />
            <span class="block ml-2 font-bold text-gray-600">{{ user.username }}</span>
            <span v-show="user.is_online" class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
            </span>
          </div>
          <div style="height: 500px;" v-for="user in user_to_connect" :key="user.id" 
          class="relative bg-grey-700 w-full p-6 overflow-y-auto h-[30rem]" >
          
            <ul v-for="message in messages" :key="message.id" class="space-y-2">
              <li 
             
              >
                <div 
                :class="[
                message.user_id == user.id
                  ? 'self justify-start bg-gray-300 text-black'
                  : 'justify-end bg-green-500 text-white',
                  'flex w-full max-w-xl px-4 py-2 text-indigo rounded-md mb-3 shadow'
              ]"
               >
              
                  <span 
                 >
              {{ message.message }}</span>
              <span class="justify-end">
                  - <em>{{ formatDate(message.created_at) }}</em>
                </span>
                </div>
              </li>
            
            </ul>

          </div>

          <div class="flex items-center justify-between w-3/4 p-3 border-t border-gray-300">

              <form @submit.prevent="sendMessage">
                <input 
                hidden
                  type="text"
                  v-model="userForm.id"
                  />

              <div class="flex justify-center">
                <input 
                  v-model="userForm.message" type="text" placeholder="type message..."
                  style="width:40vh;"
                  autocomplete="off"
                  class="mt-1 mb-3 w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 name="message" required />

                  <button class="flex items-center" type="submit">
                  <svg class="w-7 h-7 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path
                      d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                       />
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
  </div>

</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import store from "../../store";
import { useRoute } from "vue-router";
import config from "../../config";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const route = useRoute();

const userForm = ref({
message: "",
id: route.params.id,
});


const user_to_connect = computed(() => store.state.users.currentUser.data);

let messages = computed(() => store.state.messages.message.data);


   
if (route.params.id) {
store.dispatch("users/getUserById", route.params.id);
store.dispatch("messages/getChat", route.params.id)
}

function refreshChat() {
store.dispatch("messages/getChat", route.params.id)
}

function formatDate(dateString) {
  const date = dayjs(dateString);
  return dayjs(date).fromNow()
}

function sendMessage() {
store.dispatch("messages/sendChat", { ...userForm.value })
     .then((response) => {
       store.dispatch("messages/getChat", route.params.id)
       userForm.value.message = '';
     })
}

onMounted(() => {
window.setInterval(() => {
  refreshChat()
}, 10000)
})

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

</style>
