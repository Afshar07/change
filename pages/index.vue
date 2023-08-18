<template>
  <div class="h-screen">
    <HeaderMobile></HeaderMobile>
    <slider></slider>
    <ButtonGroup></ButtonGroup>
    <CardMain></CardMain>
    <TabCoine></TabCoine>
    <SpeedDial></SpeedDial>
  </div>
</template>

<script setup>
import axios from "axios";
const count = ref([]);
const { data: blogs } = await useFetch(
  axios.get("https://jsonplaceholder.ir/posts").then((res) => {
    count.value = res.data;
  })
);
</script>

<style></style>
