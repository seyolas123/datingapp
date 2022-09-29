<template>
<div class="container mx-auto bg-lime-300">
  <div>
      <router-link :to="{ name: 'Home' }" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        
        <div class="p-4">
          <span class="inline-block px-2 py-1 leading-none bg-lime-200 text-white-500 rounded-full font-semibold uppercase tracking-wide text-xs">
           {{ user.name }}</span>
          <h2 class="mt-2 mb-2  font-bold">
            {{ user.email }}
          </h2>
          <p class="text-sm">
           {{ user.phone }}
           </p>
          
        </div>
        <div class="p-4 border-t border-b text-xs text-gray-700">
          <span class="flex items-center mb-1">
           
          </span>
          <span class="flex items-center">
            <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>
            <p class="strong text-2xl"></p>
          </span>        
        </div>
        <div class="bg-lime-900 p-4 flex items-center text-sm">

          </div>
        
      </router-link>
      </div>
</div>
   

</template>

<script setup>


 const { user } = defineProps({
  user: Object,
});
</script>

<style>
</style>