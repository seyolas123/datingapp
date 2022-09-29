<template>
    <div style="margin-top:70px;">
     <div class="mt-5 container bg-gray-200 rounded-md outline-connekta-main">
      <p class="mx-auto flex justify-center items-center">Pay {{ route.params.id }}Naira</p>
      <p class="mx-auto flex justify-center items-center">
        <paystack
                buttonClass="'button-class btn btn-primary mt-5'"
                buttonText="Pay Online"
               :publicKey="publicKey"
               :email="user.email"
               :amount="route.params.id * 100"
               :reference="reference"
               :onSuccess="onSuccessfulPayment"
               :onCancel="onCancelledPayment">
        </paystack>
      </p>
    </div>
    </div>
</template>

<script setup>
import paystack from 'vue3-paystack';
import store from "../../store";
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import Swal from "sweetalert2";

const route = useRoute();
const router = useRouter();

const amount = route.params.id;

const user = computed(() => store.state.users.user.data);


store.dispatch("users/getUser");

//const publicKey = "pk_live_c897907ccb827568576f12bbc391dd63c61b92aa";
const publicKey = "pk_test_bc4fd2f19c998674421e34e5398328af262af516";

const reference = computed(() => {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
});

function onSuccessfulPayment() {
  //const trxref = route.params.trxref;
  //const referenc = route.params.reference;
  //console.log(trxref);
  //console.log(amount);
   store.dispatch("users/savePurchase", amount )
   store.dispatch("users/updateConnect", amount )
   .then(() => {
    Swal.fire("Connects Bought!", `You have Succesfully bought ${amount} connects`, "success");
      // store.commit("notify", {
      //           type: "success",
      //           message: `You have Succesfully bought ${amount} connects`,
      //         });
      router.push ({ name: 'Home' })
   })
   //window.alert("Payment received");
}

function onCancelledPayment() {
  Swal.fire("Cancelled!", 'You have bought no connects', "warning");
}

    
</script>

<style scoped>

</style>