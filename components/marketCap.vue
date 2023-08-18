<template>
    <div>
        <ul v-for="item in hot" :key="item.id" class=" ">
            
            <li class="flex flex-row-reverse justify-between  space-y-4 gap-4">
                    <img :src="`https://changekon.ir/coins/logo/${item.s.toLowerCase()}.webp`" alt="" class="w-16 h-16 rounded-full">
    <p class="self-center">{{ item.s }}</p>
    <p class="self-center">{{ item.p }}$</p>
    <button class="bg-red-600 px-4 py-2 rounded-md text-white self-center">{{ item['24h'] }}</button>
                </li>
       
        </ul>

    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
const { data } = await useFetch(
  "https://changekon.ir/api/v2/core/coins/marketcap/list"
);
const hot =data.value.data

onMounted(() => {
    initFlowbite();
})
</script>

<style>

</style>