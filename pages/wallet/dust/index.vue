<template>
  <!-- header -->
  <div class="flex flex-row justify-end gap-4 px-4 py-4 border-b-2 shadow-sm">
    <p>تبدیل موجودی های اندک</p>
    <a href="/wallet">
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
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </a>
  </div>
  <!-- header -->
  <div dir="rtl" class="py-4 shadow-sm px-4">
    <p>
      شما میتوانید رمز ارزهای با موجودی کم که قابل معامله یا برداشت نیستند را
      مستقیما به تومان تبدیل کنید.
    </p>
  </div>
<!-- main -->
  <div class="h-screen"></div>
  <!-- footer -->
  <div>
    <div class="text-right px-4 py-6 gap-4">
      <p class="pb-4">ارزش تقریبی : 0 تومان</p>
      <button class="btn btn-warning flex justify-start shadow-sm">
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
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
        تبدیل موجودی ها به تومان
      </button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "login",
});
</script>

<style></style>
