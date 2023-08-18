<template>
    <div>
        <ul v-for="(key , index) in zone" :key="item.index" class=" ">
            
            <li class="flex flex-row-reverse justify-between  space-y-4 gap-4">
                  {{index}}

                  
    <p class="self-center"></p>
                </li>
       
        </ul>

        <!-- <ul v-for="item in zoneData" :key="item.id" class=" ">
            
            <li class="flex flex-row-reverse justify-between  space-y-4 gap-4">
                  {{item}}
                 
    <p class="self-center"></p>
                </li>
       
        </ul> -->

        <!-- {{ zoneData.s }}
        {{ zoneData['24h'] }} -->

    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
const { data } = await useFetch(
  "https://changekon.com/api/v2/core/coins/zone/list"
);
const zone =data.value.data
const zoneData = data.value.data

console.log(zoneData)


onMounted(() => {
    initFlowbite();
})
</script>

<style>

</style>