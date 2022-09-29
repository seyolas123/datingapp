<template>
 
<div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="mt-5 max-w-md w-full space-y-8">
   <div>
    <img style="" class="mx-auto h-12 w-auto" src="/logo/logo.png" alt="Connekta" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-black">Sign in to your account</h2>
        <p class="mt-2 text-center text-sm font-bold text-black">
          Or
          {{ ' ' }}
          <router-link :to="{ name: 'Register' }" class="font-medium text-connekta-white "> Create an Account</router-link>
        </p>
        
      </div>
      <form class="mt-6 space-y-6" @submit="login">
        <div class="shadow-sm flex justify-items-between justify-center py-3 bg-red-500 text-white" v-if="errorMsg">
        {{ errorMsg }}
      <span
        @click="errorMsg = ''"
        class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </div>
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input 
            id="email-address" v-model="user.email" name="email" type="email" autocomplete="email" 
            required="" 
            class="mb-3 appearance-none rounded-none relative block w-full px-4 py-3 border border-lime-900 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-md" 
            placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" v-model="user.password" name="password" type="password"
             autocomplete="current-password" required="" 
             class="appearance-none rounded-none relative block w-full px-4 py-3 border border-lime-900 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-md" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" v-model="user.remember" name="remember-me" type="checkbox" class="h-4 w-4 text-connekta-main focus:ring-connekta-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-connekta-white"> Remember me </label>
          </div>
          <p class="mt-2 text-center text-sm text-connekta-black">
         
          {{ ' ' }}
          <router-link :to="{ name: 'ForgotPassword' }" class="font-medium text-connekta-white "> Forgot Password?</router-link>
        
        </p>
         
        </div>

        <div>
          
           <div v-if="loading">
             <button type="button" 
             class="group relative w-full flex justify-center py-2 px-4 border  font-medium text-white bg-gray-500  focus:outline-none">
            
           Loading...
          </button>
            </div>
            <div v-else>
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md outline outline-white text-white  hover:bg-connekta-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>

            </span>
            Sign In
          </button>
    
               </div>
        </div>

        <p class="text-center">
            <router-link class="text-gray-300 underline" :to="{ name: 'Terms' }">Terms of Use.</router-link>
            
            <span style="height: 50px;" class="font-bolder text-gray-100">&nbsp;|&nbsp;</span>
            <router-link class="text-gray-300 underline" :to="{ name: 'Privacy' }">Privacy Policy</router-link>.
          </p>

      </form>
    </div>
    </div>
   
</template>

<script setup>

import store from "../../store";
import { useRouter } from "vue-router";
import { ref } from "vue";

let loading = ref(false);

const router = useRouter();

const user = {
  email: "",
  password: "",
  remember: false
};

let errorMsg = ref("");


function login(ev) {
  ev.preventDefault();

  loading.value = true;

 store.dispatch("auth/login", user)
    .then((res) => {
      loading.value = false;
      if(res.is_admin) {
        router.push({
        name: "Dashboard",
      });
      } else {
      router.push({
        name: "Home",
      }); }
     })
    .catch((err) => {
      loading.value = false;
       errorMsg.value = err.response.data.error;
     
    });
}
</script>