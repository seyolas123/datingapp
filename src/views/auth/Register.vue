<template>
<div class=" flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
     <div>
        <img class="mx-auto h-12 w-auto" src="/logo/logo.png" alt="" />
        <h2 class="mt-4 text-center text-3xl font-extrabold text-black">Create an Account</h2>
        <p class="mt-2 text-center font-bold text-sm text-black">
          Or
          {{ ' ' }}
          <router-link :to="{ name: 'Login' }" class="font-medium text-white "> Sign in to your Account </router-link>
        </p>
      </div>
      <form class="mt-6 space-y-6" @submit="register">
        <div
        v-if="Object.keys(errors).length"
        class="flex-col items-stretch text-sm"
      >
        <div v-for="(field, i) of Object.keys(errors)" :key="i">
          <div v-for="(error, ind) of errors[field] || []" :key="ind">
            * {{ error }}
          </div>
        </div>
      </div>
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <p class="block px-2 py-2 text-sm font-medium text-gray-300"><em>Basic Information</em></p>
            <label for="name" class="sr-only">Name</label>
            <input id="name" v-model="user.name" name="name" type="name" autocomplete="name" required=""
             class="appearance-none rounded-none relative block w-full px-3 py-2 border border-lime-900 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="What is your Name?" />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" v-model="user.email" name="email" type="email" autocomplete="email" required=""
             class="appearance-none rounded-none relative block w-full px-3 py-2 border border-lime-900 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
            placeholder="Your Email Address" />
          </div>
          <div class="mb-3 flex mt-2 col-span-6 sm:col-span-3">
                 
                  <select v-model="user.gender" id="gender" name="gender" autocomplete="gender"
                  class="mt-1 block w-1/2 py-2 px-3 border border-lime-900 bg-white  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="">--Gender--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>

                  <select v-model="user.interested" id="interested" name="interested" autocomplete="interested-name" 
                  class="mt-1 block w-full py-2 px-3 border border-lime-900 bg-white rounded-b-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="">--interested in--</option>
                     <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="both">Both</option>
                  </select>
          </div>
          
          <p class="block px-2 py-2 text-sm font-medium text-gray-300"><em>Choose your username and password</em></p>
          <div>
            <label for="username" class="sr-only">Username</label>
            <input id="username" v-model="user.username" name="username" type="text" autocomplete="username" required=""
             class="appearance-none rounded-none relative block w-full px-3 py-2 border border-lime-900 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Choose a Username ?" />
          </div>
         
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" v-model="user.password" name="password" type="password" autocomplete="current-password" required="" 
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-lime-900 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
            placeholder="Choose a Password" />
          </div>
          <div>
            <label for="confirm_password" class="sr-only">Confirm Password</label>
            <input id="confirm_password" v-model="user.confirm_password" name="confirm_password" 
            type="password" autocomplete="confirm-password" required="" 
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-lime-900 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
            placeholder="Confirm Password" />
          </div>

          <p class="block px-2 py-2 text-sm font-medium text-gray-300"><em>Upload your Profile Picture</em></p>
          <div class="flex justify-between items-center">
            <button
                type="button"
                class="relative overflow-hidden  bg-white py-2 px-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <input
                  type="file"
                  @change="onProfilePhotoChoose"
                  class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer mt-1 block w-full py-2 px-2 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                Upload Profile Picture
              </button>

            <div v-show="user.avatar_url">
              <img
                :src="user.avatar_url"
                alt=""
                class="object-fill"
                  style="border-radius:50px; width: 40px; height: 40px;"
              />
            </div>
            
           </div>
        </div>
        <div>
          
           <div v-if="loading">
             <button type="submit" 
             class="group relative w-full flex justify-center py-2 px-4 border  font-medium text-white bg-gray-500  focus:outline-none">
            
           Loading...
          </button>
            </div>
            <div v-else>
              <button type="submit" class="bg-connekta-main hover:bg-connekta-main-light outline outline-white group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  hover:bg-connekta-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-white-500 group-hover:text-white-400" aria-hidden="true" />
            </span>
            Create Account
          </button>
               </div>
        </div>

        <p class="text-center">
            By creating an account, you agree to the <router-link class="text-gray-300 underline" :to="{ name: 'Terms' }">Terms of Use.</router-link>
            For more information about Connekta's privacy practices, 
            see the Connekta <router-link class="text-gray-300 underline" :to="{ name: 'Privacy' }">Privacy Policy</router-link>.
          </p>

      </form>
    </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { LockClosedIcon } from "@heroicons/vue/solid";
import store from "../../store";
import { useRouter } from "vue-router";
import { v4 as uuidv4 } from "uuid";

let loading = ref(false);

const router = useRouter();

const user = ref({
  name: "",
  email: "",
  gender: "",
  uid: uuidv4(),
  interested: "",
  username: "",
  password: "",
  confirm_password:"",
  avatar: null,
  avatar_url: null
});

const errors = ref({});

function onProfilePhotoChoose(ev) {
  const file = ev.target.files[0];

  const reader = new FileReader();
  reader.onloadend = () => {
    user.value.avatar = reader.result;
    user.value.avatar_url = reader.result;
  };

  reader.readAsDataURL(file);
}



function register(ev) {
  ev.preventDefault();
  loading.value = true;
  store
    .dispatch("auth/register", { ...user.value })
    .then((data) => {
      loading.value = false;
      //store.dispatch("auth/sendVerificationEmail")
      router.push({ name: 'Verify' })
    })
    .catch((error => {
      loading.value = false;
      if (error.response.status === 422) {
        
        errors.value = error.response.data.errors;
      }
    }));
}
</script>
