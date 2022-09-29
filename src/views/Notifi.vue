<template>
  <div style="margin-top:60px;" class="p-5">
    <div v-if="loading" class="flex justify-center">Loading...</div>

    <div
      v-else
      class="border border-connekta-main mt-3 px-3 py-4 w-full  bg-gray-200 mt-3 text-gray-600 rounded rounded-lg relative text-sm "
    >

    <div>
      <p class="block px-2 py-2 text-sm font-medium text-gray-300"><em>Personal Notifications</em></p>
      <hr />
      <div v-if="!notifics.length">
      
       <p><em>No personal notifications yet</em></p>
      </div>

      <div v-else class="w-full mt-0 space-y-6">
        
        <div
          v-for="(notification, index) in notifics"
          :key="notification.id"
          :style="{ animationDelay: `${index * 0.1}s` }"
          class="rounded-md shadow-sm -space-y-px opacity-0 animate-fade-in-down"
        >
          <div v-show="notification.type == 'default'">
            <p
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-lime-900 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              {{ notification.title }} from
              <router-link
                :to="{
                  name: 'UserView',
                  params: { id: notification.sender_uid },
                }"
              >
                <span class="text-lime-900 font-extrabold">
                  {{ notification.sender_username }}
                </span>
              </router-link>
              - {{ formatDate(notification.created_at) }}
            </p>

            <p class="rounded-b-md mt-2 bg-white px-3 py-4">
              {{ notification.content }}
            </p>
          </div>

          <div v-show="notification.type == 'chat-call'">
            <p
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-lime-900 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              {{ notification.title }} from
              <router-link
                :to="{
                  name: 'RespondChat',
                  params: { id: notification.sender_uid },
                }"
              >
                <span class="text-lime-900 font-extrabold">
                  {{ notification.sender_username }}
                </span>
              </router-link>
              - {{ formatDate(notification.created_at) }}
            </p>

            <p class="rounded-b-md mt-2 bg-white px-3 py-4">
              {{ notification.content }}
            </p>
          </div>

          <div v-show="notification.type == 'acceptance'">
            <p
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-lime-900 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              {{ notification.title }} from
              <router-link
                :to="{
                  name: 'UserView',
                  params: { id: notification.sender_uid },
                }"
              >
                <span class="text-lime-900 font-extrabold">
                  {{ notification.sender_username }}
                </span>
              </router-link>
              - {{ formatDate(notification.created_at) }}
            </p>

            <p class="rounded-b-md mt-2 bg-white px-3 py-4">
              {{ notification.content }}
            </p>
          </div>

          <div v-show="notification.type == 'hook'">
            <p
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-lime-900 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              {{ notification.title }} from
              <router-link
                :to="{
                  name: 'UserView',
                  params: { id: notification.sender_uid },
                }"
              >
                <span class="text-lime-900 font-extrabold">
                  {{ notification.sender_username }}
                </span>
              </router-link>
              - {{ formatDate(notification.created_at) }}
            </p>

            <p class="mt-2 bg-white px-3 py-4">
              {{ notification.content }}
            </p>

            <div>
              <router-link :to="{ name: 'HookieDetails', params: { id: notification.sender_uid } }">
                <button
                  type="button"
                  class="group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-b-md text-white bg-connekta-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  View
                </button>
              </router-link>
            </div>
          </div>

          <div v-show="notification.type == 'connection'">
            <p
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-lime-900 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              {{ notification.title }} from
              <router-link
                :to="{
                  name: 'UserView',
                  params: { id: notification.sender_uid },
                }"
              >
                <span class="text-lime-900 font-extrabold">
                  {{ notification.sender_username }}
                </span>
              </router-link>
              - {{ formatDate(notification.created_at) }}
            </p>

            <p class="mt-2 bg-white px-3 py-4">
              {{ notification.content }}
            </p>

            <div>
              <router-link :to="{ name: 'Circle' }">
                <button
                  type="button"
                  class="group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-b-md text-white bg-connekta-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  View
                </button>
              </router-link>
            </div>
          </div>

          <div v-show="notification.type == 'admin'">
            <p
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-lime-900 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              {{ notification.title }} from
              <span class="text-gray-900 font-extrabold">{{
                notification.sender_username
              }}</span>
              - {{ formatDate(notification.created_at) }}
            </p>

            <p class="rounded-b-md mt-2 bg-white px-3 py-4">
              {{ notification.content }}
            </p>
          </div>
          
        </div>

      </div>
    </div>
    <br/>
    <hr />
    <div>
      <p class="block px-2 py-2 text-sm font-medium text-gray-300"><em>General Notifications</em></p>
      <hr />
      <div v-if="!notifics_general.length">
      
       <p><em>No general notifications yet</em></p>
      </div>

      <div v-else class="w-full mt-0 space-y-6">
        
        <div
          v-for="(notification, index) in notifics_general"
          :key="notification.id"
          :style="{ animationDelay: `${index * 0.1}s` }"
          class="rounded-md shadow-sm -space-y-px opacity-0 animate-fade-in-down"
        >
          <div>
            <p
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-lime-900 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            >
              {{ notification.title }} from
              <router-link
                :to="{
                  name: 'UserView',
                  params: { id: notification.sender_uid },
                }"
              >
              
              </router-link>
              - {{ formatDate(notification.created_at) }}
            </p>

            <p class="mt-2 bg-white px-3 py-4">
              {{ notification.sender_username }} {{ notification.content }}
            </p>

            <div>
              <router-link :to="{ name: 'Fleeks' }">
                <button
                  type="button"
                  class="group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-b-md text-white bg-connekta-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  View Fleeks
                </button>
              </router-link>
            </div>
          </div>

          
          
        </div>

      </div>
    </div>

    </div>
  </div>
</template>

<script setup>
import store from "../store";
import { computed, ref, onMounted } from "vue";
import dayjs from "dayjs";

let loading = ref(false);

const notifics = computed(
  () => store.state.notifications.userFullNotification.data
);

const notifics_general = computed(
  () => store.state.notifications.userFullNotificationGeneral.data
);


function getNotifics() {
  loading.value = true;
  store.dispatch("notifications/getFullNotifications").then(() => {
    loading.value = false;
  });
}

function getNotificsGeneral() {
  loading.value = true;
  store.dispatch("notifications/getGeneralNotifications").then(() => {
    loading.value = false;
  });
}

function formatDate(dateString) {
  const date = dayjs(dateString);
  // Then specify how you want your dates to be formatted
  return date.format("dddd MMMM D, YYYY");
}

onMounted(() => {
  store.dispatch("notifications/markRead");
  getNotifics();
  getNotificsGeneral();
});
</script>

<style scoped></style>
