<template>
  <!-- header web -->
  <header
    class="bg-white absolute shadow-sm sticky bottom-0 sm:top-0 shadow-gray-200 overflow-x-none hidden md:contents"
    dir="rtl"
  >
    <div class=" flex py-4" aria-label="Global">
      <!-- left side -->
      <div>
        <div class="flex lg:flex-1 gap-4">
          <a href="#" class=" flex flex-row px-8">
            <img
              class="h-8 w-8"
              src="../assets/logo.png"
              alt=""
            />
            <span class="flex self-center">چنج کن</span>
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <!-- center -->
      <div class="flex justify-center">
        <nav class="flex gap-x-6  ">
          <ul class="flex flex-row gap-12  self-center">
            <li>
              <a href='/'>خانه</a>
            </li>
            <li>
              <a href="/dashboard/price">قیمت</a>
            </li>
            <li>
              <a href="/market">بازار</a>
            </li>
            <li>
              <a href="/exchanges">تبدیلگر</a>
            </li>
            <li>
              <a href="/wallet">کیف پول</a>
            </li>
          </ul>
          <button
            class="text-blue-600/100 text-sm border px-4 border-blue-100 rounded-lg -mt-1 -mb-1 hover:bg-blue-500/10 hover:border-blue-500"
          >
            <a href="/"> وال گیت </a>
          </button>
        </nav>
      </div>

      <!-- left side -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end px-10">
        <button
          class="text-blue-600/100 text-sm border px-4 border-blue-100 rounded-lg -mt-1 -mb-1 hover:bg-blue-500/5 hover:border-[#e0e7ff] ml-2"
        >
        <a href="/login">  ورود </a> 
        </button>
        <button
          class="text-white text-sm border px-4 border-blue-100 rounded-lg -mt-1 -mb-1 bg-[#072857]"
        >
        <a href="/signup">  ثبت نام</a>
        </button>

        <!-- <div class="divider divider-horizontal "></div>
        <div class="hover:bg-blue-500/10 rounded-full hover:shadow-sm p-2 -my-2">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="gray"
            class="w-6 h-6 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
        </div>
        
        
        <input type="checkbox" class="toggle toggle-md ml-4 mr-2" checked /> -->
      </div>
    </div>

    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Product
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...products, ...callsToAction]"
                    :key="item.name"
                    as="a"
                    :href="item.href"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</DisclosureButton
                  >
                </DisclosurePanel>
              </Disclosure>
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Features</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Marketplace</a
              >
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Company</a
              >
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Log in</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";

import { initFlowbite } from "flowbite";
onMounted(() => {
  initFlowbite();
});
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const mobileMenuOpen = ref(false);
</script>
