<template>
    <PageComponent>
    
      <template v-slot:header>
       <div class="px-2 py-2 sm:px-4">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Upload your Fleek</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">video must not be more than 10mb</p>
        </div>
      </template>
     
     <div class="mx-auto sm:w-full">
        <form
        @submit.prevent="uploadFleek"
        enctype="multipart/form-data"
      >
        <div class="border-t-md py-2 px-3 border-gray-200">
          <p class="py-2 px-3"><em>Update Fleek- video not less than 10mb</em></p>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Title</dt>
            <input
              class="mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              v-model="userForm.title"
              type="text"
            />
          </div>

          <dl>
            <div
              class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Video(mp4)</dt>
              <div v-if="userForm.video_url">
                       <video width="80" height="50" controls>
            <source :src="config.urlink + userForm.video_url" type="video/mp4">
            Your browser does not support the video tag.
          </video>
                    </div>
              <button
                type="button"
                class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <input
                  type="file"
                  @change="onVideoChoose"
                  class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer mt-1 block w-full py-2 px-3 border border-lime-900 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                Select
              </button>
            </div>
          </dl>
        </div>

        <div v-if="loading">
             <button type="button" 
             class="group relative w-full flex justify-center py-2 px-4 border border-transparent 
          text-sm font-medium rounded-md text-white bg-connekta-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
           >Saving...
          </button>
        </div>

         <div v-else>
        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent 
          text-sm font-medium rounded-md text-white bg-connekta-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Save Fleek
        </button>
        </div>
      </form>
     </div>
      
     
    </PageComponent>
</template>

<script setup>
import { ref } from "vue";
import PageComponent from '../../components/core/PageComponent.vue';
import store from '../../store';
import config from "../../config";
import Swal from "sweetalert2";

let loading = ref(false);

const userForm = ref({
  title: "",
  video: "",
  video_url: ""
});


function onVideoChoose(ev) {
  const file = ev.target.files[0];

  const reader = new FileReader();
  reader.onloadend = () => {
    userForm.value.video = reader.result;
    userForm.value.video_url = reader.result;
  };

  reader.readAsDataURL(file);
}
  
function uploadFleek() {
  loading.value = true;

  store
    .dispatch("fleeks/postFleek", { ...userForm.value })
    .then((res) => {
      loading.value = false;
      Swal.fire("Fleek Uploaded!", "Fleek Upload Successful", "success");
      store.dispatch("notifications/notifyFleekUpload");
      store.dispatch("fleeks/getAllFleeks");
      router.push({ name: "Fleeks" });
    })
    .catch((error) => {
      loading.value = false;
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    });
}



</script>

<style scoped>
  
</style>