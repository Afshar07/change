<template>
    <div>
      <h1>Stage 3</h1>
      <input type="text" v-model="formData.field1" placeholder="Field 1" />
      <img src="../assets/app_icons/other/authentication.svg" alt="">
      <button @click="startStage">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          field1: ''
        }
      };
    },
    methods: {
      nextStage() {
        this.$emit('next', this.formData);
      }
    }
  };
  </script>
  