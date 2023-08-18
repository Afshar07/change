<template>
    <div class="flex flex-col items-center">
      <h1 class="text-3xl font-bold mb-6">Sign In</h1>
      <div class="w-1/4">
        <input
          v-model="phoneNumber"
          type="text"
          class="w-full p-2 rounded border"
          placeholder="Enter Phone Number"
        />
      </div>
      <button @click="sendOTP" class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Send OTP
      </button>
    </div>
  </template>
\
  <script>
//   import Toasted from 'vue-toasted';

// // // or you can use it with require
// var Toasted = require('vue-toasted').default

// Vue.use(Toasted)

// // // you can also pass options, check options reference below
// Vue.use(Toasted, Options)
  export default {
    
    data() {
      return {
        phoneNumber: "",
      };
    },
    methods: {
      sendOTP() {
        // Add your logic to send OTP to the entered phone number
        // For demonstration purposes, let's assume the OTP is sent successfully
        alert("OTP sent successfully!");
        // this.$toasted.show('OTP sent successfully!')
        
        this.$emit("send-otp", this.phoneNumber);
      },
    },
  };
  </script>
  