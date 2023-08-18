<template>
    <div>
  
  <div class="flex justify-end border-b border-gray-200 dark:border-gray-700">
      <ul class="flex flex-wrap justify-center -mb-px text-sm font-medium  text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          <li class="mr-2" role="presentation">
              <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"> حوزه ها </button>
          </li>
          <li class="mr-2" role="presentation">
              <button class="inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false"> جهانی</button>
          </li>
          <li class="mr-2" role="presentation">
              <button class="inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">چنج کن! </button>
          </li>
          <li role="presentation">
              <button class="inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false"> مورد علاقه</button>
          </li>
      </ul>
  </div>
  
  <div id="myTabContent">
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <zone></zone>
      </div>
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
  
      <loserCoin></loserCoin>   
   </div>
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
          <winnerCoin></winnerCoin>
      </div>
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
          <HotCoine></HotCoine>>
      </div>
  </div>
  </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>