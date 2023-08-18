<template>
  <div class="h-screen">
    <!-- hedaer -->
    <div class="flex flex-row gap-8 justify-between p-2 px-4">
      <div class="">
        <input
          type="search"
          name=""
          id=""
          placeholder="...جستجو"
          class="rounded-full bg-gray-50 border-none w-80"
        />
      </div>
      <a href="/wallet" target="_self" class="flex self-center">
        <p class="text-[#d97706]">لغو</p>
      </a>
    </div>
    <!-- main -->

    <!-- useful section -->
    <div class="flex flex-row justify-end">
      <div class="pt-8 pb-4 px-4">
        <p class="text-2xl">پراستفاده</p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-2 px-2" dir="rtl">
      <div class="bg-[#f9fafc] rounded p-2 flex justify-center">USDT</div>
      <div class="bg-[#f9fafc] rounded p-2 flex justify-center">ETH</div>
      <div class="bg-[#f9fafc] rounded p-2 flex justify-center">BNB</div>
      <div class="bg-[#f9fafc] rounded p-2 flex justify-center">BTC</div>
      <div class="bg-[#f9fafc] rounded p-2 flex justify-center">EOS</div>
    </div>
    <!-- list currency -->
    <div class="flex flex-row justify-end">
      <div class="pt-8 pb-4 px-4">
        <p class="text-2xl">لیست ارزها</p>
      </div>
    </div>
    <div class="space-y-6">
      <ul v-for="item in toman" :key="item.id" class="px-4">
        <li class="flex flex-row gap-2">
          <img
            :src="`https://changekon.ir/coins/logo/${item.symbol.toLowerCase()}.webp`"
            alt=""
            class="w-10 h-10 rounded-full"
          />
          <h3 class="flex self-center">{{ item.symbol }}</h3>
          <p class="flex self-center">({{ item.name }})</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
const { data } = await useFetch(
  "https://changekon.com/api/v2/core/coins/list"
);
const toman = data.value.data;
// const USDT = data.value.data.TMN;

definePageMeta({
  layout: "login",
});
</script>

<style></style>
