import { NuxtLink } from '../../.nuxt/components';
<template>
  <div>
    <div class="bg-[#f1f5f9] pt-2">
      <!-- header -->
      <div class="flex flex-row justify-between px-2 py-2">
        <div>
          <a
            href="/wallet/dust"
            target="_self"
            class="flex flex-row gap-2 p-2 bg-gray-50 rounded-full"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <p>تاریخچه</p>
          </a>
        </div>
        <div class="flex flex-row self-center gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </span>
          <p>ارزش کل دارایی ها</p>
        </div>
      </div>
      <div class="text-right px-2 pb-6">
        <p class="text-2xl" dir="rtl">0 تومان</p>
      </div>

      <!-- main -->
      <div class="rounded-t-3xl bg-white pt-8 space-y-8">
        <!-- buttons -->
        <div class="flex flex-row-reverse justify-around">
          <a
            href="/wallet/deposit"
            target="_self"
            class="grid justify-items-center pr-8"
          >
            <span>
              <svg
                viewBox="0 0 24 24"
                style="enable-background: new 0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
              >
                <g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m12 16c-.205 0-.401-.084-.542-.232l-5.25-5.5c-.455-.476-.117-1.268.542-1.268h2.75v-5.75c0-.689.561-1.25 1.25-1.25h2.5c.689 0 1.25.561 1.25 1.25v5.75h2.75c.659 0 .997.792.542 1.268l-5.25 5.5c-.141.148-.337.232-.542.232z"
                    data-original="#000000"
                    class=""
                    style="fill: rgb(240, 185, 11)"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M 19.791 22 L 4.09 22 C 3.351 22 2.75 21.215 2.75 20.25 L 2.75 19.75 C 2.75 18.785 3.351 18 4.09 18 L 19.791 18 C 20.53 18 21.131 18.785 21.131 19.75 L 21.131 20.25 C 21.131 21.215 20.53 22 19.791 22 Z"
                    data-original="#000000"
                    class=""
                    style="fill: rgb(117, 128, 142)"
                  />
                </g>
              </svg>
            </span>
            <p>واریز</p>
          </a>
          <a
            href="/wallet/withdraw"
            target="_self"
            class="grid justify-items-center"
          >
            <span>
              <svg
                viewBox="0 0 24 24"
                style="enable-background: new 0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
              >
                <g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m12 16c-.205 0-.401-.084-.542-.232l-5.25-5.5c-.455-.476-.117-1.268.542-1.268h2.75v-5.75c0-.689.561-1.25 1.25-1.25h2.5c.689 0 1.25.561 1.25 1.25v5.75h2.75c.659 0 .997.792.542 1.268l-5.25 5.5c-.141.148-.337.232-.542.232z"
                    data-original="#000000"
                    class="	"
                    style="fill: rgb(240, 185, 11)"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M 19.791 22 L 4.09 22 C 3.351 22 2.75 21.215 2.75 20.25 L 2.75 19.75 C 2.75 18.785 3.351 18 4.09 18 L 19.791 18 C 20.53 18 21.131 18.785 21.131 19.75 L 21.131 20.25 C 21.131 21.215 20.53 22 19.791 22 Z"
                    data-original="#000000"
                    class=""
                    style="fill: rgb(117, 128, 142)"
                  />
                </g>
              </svg>
            </span>
            <p>برداشت</p>
          </a>
          <a
            href="/wallet/dust"
            target="_self"
            class="grid justify-items-center"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 96 96"
                fill="none"
                class="css-sg71kl w-8 h-8"
              >
                <circle
                  r="20"
                  transform="matrix(1 0 0 -1 48 48)"
                  fill="#F8D33A"
                ></circle>
                <circle
                  r="13.684"
                  transform="matrix(1 0 0 -1 48 48.002)"
                  fill="url(#recover-deposit_svg__paint0_linear_26712_54999)"
                ></circle>
                <path
                  d="M40.632 48L48 55.37 55.368 48 48 40.632 40.632 48z"
                  fill="#F0B90B"
                ></path>
                <path
                  opacity="0.3"
                  d="M48 8c22.091 0 40 17.909 40 40S70.091 88 48 88v-8c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32V8zM82 11l3 3 3-3-3-3-3 3zM39 76l2 2 2-2-2-2-2 2zM8 25h3v-3H8v3z"
                  fill="#AEB4BC"
                ></path>
                <path
                  d="M8 48C8 25.909 25.909 8 48 8v8c-17.673 0-32 14.327-32 32 0 8.838 3.577 16.832 9.373 22.627L31 65v17H14l5.716-5.716C12.48 69.05 8 59.044 8 48z"
                  fill="url(#recover-deposit_svg__paint1_linear_26712_54999)"
                ></path>
                <defs>
                  <linearGradient
                    id="recover-deposit_svg__paint0_linear_26712_54999"
                    x1="13.684"
                    y1="0"
                    x2="13.684"
                    y2="27.368"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F0B90B"></stop>
                    <stop offset="1" stop-color="#F8D33A"></stop>
                  </linearGradient>
                  <linearGradient
                    id="recover-deposit_svg__paint1_linear_26712_54999"
                    x1="28"
                    y1="8"
                    x2="28"
                    y2="82"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#929AA5"></stop>
                    <stop offset="1" stop-color="#76808F"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <p>موجودی اندک</p>
          </a>
        </div>

        <!-- search box and filter -->
        <div class="flex flex-row px-4">
          <div></div>
          <div class="flex flex-row gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <p>عدم نمایش صفرها</p>
          </div>
        </div>

        <!-- coin list -->
        <div>
          <div class="space-y-4">
            <div
              v-for="(key, index) in price"
              :key="index.id"
              dir="rtl"
              class="flex flex-row justify-between px-4"
            >
              <div class="flex basis-1/4">
                <div class="flex flex-col">
                  <img
                    :src="`https://changekon.ir/coins/logo/${index}.webp`"
                    alt=""
                    class="w-12 h-12 rounded-full"
                  />
                  <h3 class="flex justify-center">${{ key }}</h3>
                </div>
              </div>
              <div class="flex flex-row">
                <div class="flex self-center justify-center font-bold">
                  {{ index }}
                </div>
              </div>

              <div class="flex flex-row">
                <div class="flex self-center">0 تومان</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch(
  "https://changekon.com/api/v2/core/coins/price"
);
// const amount = data.value.data
const price = data.value.data;
</script>

<style></style>
