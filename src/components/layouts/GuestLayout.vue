<template>
  <div style="margin-top:60px;" class="bg-connekta-main text-gray-300 max-w-7xl mx-auto px-3 py-3">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- <router-link class="my-3 block" :to="{ name: 'Home' }"
          >Home<span class="text-gray-300 hover:text-white text-xs p-1"></span
        ></router-link> |
        <router-link class="my-3 block" :to="{ name: 'Login' }"
          >&nbsp;Login<span class="text-gray-300 hover:text-white text-xs p-1"></span
        ></router-link> |
        <router-link class="my-3 block" :to="{ name: 'Register' }"
          >&nbsp;Register<span class="text-gray-300 hover:text-white text-xs p-1"></span
        ></router-link> |
        <router-link class="my-3 block" :to="{ name: 'Terms' }"
          >&nbsp;Terms<span class="text-gray-300 hover:text-white text-xs p-1"></span
        ></router-link>|
        <router-link class="my-3 block" :to="{ name: 'Privacy' }"
          >&nbsp;Privacy Policy<span class="text-gray-300 hover:text-white text-xs p-1"></span
        ></router-link> -->
      </div>
    </div>
  </div>
  <div class="bg-gray-200">
    <div style="height: 100vh" class="">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
 import { useRouter } from "vue-router";
 import router from "../../router";

 

</script>
