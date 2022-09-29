<template>
  <PageComponent>
    <template v-slot:header>
      <div class="px-2 py-2 sm:px-4">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Explore and Connect
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500"></p>
      </div>
    </template>

    <div style="margin-top:60px">
      <Users/>
    </div>

    <div class="hidden lg:block">
      <UserMatch/>
    </div>

   
  </PageComponent>
</template>

<script setup>
import Users from "../components/explore/Users.vue";
import UserMatch from "../components/explore/UserMatch.vue";


</script>

<style scoped>

</style>
