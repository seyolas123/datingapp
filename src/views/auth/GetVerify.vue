<template>
    <div>
         {{ msg}}
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";


const msg = ref('Verification in progress')
const route = useRoute();
const router = useRouter();
const store = useStore();

const id = route.params.id;
const hash = route.params.hash;

  store.dispatch('auth/getVerified', { id, hash })
      .then((res) => {
        //console.log("verified and now to Login page")
        //message.value = "Verification succesfully"
        store.commit("notify", {
                type: "success",
                message: "Email Verified Succesfully",
              });
        router.push({ name: 'Login' })
      });
</script>

<style scoped>

</style>