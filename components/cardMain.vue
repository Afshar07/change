<template>
  <div class="md:hidden flex flex-row gap-4 py-4 px-2">
    <!-- card right -->
    <div
      class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-right"
        >
          تبدیلگر
        </h5>
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-right">
        معامله تمامی ارزهای دیجیتال همراه با رابط کاربری ساده در کمترین زمان با
        ممکن بالاترین امنیت
      </p>
      <NuxtLink to="./exchanges"
        class="inline-flex items-center px-3 py-2 text-sm gap-2 font-medium text-center text-white bg-[#f0b90b] rounded-lg hover:bg-[#f0b90b] "
      >
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
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </NuxtLink>
    </div>
    <!-- card left -->
    <div
      class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-right"
        >
          بازار
        </h5>
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-right">
        معامله تمامی ارزهای دیجیتال همراه با رابط کاربری ساده در کمترین زمان با
        ممکن بالاترین امنیت
      </p>
      <NuxtLink to="./market"
        class="inline-flex items-center px-3 py-2 text-sm gap-2 font-medium text-center text-white bg-[#f0b90b] rounded-lg hover:bg-[#f0b90b] "
      >
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
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
onMounted(() => {
  initFlowbite();
});
</script>

<style></style>
