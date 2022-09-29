<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex justify-between">
        <div class="flex">
          <div class="px-2 py-4 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Search User
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500"></p>
          </div>
        </div>

        <div class="flex justify-center items-center"></div>
      </div>
    </template>

    <div style="margin-top:60px;">
     
      <div
        class="p-5 mb-3 flex items-center justify-center pt-5 mx-auto text-gray-600"
      >
        <input
          class="w-full bg-white h-10 px-5 pr-22 rounded-l-lg text-sm focus:outline-none"
          v-model="query"
          @keyup="getResults"
          type="search"
          name="search"
          placeholder="Search username, name or location"
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

      <div class="grid grid-cols-2 gap-2 px-2 py-3">
      <div  
      v-for="(user, index) in users" 
      :key="user.id"
      class="colspan-1 opacity-0 animate-fade-in-down bg-white rounded-md "
      :style="{ animationDelay: `${index * 0.1}s` }">

        <div class="max-w-sm rounded overflow-hidden ">
         <router-link :to="{name: 'UserView', params: { id: user.uid }}">
          <img
            class="w-full h-full"
            :src="'https://apihookers.jotplusfashion.com/public/' + user.avatar"
            :alt="user.username"
          />
         </router-link>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ user.name }}</div>
            <p class="text-gray-700 text-base">
              {{ user.description }}
             
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ user.username }}({{ user.age }}yrs)</span
            >
            
          </div>
        </div>
      </div>
    </div>


    </div>
  </PageComponent>
</template>

<script>
import config from '../../config';

  export default {
      data() {
          return {
              query: null,
              users: []
          };
      },
      components: {
         
      },

      mounted() {
        this.getUsers();
      },

      watch: {
          query(after, before) {
              this.getResults();
          }
      },
      methods: {
        getUsers() {
              this.$store.dispatch("users/getAllUsers")
                  .then(res => this.users = res.data.users)
                  .catch(error => {});
          },

          getResults() {
              this.$store.dispatch("users/searchUser", { params: { query: this.query } })
                  .then(res => this.users = res.data)
                  .catch(error => {});
          }
      },

      
  }

</script>

<style scoped></style>
