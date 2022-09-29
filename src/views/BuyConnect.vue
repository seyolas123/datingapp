<template>
     <div style="margin-top:60px;"></div>
      <div class="lg:mt-5 container">
          <div class="lg:mt-5 px-2 py-4 sm:px-6">
                <h3 class="lg:mt-3 text-sm text-bold leading-6 font-medium text-gray-900">Buy Connects</h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">1CONNECT = 1NAIRA</p>
          </div>
     
        <form class="lg:mt-5" @submit.prevent="submitAmt">
          <div
            class="lg:w-1/2 lg:mx-auto rounded-lg bg-gray-200 px-4 py-5 mb-5"
          >
            <dt class="text-sm font-medium text-gray-500">Amount in Naira</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <input
                class="w-full lg:w-full mt-1 block py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                v-model="payment_details.amount"
                type="number" required
              />
            </dd>
            <button class="flex items-center mt-2 bg-blue-700 text-white px-2 py-3 rounded-lg" type="submit">
            <span class="text-white"><img class="w-8 h-8 " src="/plogo.png"/></span> Pay with Paystack</button>
          </div>
          
         </form>
            

        </div>
       
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const payment_details = ({
   amount: null,
   //email: user.email,
   //fullname: ''
});



function submitAmt() {
  router.push({ name: 'Paystack', params: { id: payment_details.amount }})
}


</script>

<style scoped>

</style>