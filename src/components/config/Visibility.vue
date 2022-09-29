<template>
  <!-- Toggle A -->
  <div
    class="opacity-0 animate-fade-in-down w-full border border-connekta-main mx-auto flex items-start bg-gray-200 mt-3 text-gray-600 px-4 py-3 rounded rounded-lg relative text-sm"
  >
    <label for="toogleA" class="opacity-0 animate-fade-in-down flex items-start cursor-pointer">
      
        <div class="relative">
          <!-- input -->

          <input
            id="toogleA"
            type="checkbox"
            v-model="userForm.checked"
            v-on:click="updateStatus"
            class="sr-only"
          />
          <!-- line -->
          <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <!-- dot -->
          <div
            class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"
          ></div>
        </div>
     
      <!-- toggle -->

      <!-- label -->
      <div class="ml-3 text-gray-700 font-medium">Appear Online or Offline</div>
    </label>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const userForm = ref({
  checked: true,
});

const user = computed(() => store.state.users.user.data);

// if(user.is_online = 1){
//    userForm.value.checked = true
// }else {
//   userForm.value.checked = false
// }

function updateStatus() {
  if (userForm.value.checked) {
    console.log(userForm.value.checked);
    //store.dispatch("users/updateVisibility", { ...userForm.value })
  } else {

       }
}
 
onMounted(() => {
  store.dispatch("users/getUser");
  //notify("Hello user!");
});
</script>

<style scoped>
/* Toggle A */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}

</style>
