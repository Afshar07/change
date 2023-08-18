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

            <TabPanels class="mt-2">
              <TabPanel>
                <ul class="space-y-4">
                  <li>
                    <div class="form-control w-full max-w-xs" dir="rtl">
                      <label class="label">
                        <span class="label-text">موبایل</span>
                      </label>
                      <input
                        type="tel"
                        id="tel"
                        name="tel"
                        v-model="tel"
                        placeholder="09120000000"
                        class="input input-bordered w-full max-w-xs"
                      />
                    </div>
                  </li>
                  <li>
                    <div class="form-control w-full max-w-xs" dir="rtl">
                      <label class="label">
                        <span class="label-text">گذرواژه</span>
                      </label>
                      <input
                        type="password"
                        placeholder="گذرواژه"
                        class="input input-bordered w-full max-w-xs"
                          v-model="password"
                          @input="checkPassword"
                          :class="{
                            'border-red-500': passwordError,

                            'border-green-500':
                              !passwordError && password.length >= 8,
                          }"
                          
                        />
                      

                          <ul
                            v-if="passwordError"
                            class="text-red-500 text-right pt-2"
                            :class="text - blue - 500"
                           
                          >
                            <li
                              :class="{ 'text-green-500': password.length >= 8 }"
                             
                            >
                              حداقل 8 کاراکتر.
                            </li>
                            <li
                              :class="{
                                'text-green-500': /[A-Z]/.test(password),
                              }"
                            >
                              حداقل شامل یک حرف بزرگ باشد.
                            </li>
                            <li
                              :class="{
                                'text-green-500': /[a-z]/.test(password),
                              }"
                            >
                              حداقل شامل یک حرف کوچک باشد.
                            </li>
                            <li
                              :class="{ 'text-green-500': /\d/.test(password) }"
                            >
                              حداقل شامل یک عدد باشد.
                            </li>
                          </ul>
                    </div>
                  </li>
                  <li>
                    <div class="form-control w-full max-w-xs" dir="rtl">
                      <label class="label">
                        <span class="label-text">کد معرف (اختیاری)</span>
                      </label>
                      <input
                        type="number"
                        placeholder="کد معرف"
                        class="input input-bordered w-full max-w-xs"
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
                    <div class="form-control w-full max-w-xs" dir="rtl">
                      <label class="label">
                        <span class="label-text">ایمیل</span>
                      </label>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        class="input input-bordered w-full max-w-xs"
                      />
                    </div>
                  </li>
                  <li>
                    <div class="form-control w-full max-w-xs" dir="rtl">
                      <label class="label">
                        <span class="label-text">گذرواژه</span>
                      </label>
                        <input
                        type="password"
                        placeholder="گذرواژه"
                        class="input input-bordered w-full max-w-xs"
                          v-model="password"
                          @input="checkPassword"
                          :class="{
                            'border-red-500': passwordError,

                            'border-green-500':
                              !passwordError && password.length >= 8,
                          }"
                          
                        />
                      

                          <ul
                            v-if="passwordError"
                            class="text-red-500 text-right pt-2"
                            :class="text - blue - 500"
                           
                          >
                            <li
                              :class="{ 'text-green-500': password.length >= 8 }"
                             
                            >
                              حداقل 8 کاراکتر.
                            </li>
                            <li
                              :class="{
                                'text-green-500': /[A-Z]/.test(password),
                              }"
                            >
                              حداقل شامل یک حرف بزرگ باشد.
                            </li>
                            <li
                              :class="{
                                'text-green-500': /[a-z]/.test(password),
                              }"
                            >
                              حداقل شامل یک حرف کوچک باشد.
                            </li>
                            <li
                              :class="{ 'text-green-500': /\d/.test(password) }"
                            >
                              حداقل شامل یک عدد باشد.
                            </li>
                          </ul>
                        </div>
                   
                  </li>
                  <li>
                    <div class="form-control w-full max-w-xs" dir="rtl">
                      <label class="label">
                        <span class="label-text">کد معرف (اختیاری)</span>
                      </label>
                      <input
                        type="number"
                        placeholder="کد معرف"
                        class="input input-bordered w-full max-w-xs"
                      />
                    </div>
                  </li>
                </ul>
              </TabPanel>
            </TabPanels>
          </TabGroup>

          <!--check box  -->
          <div class="form-control">
            <label class="label cursor-pointer flex justify-end">
              <span class="label-text pr-2"
                >.<NuxtLink to="../trem" class="text-blue-600">قوانین و شروط</NuxtLink>
                 چنج کن را میپذیرم</span
              >
              <input type="checkbox" checked="checked" class="checkbox" />
            </label>
          </div>
          <!-- submit button -->
          <button type="submit" class="bg-[#ffd038] btn btn-block">
            ثبت نام
          </button>
        </form>
        <button class=" btn btn-block items-center px-4 py-2 bg-red-600 text-white rounded-lg">
    <img class="h-5 w-5 mr-2" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo">
    Sign in with Google
  </button>

        <!-- login text -->
        <div class="flex justify-end">
          <p>
            قبلا ثبت نام کردید؟
            <NuxtLink to="./login" class="font-bold"> ورود </NuxtLink>
          </p>
        </div>

        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
definePageMeta({
  layout: "login",
});
useHead({
  title: 'signup',
})
const password = ref("");
const passwordError = ref(false);
const checkPassword = () => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  passwordError.value = !regex.test(password.value);
};

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
