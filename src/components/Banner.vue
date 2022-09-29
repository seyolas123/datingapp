<template>
  <p class="flex justify-center text-3xl font-bold mt-5">
    Search Available Users
  </p>
  <div
    class="mb-3 flex items-center justify-center pt-2 mx-auto text-gray-600"
  >
    <input
      class="w-1/2 border-2 border-yellow-900 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
      type="search"
      name="search"
      placeholder="Search"
    />
    <button type="submit" class="absolute right-0 top-0 mt-5 mr-4"></button>
  </div>

  <div
    class="animat opacity-0 animate-fade-in-down bg-yellow-800 flex justify-center items-center px-2 py-2 sm:px-4"
  >
    <img class="mt-5 bgstyle w-600" src="/hdimg.png" />
    <p class="mt-1 max-w-2xl text-sm text-white px-6 py-5">
      Hook and connect with connected friends.
    </p>
  </div>
</template>

<script setup>
import { computed, watch, ref, onMounted } from "vue";
</script>

<style scoped>
.bgstyle {
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
}

.animat {
  animation-delay: 0.2s;
}
</style>
