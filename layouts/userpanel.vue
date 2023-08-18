import { Header } from '../../.nuxt/components';
<template>
  <div class="md:p-10   reletive h-screen text-white">
    <div
      class="dashboard rounded-lg backdrop-filter backdrop-blur-lg backdrop-opacity-10"
      dir="rtl"
    >
      <nav class="bg-[#f4f7fb] max-sm:hidden text-black rounded-lg backdrop backdrop-opacity-80">
        <!-- <div class="text-2xl font-semibold px-20 py-8 grid gap-2">
            <img src="" alt="" class="w-10" />
            <span class="-mr-2"> داشبورد</span>
          </div> -->
        <ul class="flex flex-col divide-y divide-white w-[14rem]">
          <!-- مشخصات کاربری -->
          <li class="" @click="switchTab('profile')">
            <NuxtLink
             to="/dashboard" target="_self"
              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 focus:rounded-t-lg flex flex-row"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  fill="#4C9AFF"
                  fill-opacity="0.5"
                  d="M13.5 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
                ></path>
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12 1.25a5.186 5.186 0 00-5.19 5.19 5.17 5.17 0 004.995 5.18.76.76 0 00.093-.003.978.978 0 01.188 0 .829.829 0 00.1.003c2.786-.094 4.993-2.376 5.005-5.177V6.44A5.193 5.193 0 0012 1.25zM8.31 6.44A3.686 3.686 0 0112 2.75a3.686 3.686 0 01.177 7.369 2.59 2.59 0 00-.362 0A3.67 3.67 0 018.311 6.44zm9.277 7.496c-1.52-1.015-3.486-1.498-5.414-1.498-1.928 0-3.898.483-5.427 1.497l-.003.002c-1.365.914-2.147 2.19-2.147 3.562 0 1.371.782 2.646 2.149 3.555 1.524 1.02 3.492 1.506 5.42 1.506 1.93 0 3.899-.487 5.423-1.507 1.365-.914 2.148-2.19 2.148-3.562 0-1.371-.783-2.646-2.149-3.555zM6.096 17.5c0-.756.427-1.609 1.48-2.315 1.232-.816 2.896-1.246 4.597-1.246 1.702 0 3.36.43 4.581 1.246h.001c1.054.701 1.48 1.551 1.48 2.307s-.427 1.61-1.482 2.316c-1.225.82-2.886 1.253-4.587 1.253-1.701 0-3.362-.433-4.588-1.253l-.002-.001c-1.053-.701-1.48-1.552-1.48-2.307z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="font-medium mr-4">مشخصات کاربری</span>
            </NuxtLink>
          </li>
          <!-- احراز هویت -->
          <li class="" @click="switchTab('profile')">
            <NuxtLink
              to="/dashboard/Authentication" target="_self"
              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 flex flex-row"
            >
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
            </NuxtLink>
          </li>
          <!-- پیام ها  -->
          <li class="" @click="switchTab('profile')">
            <NuxtLink
              to="/dashboard/notifications" target="_self"
              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 flex flex-row"
            >
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
              <span class="font-medium mr-4">پیام ها </span>
            </NuxtLink>
          </li>
          <!-- مدیریت کارت ها  -->
          <li class="" @click="switchTab('profile')">
            <NuxtLink
              to="/dashboard/addCard" target="_self"
              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 flex flex-row"
            >
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
            </NuxtLink>
          </li>
          <!-- مدیریت API -->
          <li class="" @click="switchTab('profile')">
            <NuxtLink
            to="/dashboard/api" target="_self"
              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 flex flex-row"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M22 5H20V19H22V5Z" fill="#76808F"></path>
                <path d="M18 14L14 14L14 16L18 16L18 14Z" fill="#76808F"></path>
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
            </NuxtLink>
          </li>
         <!-- کسب درآمد  -->
          <li class="" @click="switchTab('profile')">
            <NuxtLink
            to="/dashboard/earnMoney" target="_self"
            class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 flex flex-row"
            >
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
            </NuxtLink>
          </li>
          <!--  قوانین و مقررات -->
          <li class="" @click="switchTab('profile')">
            <NuxtLink
              to="/term" target="_self"
              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 rounded-b-lg flex flex-row"
            >
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
            </NuxtLink>
          </li>
          <!-- راهنما و پشتیبانی  -->
          <li class="" @click="switchTab('profile')">
            <NuxtLink
            to="/dashboard/support" target="_self"

              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 rounded-b-lg flex flex-row"
            >
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
                          style="stroke: rgb(0, 0, 0); fill: rgb(240, 185, 11)"
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
            </NuxtLink>
          </li>
          <!-- تنظیمات -->
          <li class="" @click="switchTab('profile')">
            <NuxtLink
            to="/dashboard/settings"  target="_self"

              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 flex flex-row"
            >
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
            </NuxtLink>
          </li>
          <!-- خروج از حساب  -->
          <li class="" v-if="authenticated">
            <NuxtLink
              to="#"
              @click="logout"
              class="nav-link focus:bg-[#ebf3ff] focus:border-r-4 focus: border-indigo-500 rounded-b-lg flex flex-row"
            >
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

              <span class="font-medium mr-4 text-red-600"> خروج از حساب </span>
            </NuxtLink>
          </li>
          
        </ul>

      </nav>

      <div class="container md:px-4 md:py-5">
        <!-- content -->
        <!-- overflow-y-scroll max-h-[36rem] -->
        <div class="md:overflow-y-auto md:max-h-[32rem]">
          <slot/>

          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
const router = useRouter();
const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
const logout = () => {
  logUserOut();
  router.push('/');
};
// Data properties
const activeTab = ref('profile');
const isSidebarOpen = ref(false);

// Methods
const switchTab = (tab) => {
  activeTab.value = tab;
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>
<!-- <script>

export default {
  
  data() {
    return {
      activeTab: "profile",
      isSidebarOpen: false,
    };
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script> -->

<style scoped>
.dashboard {
  display: flex;
}

.navbar {
  border-right: 1px solid #e2e8f0;
  width: 240px;
}

.nav-link {
  text-decoration: none;
  padding: 1rem;
  transition: background-color 0.2s ease-in-out;
}
::-webkit-scrollbar {
  width: 10px;
  cursor: pointer !important;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #2b0366;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #20004f;
}

.dashboard-panel {
  border: 1px solid #ffffff;
  flex-grow: 1;
}

.header {
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}
</style>
