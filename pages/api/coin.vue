<template>
  <ul v-for="item in toman" :key="item.id">
    <li class="flex flex-col border-2 text-right">
      <p>{{ item.s }}/تومان</p>
      <img :src="item.icon" class="w-12 h-12" />
      <span>{{ item.p }}</span>
      <span>24h: {{ item["24h"] }}</span>
    </li>
  </ul>
</template>
<!-- مسیر لوگوی ارزها:

https://changekon.ir/coins/logo/{symbol}.webp
 -->
 <!-- نمودار یک روزه هر ارز:
https://changekon.ir/coins/chart1d/{symbol}.svg
 -->
<script setup>
const { data } = await useFetch(
  "https://changekon.com/api/v2/core/market/list"
);
const toman = data.value.data.TMN;
// const USDT = data.value.data.TMN;

definePageMeta({
  layout: "login",
});
</script>

<style></style>
