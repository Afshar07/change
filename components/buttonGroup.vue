<template>
  <div class="grid py-2 space-y-2 grid-reverse grid-cols-4 md:grid-cols-8 gap-2 px-4">
<!-- کسب درآمد -->
      <button class="space-y-2">
        <span class="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 h-10">
            <g>
              <circle
                r="10"
                transform="matrix(1 0 0 -1 12 12)"
                fill="url(#paint0_linear)"
              ></circle>
              <path
                d="M13.088 20v-1.782c2.468-.408 3.62-1.949 3.62-3.768 0-1.893-1.244-2.951-3.843-3.545V7.824c.89.204 1.485.612 1.93 1.113l1.69-1.522c-.817-.928-1.912-1.503-3.397-1.67V4h-2.116v1.745c-2.395.278-3.675 1.578-3.675 3.526 0 1.8 1.132 3.026 3.916 3.601v3.341c-1.04-.148-1.912-.65-2.617-1.392l-1.67 1.522c.927 1.021 2.171 1.782 4.046 1.95V20h2.116zM9.858 9.197c0-.724.408-1.225 1.355-1.41v2.747c-.947-.26-1.355-.631-1.355-1.337zm4.288 5.457c0 .706-.409 1.281-1.281 1.522v-2.932c1.058.315 1.28.872 1.28 1.41z"
                fill="#76808F"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="10"
                  y1="0"
                  x2="10"
                  y2="20"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F0B90B"></stop>
                  <stop offset="1" stop-color="#F8D33A"></stop>
                </linearGradient>
              </defs>
            </g>
          </svg>
        </span>
        <p>کسب درآمد</p>
      </button>
<!-- قیمت لحظه ای -->
      <button class="space-y-2 px-4">
        <span class="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 h-10">
            <rect
              width="5"
              height="7"
              transform="matrix(1 0 0 -1 2 18)"
              fill="url(#paint0_linear)"
            ></rect>
            <path d="M2 18H7V21H2V18Z" fill="#76808F"></path>
            <rect
              width="5"
              height="8"
              transform="matrix(1 0 0 -1 17 16)"
              fill="url(#paint1_linear)"
            ></rect>
            <path d="M9.5 11H14.5V2H9.5V11Z" fill="url(#paint2_linear)"></path>
            <path d="M9.5 21H14.5V11H9.5V21Z" fill="#76808F"></path>
            <path d="M17 21H22V16H17V21Z" fill="#76808F"></path>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="2.5"
                y1="0"
                x2="2.5"
                y2="7"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F0B90B"></stop>
                <stop offset="1" stop-color="#F8D33A"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="2.5"
                y1="0"
                x2="2.5"
                y2="8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F0B90B"></stop>
                <stop offset="1" stop-color="#F8D33A"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear"
                x1="12"
                y1="11"
                x2="12"
                y2="2"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F0B90B"></stop>
                <stop offset="1" stop-color="#F8D33A"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <p>قیمت  </p>
      </button>
<!-- واریز -->
      <button class="space-y-2">
        <span class="flex justify-center">
          <svg
            viewBox="0 0 24 24"
            style="enable-background: new 0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10"
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
      </button>
<!-- تیکت -->
      <button class="space-y-2">
        <span class="flex justify-center">
          <svg
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10"
          >
            <rect
              x="226.989"
              y="153.486"
              width="141.549"
              height="184.043"
              style="
                stroke: rgb(0, 0, 0);
                stroke-width: 0px;
                fill: rgb(117, 128, 142);
              "
              rx="11.005"
              ry="11.005"
              transform="matrix(-0.71934, 0.694658, -0.694658, -0.71934, 677.781555, 185.166397)"
            />
            <g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M466.089,139.805c-25.928,25.928-67.966,25.928-93.895,0c-25.929-25.928-25.928-67.967,0-93.895L326.284,0L0,326.284    l45.911,45.911c25.928-25.928,67.967-25.928,93.895,0c25.928,25.928,25.928,67.967,0,93.895l45.91,45.91L512,185.716    L466.089,139.805z M255.519,182.946l-21.298-21.298l21.213-21.213l21.298,21.298L255.519,182.946z M298.115,225.543    l-21.299-21.298l21.213-21.213l21.299,21.298L298.115,225.543z M340.711,268.14l-21.298-21.299l21.213-21.213l21.298,21.299    L340.711,268.14z"
                    data-original="#000000"
                    class=""
                    style="fill: rgb(240, 185, 11)"
                  />
                </g>
              </g>
            </g>
          </svg>
        </span>
        <p>تیکت</p>
      </button>
<!-- مبدل ارزی -->
      <button class="space-y-2">
        <span class="flex justify-center">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10">
            <defs>
              <linearGradient
                id="paint1_linear"
                x1="2"
                y1="10.5"
                x2="22"
                y2="10.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop style="stop-color: rgb(117, 128, 142)" />
                <stop offset="1" style="" />
              </linearGradient>
              <linearGradient
                id="paint2_linear"
                x1="2"
                y1="10.5"
                x2="22"
                y2="10.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop style="stop-color: rgb(174, 180, 188)" />
                <stop offset="1" style="stop-color: rgb(174, 180, 188)" />
              </linearGradient>
            </defs>
            <rect
              x="2"
              y="4"
              width="20"
              height="15"
              style="fill: rgb(240, 185, 11)"
            />
            <path d="M22 10L2 10L2 7L22 7L22 10Z" fill="url(#paint1_linear)" />
            <path
              d="M10 14L4 14L4 12L10 12L10 14Z"
              fill="url(#paint2_linear)"
            />
          </svg>
        </span>
        <p>مبدل ارزی</p>
      </button>
