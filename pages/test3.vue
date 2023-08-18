<template>
<!-- <div v-for="item in amount" :key="item.id" dir="rtl">
    <li>
     <h1> {{ item.symbol }}</h1>
    <p>{{ item.name }}</p>
    </li>
  </div>  -->
  <div>
    <div>
  
      <div v-for="(key,index) in price " :key="index.id" dir="rtl" class="flex flex-row justify-between space-y-8 px-2">
        <div class="flex flex-row justify-between basis-1/4">
          <div class=""></div>
          <div class="basis-1/3"> {{ key }}$</div>
          <div class="basis-1/4"> {{index  }} </div>
        </div>
        <div class="basis-1/2 text-left">
          0 تومان
        </div>
      </div>
    </div>

  </div>
  
</template>

<script setup>
const { data } = await useFetch(
  // "https://changekon.com/api/v2/core/coins/list",
  "https://changekon.com/api/v2/core/coins/price"
);
// const amount = data.value.data
const price = data.value.data


definePageMeta({
  layout :"login"
})


</script>

<style>

</style>