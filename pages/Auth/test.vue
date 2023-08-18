<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <template v-if="stage === 'phone-number'">
      <phone-number-input @send-otp="handleOTPSent" />
    </template>
    <template v-else-if="stage === 'otp'">
      <otp-input @otp-verified="handleOTPVerified" />
    </template>
  </div>
</template>

<script>
import PhoneNumberInput from '@/components/PhoneNumberInput.vue';
import OtpInput from '@/components/OtpInput.vue';
definePageMeta({
  layout: "login",
});
export default {
  components: {
    PhoneNumberInput,
    OtpInput,
  },
  data() {
    return {
      stage: 'phone-number',
      phoneNumber: '',
    };
  },
  methods: {
    handleOTPSent(phoneNumber) {
      this.phoneNumber = phoneNumber;
      this.stage = 'otp';
    },
    handleOTPVerified() {
      // Add your logic to proceed with sign-in after OTP verification
      // For demonstration purposes, let's just reset the stage
      this.stage = 'phone-number';
    },
  },
};
</script>
