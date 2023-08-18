<template>
    <div class="sm:continer sm:flex gap-4 justify-center">
      <div
        class="sm:border-2 sm:flex sm:justify-center sm:rounded-2xl sm:shadow-lg sm:border-[#e2e8f0] px-8 py-10 my-10"
      >
      <div class="w-full max-w-md px-2 space-y-4 sm:px-10">
  
          <!-- Header -->
          <div class="space-y-2">
            <div class="flex justify-center">
              <img src="../../assets/logo2.webp" alt="" class="w-20 sm:w-20" />
            </div>
            <div class="flex justify-center">
              <p class="sm:hidden">چنج کن</p>
            </div>
            <div class="flex justify-center">
              <p>بازار آنلاین رمز ارز ها</p>
            </div>
          </div>
  
          <!-- form -->
          <form action="" class="space-y-4">
            <TabGroup>
              <TabList class="flex space-x-1 rounded-xl bg-gray-900/10 p-1">
                <Tab
                  v-for="category in Object.keys(categories)"
                  as="template"
                  :key="category"
                  v-slot="{ selected }"
                >
                  <button
                    :class="[
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none ',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                    ]"
                  >
                    {{ category }}
                  </button>
                </Tab>
              </TabList>
              <!-- section alret -->
              <div class="flex flex-row-reverse border p-1 rounded-lg bg-[#ffebaf]">
                <span class="self-center">
                    <svg style="margin: -6px 7px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="info"><g transform="translate(-848 -330)"><rect width="24" height="24" transform="translate(848 330)" fill="rgba(0,0,0,0)"></rect><g transform="translate(330.999 -4340.002)"><path d="M6362,23460a10,10,0,1,1,10-10A10.012,10.012,0,0,1,6362,23460Zm.012-18a8,8,0,1,0,8,8A8.009,8.009,0,0,0,6362.009,23442Z" transform="translate(-5833 -18768)" fill="#EEA003" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"></path><g transform="translate(0 3)"><path d="M861,346v-4a1,1,0,0,0-2,0v4a1,1,0,0,0,2,0Z" transform="translate(-331 4337)" fill="#EEA003"></path><rect width="2" height="2" transform="translate(528 4674)" fill="#EEA003"></rect></g></g></g></svg>
                </span>
                    <p class="text-right text-sm	">
                        به منظور حفظ امنیت حساب کاربری شما، پس از تغییر رمز عبور، 24 ساعت مجاز به برداشت از حسابتان و برداشت رمزارز نیستید
                    </p>
       
              </div>

  
              <TabPanels class="mt-2">
                <TabPanel>
                  <ul class="space-y-4">
                    <li>
                      <div class="form-control w-full pt-2 -mb-2" dir="rtl"> 
                        <input
                        type="tel"
                        id="tel"
                        name="tel"
                        v-model="tel"
                          placeholder="09120000000"
                          class="input input-bordered w-full"
                         
                        />
                      </div>
                    </li>
                   
                  </ul>
                </TabPanel>
              </TabPanels>
              <TabPanels class="mt-2">
                <TabPanel>
                  <ul class="space-y-4">
                    <li>
                      <div class="form-control w-full  py-2" dir="rtl">
                        <input
                          type="email"
                          placeholder="example@gmail.com"
                          class="input input-bordered w-full "
                          
                        />
                      </div>
                    </li>
                  </ul>
                </TabPanel>
              </TabPanels>
            </TabGroup>
  
            <!-- submit button -->
            <button type="submit" class="bg-[#ffd038]  btn btn-block" >
              بازیابی رمز عبور
            </button>
          </form>
  
          <!-- login text -->
          <div class="flex justify-center">
            <p>
                رمزتان را بخاطر دارید؟ 
              <NuxtLink to="./signup" class="font-bold"> وارد شوید</NuxtLink>
            </p>
          </div>
          
  
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";

  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
  definePageMeta({
  layout: "login",
});
useHead({
  title: 'forgetPassword',
})
//   const inputValue = ref('');
// const isButtonDisabled = ref(true);

// const checkInputLength = () => {
//   if (inputValue.value.length <= 12) {
//     isButtonDisabled.value = true;
//   } else  {
//     isButtonDisabled.value = false;
//   }
// };

// const buttonText = computed(() => (isButtonDisabled.value ? 'Submit' : 'Enabled!'));
  const categories = ref({
    موبایل: [],
    ایمیل: [],
  });
  </script>
  <style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
  