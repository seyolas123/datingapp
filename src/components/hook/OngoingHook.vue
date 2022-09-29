<template>

<div style="margin-top:60px">
    <div v-if="loading" class="flex justify-center">
      Loading...
    </div>

    <div v-else class="">
       <!-- ====== Table Section Start -->
<section class="bg-white py-10 lg:py-[20px]">
   <div class="container">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="max-w-full overflow-x-auto">
               <table class="table-auto  w-full">
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
                           "
                           >
                          Date 
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
                           Status
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
                           border-r border-transparent
                           "
                           >
                           Action
                        </th>
                     </tr>
                  </thead>
                  <tbody class="" v-for="(data, index) in pending" :key="data.id">

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
                           bg-white
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
                           {{ formatDate(data.date_created_at ) }}
                          
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
                          Ongoing
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
                           <button
                              @click="completeTheHook(data.sender_uid, data.receiver_uid)"
                              type="button"
                              class="
                              border border-primary
                              py-2
                              px-6
                              text-primary
                              inline-block
                              rounded
                              hover:bg-primary hover:text-white
                              "
                              >
                           Complete
                           </button>
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
import Swal from "sweetalert2";

let loading = ref("false");

const pending = computed(() => store.state.hookers.history.data.ongoingHooks);


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

function completeTheHook(suid,ruid) {
   Swal.fire({
    background: '#e3e3e3',
    title: "",
    text: "Are you sure you want to complete this hookup",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No!",
    showCloseButton: true,
    confirmButtonColor: '#955989',
    //showLoaderOnConfirm: true
  }).then((result) => {
    if (result.value) {
      
          store
            .dispatch("hookers/completeHook", { suid, ruid})
            .then(() => {
              Swal.fire("Hook Complete!", "Hookup Successful", "success");
              store.dispatch("hookers/getHistory")
              router.push({ name: "OngoingHook" });
            })
            .catch(() => {
              
            });
        
    }
  });


}

</script>

<style scoped>
</style>
