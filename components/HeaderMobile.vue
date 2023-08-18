<template>
  <!-- header mobile -->
  <header class="md:hidden">
    <!-- drawer init and show -->
    <div class="text-center flex justify-between px-2 pt-2">
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      class="w-8 h-8"
        type="button"
        data-drawer-target="drawer-navigation"
        data-drawer-show="drawer-navigation"
        aria-controls="drawer-navigation"
      
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7 13C4.79086 13 3 14.7909 3 17V21H21V17C21 14.7909 19.2091 13 17 13H15L12 16L9 13L7 13Z"
          fill="#76808F"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.5 6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11C14.4853 11 16.5 8.98528 16.5 6.5Z"
          fill="url(#paint0_linear_7_82)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_7_82"
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        />
      </svg>
    </div>

    <!-- drawer component -->
    <div
      id="drawer-navigation"
      class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-screen dark:bg-gray-800"
      tabindex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <div
        id="drawer-navigation-label"
        class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        <!-- header -->
        <div class="flex gap-3">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- close button -->
      <button
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <!-- section info user(email and ID) -->
      <div class="py-4 space-y-2">
        <!-- Email -->
        <div class="flex flex-row">
          <div @click="toggleVisibility" class="w-1/2 self-center">
            <!-- eye -->
            <div v-if="visible" class="flex flex-row gap-2">
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
              <p>arian6865@gmail.com</p>
            </div>
            <!-- eye slash -->
            <div v-else class="flex flex-row gap-2">
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
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <p>a...5@gmail.com</p>
            </div>
          </div>
          <!-- confirmation -->
          <div class="w-1/2 pl-16">
            <div class="bg-red-200 flex flex-row p-2 gap-2 rounded-l-2xl">
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="w-6 h-6 border-2 border-red-50 rounded-full"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </span>
              <p class="text-red-600">تایید نشده</p>
            </div>
          </div>
        </div>
        <!-- ID -->
        <div>
          <div class="flex flex-row gap-2">
            <button>
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
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                />
              </svg>
            </button>
            <p>ID:8475327759</p>
          </div>
        </div>
      </div>
      <!-- section level user -->
      <div
        class="flex flex-row justify-between rounded-lg bg-gray-500/5 px-2 py-2"
      >
        <span class="text-[#d97706]">سطح 1</span>
        <span class="text-[#d97706]">مشاهده سطح کاربری</span>
      </div>
      <!-- nav -->
      <nav class="pt-8">
        <ul dir="rtl" class="space-y-10">
          <li>
            <NuxtLink
              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 rounded-b-lg flex flex-row justify-between"
            >
              <div class="flex flex-row">
                <svg
                  viewBox="0 0 512 512"
                  style="enable-background: new 0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <g>
                    <g xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <g>
                          <ellipse
                            style="
                              stroke: rgb(0, 0, 0);
                              fill: rgb(240, 185, 11);
                            "
                            cx="252.494"
                            cy="256.958"
                            rx="222.525"
                            ry="222.525"
                          />
                          <circle
                            cx="256"
                            cy="378.5"
                            r="25"
                            data-original="#000000"
                            class=""
                            style="fill: rgb(117, 128, 142)"
                          />
                          <path
                            d="M256,0C114.516,0,0,114.497,0,256c0,141.484,114.497,256,256,256c141.484,0,256-114.497,256-256     C512,114.516,397.503,0,256,0z M256,472c-119.377,0-216-96.607-216-216c0-119.377,96.607-216,216-216     c119.377,0,216,96.607,216,216C472,375.377,375.393,472,256,472z"
                            data-original="#000000"
                            class=""
                            style="fill: rgb(240, 185, 11)"
                          />
                          <path
                            d="M256,128.5c-44.112,0-80,35.888-80,80c0,11.046,8.954,20,20,20s20-8.954,20-20c0-22.056,17.944-40,40-40     c22.056,0,40,17.944,40,40c0,22.056-17.944,40-40,40c-11.046,0-20,8.954-20,20v50c0,11.046,8.954,20,20,20     c11.046,0,20-8.954,20-20v-32.531c34.466-8.903,60-40.26,60-77.469C336,164.388,300.112,128.5,256,128.5z"
                            data-original="#000000"
                            class=""
                            style="fill: rgb(117, 128, 142)"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>

                <span class="font-medium mr-4"> راهنما و پشتیبانی </span>
              </div>
              <div>
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
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 flex flex-row justify-between"
            >
              <div class="flex flex-row">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
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
                  <path
                    d="M22 10L2 10L2 7L22 7L22 10Z"
                    fill="url(#paint1_linear)"
                  />
                  <path
                    d="M10 14L4 14L4 12L10 12L10 14Z"
                    fill="url(#paint2_linear)"
                  />
                </svg>
                <span class="font-medium mr-4">مدیریت کارت ها </span>
              </div>
              <div>
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
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </NuxtLink>
          </li>

          <li>
            <a
              href="/dashboard/Authentication"
              class="flex flex-row justify-between"
            >
              <div class="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#4C9AFF"
                    fill-opacity="0.5"
                    fill-rule="evenodd"
                    d="M6.5 11.5a3 3 0 00-3 3v4a3 3 0 003 3h12a3 3 0 003-3v-4a3 3 0 00-3-3h-12zm5.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M8.75 16a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM12 14.25a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M18.75 9.335V8c0-1.7-.25-3.42-1.29-4.712C16.39 1.961 14.627 1.25 12 1.25s-4.39.71-5.46 2.038C5.5 4.581 5.25 6.3 5.25 8v1.335c-1.165.136-2.104.458-2.78 1.135-.989.988-1.22 2.535-1.22 4.53v2c0 1.995.231 3.542 1.22 4.53.988.989 2.535 1.22 4.53 1.22h10c1.995 0 3.542-.231 4.53-1.22.989-.988 1.22-2.535 1.22-4.53v-2c0-1.995-.231-3.542-1.22-4.53-.677-.677-1.615-.999-2.78-1.135zM7.71 4.23C7 5.11 6.75 6.39 6.75 8v1.251L7 9.25h10l.25.001V8c0-1.61-.25-2.89-.96-3.77-.68-.846-1.918-1.48-4.29-1.48s-3.61.634-4.29 1.48zM2.75 15c0-2.005.269-2.958.78-3.47.512-.511 1.465-.78 3.47-.78h10c2.005 0 2.958.269 3.47.78.511.512.78 1.465.78 3.47v2c0 2.005-.269 2.958-.78 3.47-.512.511-1.465.78-3.47.78H7c-2.005 0-2.958-.269-3.47-.78-.511-.512-.78-1.465-.78-3.47v-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="font-medium mr-4"> احراز هویت</span>
              </div>
              <div>
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
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </a>
          </li>

          <li>
            <NuxtLink
              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 flex flex-row justify-between"
            >
              <div class="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M22 5H20V19H22V5Z" fill="#76808F"></path>
                  <path
                    d="M18 14L14 14L14 16L18 16L18 14Z"
                    fill="#76808F"
                  ></path>
                  <path d="M18 8L14 8L14 10L18 10L18 8Z" fill="#76808F"></path>
                  <path
                    d="M4 13.0002L1.00006 13.0002L1.00006 11.0002L4 11.0002L4 13.0002Z"
                    fill="#76808F"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 12C3 15.866 6.13401 19 10 19H14V5H10C6.13401 5 3 8.13401 3 12Z"
                    fill="url(#paint0_linear_1288_6847)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1288_6847"
                      x1="8.5"
                      y1="19"
                      x2="8.5"
                      y2="5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F0B90B"></stop>
                      <stop offset="1" stop-color="#F8D33A"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <span class="font-medium mr-4"> مدیریت API </span>
              </div>
              <div>
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
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 flex flex-row justify-between"
            >
              <div class="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M3 12.9997L5 13V8.00031L3 8L3 12.9997Z"
                    fill="#76808F"
                  ></path>
                  <path
                    d="M16.9999 6L5.00146 6L5.00146 15L16.9999 15L21 19L20.9999 2L16.9999 6Z"
                    fill="url(#paint0_linear_6_14)"
                  ></path>
                  <path d="M14 15H7V22H11V17H14V15Z" fill="#76808F"></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_6_14"
                      x1="13.0007"
                      y1="19"
                      x2="13.0007"
                      y2="2"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F0B90B"></stop>
                      <stop offset="1" stop-color="#F8D33A"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <span class="font-medium mr-4">اعلان ها </span>
              </div>
              <div>
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
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 flex flex-row justify-between"
            >
              <div class="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
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
                <span class="font-medium mr-4"> کسب درآمد </span>
              </div>
              <div>
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
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 rounded-b-lg flex flex-row justify-between"
            >
              <div class="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.01379 21L20.0005 21C21.1051 21 22.0005 20.1046 22.0005 19V3H6.00048L6.00004 18.8572C6.00004 20.0358 5.11203 20.9921 4.01379 21ZM8.00048 11.0005H13.0005V17.0005H8.00048V11.0005ZM20.0005 11.0005H15.0005V13.0005H20.0005V11.0005ZM15.0005 15.0005H20.0005V17.0005H15.0005V15.0005Z"
                    fill="url(#paint0_linear_7_31)"
                  ></path>
                  <path
                    d="M18.0004 8.00049L10.0004 8.00049V6.00049H18.0004V8.00049Z"
                    fill="#76808F"
                  ></path>
                  <path
                    d="M2 18.8572V9.00005L6 9.00005L6 18.8572C6 20.0407 5.10457 21 4 21C2.89543 21 2 20.0407 2 18.8572Z"
                    fill="#76808F"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_7_31"
                      x1="16.5004"
                      y1="13.5"
                      x2="16.5004"
                      y2="2"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F0B90B"></stop>
                      <stop offset="1" stop-color="#F8D33A"></stop>
                    </linearGradient>
                  </defs>
                </svg>

                <span class="font-medium mr-4"> قوانین و مقررات</span>
              </div>
              <div>
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
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 flex flex-row justify-between"
            >
              <div class="flex flex-row">
                <svg
                  viewBox="0 0 512 512"
                  style="enable-background: new 0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <g>
                    <g xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M455.68,212.48c-5.12-23.04-15.36-46.08-28.16-66.56l25.6-53.76l-35.84-35.84l-53.76,25.6    c-20.48-12.8-40.96-20.48-64-25.6L281.6,0h-51.2l-20.48,56.32c-23.04,5.12-43.52,15.36-64,28.16l-53.76-25.6L56.32,92.16    l25.6,53.76c-12.8,20.48-20.48,40.96-25.6,64L0,230.4v51.2l56.32,20.48c5.12,23.04,15.36,46.08,25.6,64l-25.6,53.76l35.84,35.84    l53.76-25.6c20.48,12.8,40.96,23.04,64,28.16L230.4,512h51.2l20.48-56.32c7.68-2.56,17.92-5.12,25.6-7.68l-40.96-40.96    C189.44,424.96,102.4,353.28,102.4,256c0-84.48,69.12-153.6,153.6-153.6c94.72,0,166.4,84.48,151.04,174.08L450.56,320    c2.56-7.68,5.12-12.8,5.12-20.48L512,281.6v-51.2L455.68,212.48z"
                          data-original="#000000"
                          class=""
                          style="fill: rgb(240, 185, 11)"
                        />
                      </g>
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M501.76,445.44L350.72,294.4c35.84-79.36-38.4-163.84-120.32-140.8l46.08,46.08c20.48,20.48,20.48,53.76,0,71.68    c-17.92,20.48-53.76,20.48-71.68,0l-46.08-43.52c-23.04,71.68,51.2,153.6,135.68,120.32L445.44,499.2    c15.36,15.36,38.4,15.36,53.76,0C514.56,486.4,514.56,460.8,501.76,445.44z"
                          data-original="#000000"
                          class=""
                          style="fill: rgb(117, 128, 142)"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <span class="font-medium mr-4"> تنظیمات </span>
              </div>
              <div>
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
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 rounded-b-lg flex flex-row justify-between"
            >
              <div class="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="red"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>

                <span class="font-medium mr-4 text-red-600">
                  خروج از حساب
                </span>
              </div>
              <div>
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
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style></style>
