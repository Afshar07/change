<template>
   <ul v-for="item in news" :key="item.id">
    <li class="flex flex-col border-2 text-right">
      <p>{{ item.title }}</p>
      <img :src="item.img" class="w-12 h-12" />
      <span>{{ item.link }}</span>
      <span>24h: {{ item["24h"] }}</span>
    </li>
  </ul>
</template>

<script setup>
const { data } = await useFetch(
  "https://changekon.com/api/v2/core/news/list"
);
const news =data.value.data
console.log(data.value.data)
</script>

<style>

</style>