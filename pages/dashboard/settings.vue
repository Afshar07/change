<template>

  <!-- <p class="text-black ">setting</p> -->
  <div class="md:hidden">
  <div class="flex flex-row  justify-start gap-4 px-4 py-6  shadow-md ">
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
    <p class="text-black"> تنظیمات</p>

  </div>
  <div>
    <ul class="text-black pt-7 px-4 space-y-10 ">
      <li class="flex flex-row justify-between ">
        <p>امنیت</p>
        <span>
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
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
        </span>
      </li>
      <li class="flex flex-row justify-between">
        <p>دکمه پشتیبانی</p>
        <span></span>
      </li>
      <li class="flex flex-row justify-between">
        <p>حالت نمایش</p>
        <span></span>
      </li>
    </ul>
  </div>
</div>

</template>

<script setup>
  definePageMeta({
  layout:"userpanel"
});


</script>

<style>

</style>