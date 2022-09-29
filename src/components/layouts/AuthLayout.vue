<template>
    
    <div class=" bg-connekta-main grid lg:grid-cols-2 sm:grid-cols-1 no-gap">
       
      <div
         style="height: 100vh" class="hidden lg:block animat opacity-0 relative animate-fade-in-down flex justify-center items-center px-2 py-2 sm:px-4"
      >
        <img class="bgstyle w-600 h-full" src="/bgconnekta.png" />
        
      </div>

       <div style="height:100vh" class="bg-connekta-main-light mt-5">
        <router-view></router-view>
       </div>
       <Notification />
    </div>
</template>

<script setup>

import Notification from "../../components/core/Notification.vue";


</script>
