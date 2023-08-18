<template>
    <div>
      <SearchInput @search="updateSearchQuery" />
      <ItemList :items="items" :searchQuery="searchQuery" />

    <div v-for="item in items" :key="item.id">
    {{item  }}

    </div>
      <!-- <div v-for="(key , index) in price " :key="index.id">
        {{ index }}
      </div> -->

    </div>
  </template>
  <script setup>
  import SearchInput from '~/components/SearchInput.vue';
  import ItemList from '~/components/ItemList.vue';
  import { ref, computed } from 'vue';
  const { data } = await useFetch(
  "https://changekon.com/api/v2/core/coins/price"
);
const price = data.value.data

const keys = Object.keys(price);

  const searchQuery = ref('');
  const items = keys
//     [
//     { id: 1, name: 'usdt' },
//     { id: 2, name: 'dai' },
//     { id: 3, name: 'eth' },
//     { id: 4, name: 'btc' },
//     { id: 5, name: 'bnb' },
//     { id: 6, name: 'eli' },
   
//   ]

 
  console.log(items)
  const filteredItems = computed(() => {
    if (!searchQuery.value) {
      return items.value;
    }

    const normalizedQuery = searchQuery.value.toLowerCase();

    return items.value.filter(item =>
      item.name.toLowerCase().includes(normalizedQuery)
    );
  });

  
//   const updateSearchQuery = newQuery => {
//     searchQuery.value = newQuery;
//   };
  </script>
 