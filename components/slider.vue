<template>
<!-- carousel -->
  <div  id="gallery" class="relative pt-4 w-full " data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56  overflow-hidden rounded-lg md:h-96 ">
         <!-- Item 1 -->
        <div v-for="item in news" :key="item.id" class="hidden duration-700 ease-in-out " data-carousel-item>
            <a :href="item.link">
                <img :src="item.img"  class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  "  alt="">
            </a>
        </div>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
<!-- slider text -->
<div class=" flex flex-row-reverse px-4">
    <div class="self-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
</svg>

    </div>
    <div  id="gallery" class="relative px-2 pt-4 w-full " data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-10  overflow-hidden rounded-lg md:h-96 ">
         <!-- Item 1 -->
        <div v-for="item in news" :key="item.id" class="hidden duration-700 ease-in-out " data-carousel-item>
            <a :href="item.link">
                <p class="text-right truncate" dir="rtl">
                {{ item.title }}
            </p>          
          </a>
        </div>
    </div>
</div>
</div>

</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
const { data } = await useFetch(
  "https://changekon.com/api/v2/core/news/list"
);
const news =data.value.data
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<style>

</style>