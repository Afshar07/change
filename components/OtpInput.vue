<template>
    <div class="flex flex-col items-center">
      <h1 class="text-3xl font-bold mb-6">Enter OTP</h1>
      <div class="w-1/4">
        <input
          v-model="otp"
          type="text"
          class="w-full p-2 rounded border"
          placeholder="Enter OTP"
        />
      </div>
      <button @click="submitOTP" class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Submit OTP
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        otp: "",
      };
    },
    methods: {
      submitOTP() {
        // Add your OTP verification logic here
        // For demonstration purposes, let's assume the OTP is "1234"
        if (this.otp === "1234") {
          alert("OTP is valid. Sign-in successful!");
          this.$emit("otp-verified");
        } else {
          alert("Invalid OTP. Please try again.");
        }
      },
    },
  };
  </script>
  