<template>
    <div>
      <PageComponent>
        <template v-slot:header>
          <div class="px-2 py-4 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Email Verification Success
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              Redirecting you to login page...
            </p>
          </div>
        </template>
  
     
  
        <div class="container flex justify-center max-w-sm w-full lg:max-w-full lg:flex">
          
          <div
            class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          >
            <div class="mb-8">
              <p class="text-sm text-gray-600 flex items-center">
                <svg
                  class="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  />
                </svg>
                
              </p>
              <div class="text-gray-900 font-bold text-xl mb-2">
              
              </div>
              <p class="text-gray-700 text-base">
                  or click here to login
              </p>
            </div>
            <router-link :to="{name: 'Login'}" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-900 hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon class="h-5 w-5 text-white-500 group-hover:text-white-400" aria-hidden="true" />
              </span>
              Login
            </router-link>
          </div>
        </div>
      </PageComponent>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import router from "../../../router";
  import PageComponent from "../../../components/core/PageComponent.vue";

  onMounted(() => {
  window.setInterval(() => {
    router.push({ name: 'Login' });
  }, 5000)
})
  </script>
  
  <style scoped></style>
  