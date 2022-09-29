<template>
  <header style="margin-top: 60px;" class="opacity-0 animate-fade-in-down hidden lg:block bg-lime-100 text-yellow-900 shadow">
    <div class="max-w-7xl mx-auto py-4 px-2 sm:px-6 lg:px-8">
      <h1 v-if="title" class="text-3xl font-bold text-gray-900">
        {{ title }}
      </h1>
      <slot name="header"></slot>
    </div>
  </header>
  <main style="margin-top: 60px;" class="opacity-0 animate-fade-in-down lg:hidden sm:block bg-lime-50 shadow">
    <div class="max-w-7xl py-6 sm:px-10 lg:px-5">
      <!-- Replace with your content -->
      <div class="px-4 sm:px-0">
        <slot></slot>
      </div>
      <!-- /End replace -->
    </div>
  </main>
  <main  class="opacity-0 animate-fade-in-down hidden lg:block bg-lime-50 shadow">
    <div class="max-w-7xl py-6 sm:px-10 lg:px-5">
      <!-- Replace with your content -->
      <div class="px-4 sm:px-0">
        <slot></slot>
      </div>
      <!-- /End replace -->
    </div>
  </main>
   
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style></style>
