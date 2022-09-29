<template>

 <div class="opacity-0 animate-fade-in-down">
      <Users/>
      
      <OnlineList/>

    
      <UserMatch/>

   </div>    

</template>

<script setup>
import OnlineList from '../components/circle/OnlineList.vue';
import UserMatch from "../components/explore/UserMatch.vue";
import Users from "../components/explore/Users.vue";

</script>

<style scoped>

</style>