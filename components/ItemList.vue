<template>
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      items: Array,
      searchQuery: String
    },
    computed: {
      filteredItems() {
        if (!this.searchQuery) {
          return this.items;
        }
        const normalizedQuery = this.searchQuery.toLowerCase();
        return this.items.filter(item =>
          item.name.toLowerCase().includes(normalizedQuery)
        );
      }
    }
  };
  </script>
  