<!-- سوالات متداول -->
      <NuxtLink to="https://help.changekon.com/faq/begin-with-changekon/" class="space-y-2">
        <span class="flex justify-center">
          <svg
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10"
          >
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                x1="256"
                y1="28.086"
                x2="256"
                y2="483.913"
                id="gradient-0"
              >
                <stop offset="0" style="stop-color: rgb(248, 211, 58)" />
                <stop offset="1" style="stop-color: rgb(240, 185, 11)" />
              </linearGradient>
            </defs>
            <g>
              <rect
                x="83.527"
                y="119.87"
                width="368.538"
                height="190.007"
                style="stroke: rgb(117, 128, 142); fill: rgb(117, 128, 142)"
              />
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="m372.7 155.856c-11.199 0-17.799 6.4-17.799 19.999v52.999c0 9.2 2.799 15 8.199 18v-8.8c0-6.6 4.801-9.4 9.6-9.4 4.801 0 9.6 2.8 9.6 9.4v8.8c5.201-3 8.4-8.8 8.4-18v-52.999c0-13.599-6.799-19.999-18-19.999z"
                data-original="#000000"
                class=""
                style="fill: rgb(248, 211, 58)"
              />
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="m230.903 220.054h29.2l-14.6-53.599z"
                data-original="#000000"
                class=""
                style="fill: rgb(248, 211, 58)"
              />
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="m397 28.086h-282c-63.411 0-115 51.589-115 115v110c0 58.33 43.648 106.655 100 114.026v101.801c0 6.067 3.654 11.537 9.26 13.858 1.855.769 3.805 1.142 5.737 1.142 3.903 0 7.74-1.524 10.609-4.394l111.434-111.433h159.96c63.411 0 115-51.589 115-115v-110c0-63.411-51.589-115-115-115zm-235.899 161.569c6 0 9.4 5.8 9.4 12.2 0 5.4-2.801 11.8-9.4 11.8h-30.199v51.6c0 6.4-7.801 9.6-15.6 9.6-7.801 0-15.6-3.2-15.6-9.6v-126.999c0-6.4 6.799-9.6 13.6-9.6h69.398c6.6 0 9.4 7 9.4 13.4 0 7.4-3.4 13.8-9.4 13.8h-51.799v33.799zm122.601 85.199c-5 0-9-1.6-10.199-5.8l-6.801-25h-42.199l-6.799 25c-1.201 4.2-5.201 5.8-10.201 5.8-8.6 0-20-5.4-20-12.8 0-.6.201-1.4.4-2.2l37.199-121.998c2.201-7 11.201-10.4 20.4-10.4s18.199 3.4 20.4 10.4l37.398 121.998c.199.8.4 1.6.4 2.2.002 7.4-11.398 12.8-19.998 12.8zm138.197-46c0 30.4-16.799 43.799-39.6 46.6v11.6c0 6.4-4.799 9.6-9.6 9.6-4.799 0-9.6-3.2-9.6-9.6v-11.6c-22.799-2.8-39.398-16.2-39.398-46.6v-52.999c0-34.6 21.398-47.199 48.998-47.199s49.199 12.6 49.199 47.199v52.999z"
                data-original="#000000"
                class=""
                style="fill: url(#gradient-0)"
              />
            </g>
          </svg>
        </span>
        <p class="text-sm">سوالات متداول</p>
      </NuxtLink>
<!-- آکادمی -->
      <NuxtLink to="https://blog.changekon.com/" class="space-y-2 flex flex-col">
        <span class="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" class="w-10 h-10">
            <g>
              <path
                d="M7 14.002L3.248 10.25l9.75 4.25 9.75-4.25L19 13.998V17.5l-6 6-6-6v-3.498z"
                fill="#76808F"
              ></path>
              <path
                d="M13.293 12.207l-6-6L3.25 10.25 13 20l9.75-9.75L13 .5 8.707 4.793l6 6-1.414 1.414z"
                fill="url(#paint0_linear)"
              ></path>
              <path
                d="M2.75 14L.5 16.25l2.25 2.25L5 16.25 2.75 14z"
                fill="#76808F"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="13"
                  y1="20"
                  x2="13"
                  y2=".5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F0B90B"></stop>
                  <stop offset="1" stop-color="#F8D33A"></stop>
                </linearGradient>
              </defs>
            </g>
          </svg>
        </span>
        <p class="flex justify-center">آکادمی</p>
      </NuxtLink>
<!-- کارت هدیه -->
      <NuxtLink to="https://changekon.ir/gift" class="space-y-2">
        <span class="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" class="w-10 h-10">
            <path d="M33 30H7V10H33V30Z" fill="url(#paint0_linear)"></path>
            <path
              d="M14.8 10H17.4V16.9825L20.7615 13.7504L22.6 15.5182L19.2388 18.75H33V21.25H19.2381L22.5997 24.4823L20.7611 26.25L17.4 23.0182V30H14.8V23.0183L11.4394 26.25L9.60101 24.4823L12.9621 21.25H7V18.75H12.9613L9.59996 15.5177L11.4385 13.7499L14.8 16.9825V10Z"
              fill="#76808F"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="20"
                y1="30"
                x2="20"
                y2="10"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F0B90B"></stop>
                <stop offset="1" stop-color="#F8D33A"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <p>کارت هدیه</p>
      </NuxtLink>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>