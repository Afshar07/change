<template>
    <input
      v-model="searchQuery"
      class="border rounded px-3 py-2"
      placeholder="Search items..."
    />
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: ''
      };
    },
    watch: {
      searchQuery(newQuery) {
        this.$emit('search', newQuery);
      }
    }
  };
  </script>
  