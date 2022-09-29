<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex justify-between">
        <div class="flex">
          <div class="px-2 py-4 sm:px-6">
            <button
          class="bg-connekta-main text-white px-2 py-2 rounded-r-lg"
          @click=""
          type="button"
        >
         Upload Fleek
        </button>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Search Fleeks
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500"></p>
          </div>
        </div>

        <div class="flex justify-center items-center"></div>
      </div>
    </template>

    <div style="margin-top:60px">
      <button
          class="mr-3 mt-4 bg-connekta-main text-white px-2 py-2 rounded-r-lg"
          type="button"
        >
        <router-link :to="{ name: 'uploadFleek' }">
          Upload Fleek
        </router-link>
        
        </button>
      <div
        class="p-5 mb-3 flex items-center justify-center pt-5 mx-auto text-gray-600"
      >
        <input
          class="w-full bg-white h-10 px-5 pr-22 rounded-l-lg text-sm focus:outline-none"
          v-model="query"
          @keyup="getResults"
          type="search"
          name="search"
          placeholder="Search fleeks"
        />

        <button
          class="bg-connekta-main text-white px-2 py-2 rounded-r-lg"
          @click="getResults"
          @keyup.enter="getResults"
          type="button"
        >
          Search
        </button>
      </div>

      <div class="grid sm:grid-cols-1 lg:grid-cols-4 gap-2 px-2 py-3">
        <div
          v-for="(vid, index) in fleeks"
          :key="vid.id"
          class="colspan-1 opacity-0 animate-fade-in-down bg-white rounded-md"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="max-w-sm rounded overflow-hidden">
            <video controls>
                    <source
                      :src="'https://apihookers.jotplusfashion.com/public/' + vid.video"
                      
                    />
                    Your browser does not support the video tag.
                  </video>

            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ vid.title }}</div>
              <p class="text-gray-700 text-base">
               {{ vid.caption }}
              </p>
            </div>
            <div class="px-4 pt-2 pb-2">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                <router-link
                    :to="{ name: 'UserView', params: { id: vid.user_uid } }"
                  >
                 posted by: {{ vid.username }}
                  </router-link>
                
                </span
              >
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  </PageComponent>
</template>

<script>
import config from "../config";

export default {
  data() {
    return {
      query: null,
      fleeks: [],
      links: []
    };
  },
  components: {},

  mounted() {
    this.getfleeks();
  },

  watch: {
    query(after, before) {
      this.getResults();
    },
  },
  methods: {
    getfleeks() {
      this.$store
        .dispatch("fleeks/getAllFleeks")
        .then((res) => (this.fleeks = res.data))
        .catch((error) => {});
    },

    getResults() {
      this.$store
        .dispatch("fleeks/searchFleeks", { params: { query: this.query } })
        .then((res) => (
          this.fleeks = res.data
          //this.links = res.links
          ))
        .catch((error) => {});
    },

    
  },

 
};
</script>

<style scoped></style>
