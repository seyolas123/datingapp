<template>
    <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div   class="max-w-md w-full space-y-8">
       <div >
        <img class="mx-auto h-12 w-auto" src="/logo/logo.png" alt="Connekta" />
            <h2 class="mt-3 text-center text-3xl font-extrabold text-black">Reset your password</h2>
            
          </div>
          <form    class="mt-3 space-y-6" @submit="reset">
            <div class="shadow-sm flex justify-items-between justify-center py-3 bg-red-500 text-white" v-if="errorMsg">
            {{ errorMsg }}
          <span
            @click="errorMsg = ''"
            class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
            
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                <label for="code" class="sr-only">New Password</label>
                <input 
                id="code" v-model="user.code" name="code" type="hidden" autocomplete="code" 
                required="" 
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-lime-900 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder="Code" readonly/>
              </div>

              <div>
                <label for="password" class="sr-only">New Password</label>
                <input 
                id="password" v-model="user.password" name="password" type="password" autocomplete="password" 
                required="" 
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-lime-900 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder="New Password" />
              </div>

              <div>
                <label for="cpassword" class="sr-only">Confirm New Password</label>
                <input 
                id="cpassword" v-model="user.cpassword" name="cpassword" type="password" autocomplete="cpassword" 
                required="" 
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-lime-900 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder="Confirm New Password" />
              </div>
              
            </div>
    
            <div>
              
               <div v-if="loading">
                 <button type="submit" 
                 class="group relative w-full flex justify-center py-2 px-4 border  font-medium text-white bg-gray-500  focus:outline-none">
                
               Loading...
              </button>
                </div>
                <div v-else>
                  <button type="submit" class="outline outline-white group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  hover:bg-connekta-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>
                </span>
                Submit
              </button>
                   </div>
            </div>
          </form>
        </div>
        </div>
    </template>
    
    <script setup>
    import { LockClosedIcon } from "@heroicons/vue/solid";
    
    import store from "../../store";
    import { useRouter, useRoute } from "vue-router";
    import { ref } from "vue";
    
    let loading = ref(false);
    
    const router = useRouter();

    const route = useRoute();
   
    const user = {
        code: route.params.code,
        password: '',
        cpassword: ''
    };
     
    let errorMsg = ref("");
    
    
    function reset(ev) {
      ev.preventDefault();
    
      loading.value = true;
      
      store.dispatch("auth/resetPassword", user)
        .then((res) => {
          loading.value = false;
          store.commit("notify", {
              type: "success",
              message: `Password Reset Succesfully`,
            });
          router.push({name:'Login'})
         })
        .catch((err) => {
          loading.value = false;
          errorMsg.value = err.response.data.error;
         
        });
    }
    </script>