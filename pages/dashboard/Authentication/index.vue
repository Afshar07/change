<template>
    <div class="container mx-auto py-10">
      <div class="max-w-md mx-auto p-4 border shadow">

        <!-- stage1 -->
        <template v-if="currentStage === 1">
          <Stage1 @next="nextStage" />
        </template>

        <!-- stage2 -->
        <template v-else-if="currentStage === 2">
          <Stage2 @next="nextStage" />
        </template>
        <!-- stage3 -->
        <template v-else-if="currentStage === 2">
          <Stage2 :formData="formData" @previous="previousStage" />
        </template>
        
      </div>
    </div>
  </template>
  
  <script>
  import Stage1 from '~/components/Stage1.vue';
  import Stage2 from '~/components/Stage2.vue';
  definePageMeta({
  layout:"userpanel"
})
  export default {
    components: {
      Stage1,
      Stage2
    },
    data() {
      return {
        currentStage: 1,
        formData: {}
      };
    },
    methods: {
        
      nextStage(formData) {
        this.formData = { ...this.formData, ...formData };
        this.currentStage++;
      },
      previousStage() {
        this.currentStage--;
      }
    }
  };
  </script>
  