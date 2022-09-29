<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex justify-between">
        <div class="flex">
          <div class="px-2 py-4 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Page Title
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">page subtitle</p>
          </div>
        </div>

        <div class="flex justify-center items-center"></div>
      </div>
    </template>
  </PageComponent>
</template>

<script setup>
import PageComponent from "../components/core/PageComponent.vue";
</script>

<style scoped></style>
