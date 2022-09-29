<template>
    
  <div style="margin-top:65px">
    <div v-if="loading" class="flex justify-center">
      Loading...
    </div>

    <div v-else class="">
       <!-- ====== Table Section Start -->
<section class="lg:mt-5 bg-gray-300 mx-auto px-5 py-6 lg:py-[20px]">
   <div class="lg:mt-5">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="max-w-full overflow-x-auto">
               <table class="table bordered  w-full">
                  <thead>
                     <tr class="bg-connekta-main text-center">
                        <th
                           class="
                           w-full
                           
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-l border-transparent
                           "
                           >
                           S/N
                        </th>
                        <th
                           class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                          Amount
                        </th>
                        <th
                           class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                          Connects
                        </th>
                        <th
                           class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                           >
                           Date Payed
                        </th>
                       
                     </tr>
                  </thead>
                  <tbody v-for="(data, index) in purchase_history" :key="data.id">

                     <tr v-if="purchase_history.length">
                        <td class="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                           >{{ index + 1 }}</td>
                        <td
                           class="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                           >
                           {{ data.amount }}
                        </td>
                        <td
                           class="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                           >
                           {{ data.connects }}
                          
                        </td>
                        <td
                           class="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                           >
                           {{ formatDate(data.date_payed ) }}
                        </td>
                      
                        
                        <td
                           class="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           "
                           >
                           
                        </td>
                     </tr>
                     <tr v-else>
                     <em>No purchase records yet</em>
                     </tr>
                    
                  </tbody>
                  
               </table>
            </div>
         </div>
      </div>
   </div>

</section>
<!-- ====== Table Section End -->
    </div>
 </div>
</template>

<script setup>

 import { computed } from "vue";   
 import {  useStore } from "vuex";
 import dayjs from "dayjs";

 const store = useStore();

 const purchase_history = computed(() => store.state.users.history.purchase);

 store.dispatch("users/getPurchaseHistory");

 function formatDate(dateString) {
  const date = dayjs(dateString);
  // Then specify how you want your dates to be formatted
  return date.format("dddd MMMM D, YYYY");
}

</script>

<style scoped>

</style>