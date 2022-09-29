<template>
 
    <div style="margin-top:60px">
   
    <div v-if="loading" class="flex justify-center">
      Loading...
    </div>

    <div v-else class="">
      <p class="mt-2 max-w-2xl text-sm text-gray-500"><em>showing your hookup history</em></p>
       <!-- ====== Table Section Start -->
   <section class="rounded-lg w-full inset-y-0 left-0 bg-white py-3 lg:py-[20px]">
   <div class="container">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="max-w-full overflow-x-auto">
               <table class="table-auto w-full">
                  <thead>
                     <tr class="bg-connekta-main text-center">
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
                           border-l
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
                           border-l
                           "
                           >
                          Hooker
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
                           border-l 
                           "
                           >
                          Hookie
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
                           border-l
                           "
                           >
                          Date Updated
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
                           border-l
                           "
                           >
                           Status
                        </th>
                       
                     </tr>
                  </thead>
                  <tbody v-for="(data, index) in hooks" :key="data.id">

                     <tr>
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
                           {{ data.sender_username }}
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
                           {{ data.receiver_username }}
                          
                        </td>
                        <td
                           class="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b 
                           "
                           >
                           {{ formatDate(data.date_updated_at ) }}
                          
                        </td>
                        <td
                           class="
                           text-center text-white
                           font-medium
                           
                           py-5
                           px-2
                           bg-[#013220]
                           border-b 
                           "
                           >
                          Completed
                        </td>
                      
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
import { computed, ref, onMounted } from "vue";
import dayjs from "dayjs";

import store from "../../store";

let loading = ref("false");


const hooks = computed(() => store.state.hookers.history.data.completedHooks);


function getHookHistory() {
  loading.value = true;
  store.dispatch("hookers/getHistory").then(() => {
    loading.value = false;
  });
}

function formatDate(dateString) {
  const date = dayjs(dateString);
  // Then specify how you want your dates to be formatted
  return date.format("dddd MMMM D, YYYY");
}

onMounted(() => {
  getHookHistory();
 
});

</script>

<style scoped>
</style>
