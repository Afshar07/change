<template>
  <div class=" h-screen">
    <!-- header -->
    <div class="flex flex-row justify-end gap-4 px-4 py-6 shadow-md">
      <p class="text-black">تاریخچه</p>
      <a href="/">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="black"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
      </a>
    </div>
    <!-- tabs -->

   

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
onMounted(() => {
    initFlowbite();
})
</script>

<style></style>
