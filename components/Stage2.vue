<template>
    <div>
      <h1>Stage 2</h1>
      <input type="text" v-model="formData.field2" placeholder="Field 2" />
      <button @click="previousStage">Back</button>
      <button @click="submitForm">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      formData: {
        type: Object,
        required: true
      }
    },
    methods: {
      previousStage() {
        this.$emit('previous');
      },
      submitForm() {
        // Handle form submission
      }
    }
  };
  </script>
  