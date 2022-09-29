<template>
    <!-- Toggle A -->
  <div class="opacity-0 animate-fade-in-down border border-connekta-main mt-3 px-3 py-4 w-full flex justify-center items-center  bg-gray-200 mt-3 text-gray-600 rounded rounded-lg relative text-sm text-center">
    
    <form class="w-full mt-8 space-y-6" @submit="submitcode">
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
                <label for="code" class="sr-only">Reason for Account Deletion</label>
                <input 
                id="code"  name="email" type="code" autocomplete="code" 
                required="" 
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-lime-900 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder="Email Address" />
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
                  <button type="submit" class="group relative w-full flex justify-center py-2 px-4  text-sm font-medium rounded-md text-white  bg-connekta-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
               
               Change/Verify Email
              </button>
                   </div>
            </div>
          </form>
    
  </div>
  
  
  
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
      /* Toggle A */
  input:checked ~ .dot {
    transform: translateX(100%);
    background-color: #48bb78;
  }
  
  /* Toggle B */
  input:checked ~ .dot {
    transform: translateX(100%);
    background-color: #48bb78;
  }
  </style>
  