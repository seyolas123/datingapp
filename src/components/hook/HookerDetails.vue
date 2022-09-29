<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div style="margin-top:60px">
    <div v-if="loading" class="flex justify-center">Loading...</div>
    <div
      v-else
      class=" rounded rounded-lg px-2 py-3 bg-gray-200 shadow overflow-hidden sm:rounded-lg"
    >
      <div v-for="user in singleuser" :key="user.id" class="flex justify-center">
        <div class="lg:hidden sm:flex">
          <div class="opacity-0 animate-fade-in-down mt-1 flex items-center">
            <div v-if="user.avatar">
              <img
                :src="config.urlink + user.avatar"
                :alt="user.username"
                class="w-full mx-auto object-fill  mb-3"
                style="border-radius: 80px; width: 150px; height: 150px"
              />
            </div>
            <div v-else>
              <span
                class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
              >
                <svg
                  class="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
  
      <div class="">
        <div class="rounded overflow-hidden">
          <!-- accordion-tab  -->
          <div
            class="opacity-0 animate-fade-in-down group outline-none"
            tabindex="1"
          >
            <div
              class="group bg-lime-100  px-4 py-3 items-center text-connekta-main transition ease duration-500 cursor-pointer pr-10 relative"
            >
              <div class="flex justify-center text-connekta-main transition ease duration-500">
                Hooker Connection Details
                <span class="text-yellow-500 ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div
              v-for="user in singleuser"
              :key="user.id"
              style="height: 100%"
              class="transition ease duration-500 cursor-pointer rounded-b-md bg-connekta-main text-white "
            >
              <div class="flex justify-center items-center p-2">
               <a class="flex items-center" :href="'tel:'+user+country_code+user.phone">
                <span class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                    />
                  </svg>
                </span>
                <p class="p-4">{{ user.phone }}</p>
                </a>
              </div>
              <hr class="bg-lime-100"/>
  
              <div class="flex items-center justify-center p-2">
                <a class="flex items-center" :href="config.whatsapplink + user.country_code + user.phone">
                <span class="h-8 w-8">
                  <img src="/utility/whatappr.png"/>
                </span>
                <p class="p-4">{{ user.phone }}</p>
                </a>
              </div>
              <hr class="bg-lime-100"/>
  
              <div class="flex items-center justify-center p-2">
                <a class="flex items-center" :href="config.mailink + user.email">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
  
                </span>
                <p class="p-4">{{ user.email }}</p>
                </a>
              </div>
              <hr class="bg-lime-100"/>
  
              <div v-show="user.city" class="flex items-center justify-center p-2">
                <a
                      class="flex items-center"
                      :href="'https://www.google.com/maps/place/' + user.city"
                      target="_blank"
                    >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
  
                </span>
                <p class="p-4">{{ user.city }}</p>
                </a>
              </div>
              <hr class="bg-lime-100"/>
  
              <div class="flex items-center justify-center p-2">
                <button class="flex items-center" @click="inviteToChat(user.id, user.uid)">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
                </span>
                <p class="p-4">Chat with {{ user.username }}</p>
                </button>
              </div>
              <hr class="bg-lime-100"/>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import { computed, ref } from "vue";
  import config from "../../config.js";
  import { useRouter, useRoute } from "vue-router";
  import { useStore } from "vuex";
  
  const store = useStore();
  const route = useRoute();
  const router = useRouter();
  
  let loading = ref(false);
  
  const singleuser = computed(() => store.state.users.currentUser.data);
  
  if (route.params.id) {
    loading.value = true;
    store.dispatch("users/getUserByUid", route.params.id);
    loading.value = false;
  }
  
  function inviteToChat(id,uid) {
    store.dispatch("notifications/inviteToChat", uid);
    router.push({ name: 'Chat', params: { id: id }});
  }
  </script>
  <style src="vue-multiselect/dist/vue-multiselect.css" scoped>
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;900&display=swap");
  body {
    font-family: "Rubik", sans-serif;
  }
  
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [type="button"],
  [type="reset"],
  [type="submit"],
  button {
    -webkit-appearance: button;
  }
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  [hidden],
  template {
    display: none;
  }
  blockquote,
  dd,
  dl,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  p,
  pre {
    margin: 0;
  }
  button {
    background-color: transparent;
    background-image: none;
  }
  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
  fieldset,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }
  ol,
  ul {
    list-style: none;
  }
  html {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
      Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    line-height: 1.5;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
    border: 0 solid #e2e8f0;
  }
  hr {
    border-top-width: 1px;
  }
  img {
    border-style: solid;
  }
  textarea {
    resize: vertical;
  }
  input::-moz-placeholder,
  textarea::-moz-placeholder {
    color: #a0aec0;
  }
  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: #a0aec0;
  }
  input::-ms-input-placeholder,
  textarea::-ms-input-placeholder {
    color: #a0aec0;
  }
  input::placeholder,
  textarea::placeholder {
    color: #a0aec0;
  }
  [role="button"],
  button {
    cursor: pointer;
  }
  table {
    border-collapse: collapse;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  }
  audio,
  canvas,
  embed,
  iframe,
  img,
  object,
  svg,
  video {
    display: block;
    vertical-align: middle;
  }
  img,
  video {
    max-width: 100%;
    height: auto;
  }
  .container {
    width: 100%;
  }
  @media (min-width: 640px) {
    .container {
      max-width: 640px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    .container {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    .container {
      max-width: 1280px;
    }
  }
  .bg-gray-100 {
    --bg-opacity: 1;
    background-color: #f7fafc;
    background-color: rgba(247, 250, 252, var(--bg-opacity));
  }
  .bg-gray-800 {
    --bg-opacity: 1;
    background-color: #2d3748;
    background-color: rgba(45, 55, 72, var(--bg-opacity));
  }
  .bg-gray-900 {
    --bg-opacity: 1;
    background-color: #1a202c;
    background-color: rgba(26, 32, 44, var(--bg-opacity));
  }
  .bg-red-700 {
    --bg-opacity: 1;
    background-color: #c53030;
    background-color: rgba(197, 48, 48, var(--bg-opacity));
  }
  .border-gray-700 {
    --border-opacity: 1;
    border-color: #4a5568;
    border-color: rgba(74, 85, 104, var(--border-opacity));
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .rounded-full {
    border-radius: 9999px;
  }
  .border {
    border-width: 1px;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .flex {
    display: flex;
  }
  .inline-flex {
    display: inline-flex;
  }
  .items-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-between {
    justify-content: space-between;
  }
  .h-8 {
    height: 2rem;
  }
  .m-8 {
    margin: 2rem;
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mt-2 {
    margin-top: 0.5rem;
  }
  .mr-2 {
    margin-right: 0.5rem;
  }
  .mb-auto {
    margin-bottom: auto;
  }
  .ml-auto {
    margin-left: auto;
  }
  .max-h-0 {
    max-height: 0;
  }
  .group:focus .group-focus\:max-h-screen {
    max-height: 100vh;
  }
  .outline-none {
    outline: 0;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .p-2 {
    padding: 0.5rem;
  }
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .pr-10 {
    padding-right: 2.5rem;
  }
  .fixed {
    position: fixed;
  }
  .absolute {
    position: absolute;
  }
  .relative {
    position: relative;
  }
  .top-0 {
    top: 0;
  }
  .right-0 {
    right: 0;
  }
  .bottom-0 {
    bottom: 0;
  }
  .text-center {
    text-align: center;
  }
  .text-justify {
    text-align: justify;
  }
  .text-white {
    --text-opacity: 1;
    color: #fff;
    color: rgba(255, 255, 255, var(--text-opacity));
  }
  .text-gray-400 {
    --text-opacity: 1;
    color: #cbd5e0;
    color: rgba(203, 213, 224, var(--text-opacity));
  }
  .text-gray-500 {
    --text-opacity: 1;
    color: #a0aec0;
    color: rgba(160, 174, 192, var(--text-opacity));
  }
  .group:focus .group-focus\:text-white {
    --text-opacity: 1;
    color: #fff;
    color: rgba(255, 255, 255, var(--text-opacity));
  }
  .w-8 {
    width: 2rem;
  }
  .w-full {
    width: 100%;
  }
  .transform {
    --transform-translate-x: 0;
    --transform-translate-y: 0;
    --transform-rotate: 0;
    --transform-skew-x: 0;
    --transform-skew-y: 0;
    --transform-scale-x: 1;
    --transform-scale-y: 1;
    transform: translateX(var(--transform-translate-x))
      translateY(var(--transform-translate-y)) rotate(var(--transform-rotate))
      skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y))
      scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
  }
  .group:focus .group-focus\:-rotate-180 {
    --transform-rotate: -180deg;
  }
  .transition {
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
  }
  .duration-500 {
    transition-duration: 0.5s;
  }
  @media (min-width: 640px) {
    .sm\:container {
      width: 100%;
      max-width: 640px;
    }
    @media (min-width: 768px) {
      .sm\:container {
        max-width: 768px;
      }
    }
    @media (min-width: 1024px) {
      .sm\:container {
        max-width: 1024px;
      }
    }
    @media (min-width: 1280px) {
      .sm\:container {
        max-width: 1280px;
      }
    }
  }
  @media (min-width: 768px) {
    .md\:container {
      width: 100%;
    }
    @media (min-width: 640px) {
      .md\:container {
        max-width: 640px;
      }
    }
    @media (min-width: 768px) {
      .md\:container {
        max-width: 768px;
      }
    }
    @media (min-width: 1024px) {
      .md\:container {
        max-width: 1024px;
      }
    }
    @media (min-width: 1280px) {
      .md\:container {
        max-width: 1280px;
      }
    }
  }
  @media (min-width: 1024px) {
    .lg\:container {
      width: 100%;
    }
    @media (min-width: 640px) {
      .lg\:container {
        max-width: 640px;
      }
    }
    @media (min-width: 768px) {
      .lg\:container {
        max-width: 768px;
      }
    }
    @media (min-width: 1024px) {
      .lg\:container {
        max-width: 1024px;
      }
    }
    @media (min-width: 1280px) {
      .lg\:container {
        max-width: 1280px;
      }
    }
  }
  @media (min-width: 1280px) {
    .xl\:container {
      width: 100%;
    }
    @media (min-width: 640px) {
      .xl\:container {
        max-width: 640px;
      }
    }
    @media (min-width: 768px) {
      .xl\:container {
        max-width: 768px;
      }
    }
    @media (min-width: 1024px) {
      .xl\:container {
        max-width: 1024px;
      }
    }
    @media (min-width: 1280px) {
      .xl\:container {
        max-width: 1280px;
      }
    }
  }
  </style>
  