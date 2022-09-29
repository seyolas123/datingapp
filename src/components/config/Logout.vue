<template>
    <!-- Toggle A -->
  <div class="opacity-0 animate-fade-in-down border border-connekta-main mt-3 px-3 py-4 w-full flex justify-center items-center  bg-gray-200 mt-3 text-gray-600 rounded rounded-lg relative text-sm text-center">   
        
            <div>
              
                <div>
                  <button @click="logout" type="submit" class="group relative w-full flex justify-center py-2 px-4  text-sm font-medium rounded-md text-white  bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
               
              Logout
              </button>
                   </div>
            </div>
       
  </div>
  
  
  
  </template>
  
  <script setup>
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";

  const store = useStore();
  const router = useRouter();

    function logout() {
      store.dispatch("auth/logout").then(() => {
        router.push({
          name: "Login",
        });
      });
    }
  </script>
  
  <style scoped>
  
  </style>
  