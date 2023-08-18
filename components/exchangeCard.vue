<template>
  <div
    class="bg-white/5 p-10 px-10 backdrop-filter shadow-lg rounded-lg backdrop-blur-lg backdrop-opacity-90"
  >
    <div class="flex justify-center">
      <div class="" dir="rtl">
        <!-- tab -->
        <div
          class="flex mb-4 rounded-lg bg-white/5 p-1 shadow-lg backdrop-blur-lg backdrop-opacity-90"
        >
          <div
            class="text-white"
            :class="[
              'w-1/2',
              'py-2',
              'text-center',
              'cursor-pointer',
              'rounded-lg',
              'transition',
              'duration-300',
              'ease-in-out',
              {
                'bg-green-500 text-white duration-500 -translate-x-1/6 ':
                  activeTab === 'buy',
              },
            ]"
            @click="activeTab = 'buy'"
          >
            خرید
          </div>
          <div
            class="text-white"
            :class="[
              'w-1/2',
              'py-2',
              'text-center',
              'cursor-pointer',
              'rounded-lg',
              'transition',
              'duration-300',
              'ease-in-out',
              {
                'bg-red-500 text-white duration-500  translate-x-1/6 ':
                  activeTab === 'sell',
              },
            ]"
            @click="activeTab = 'sell'"
          >
            فروش
          </div>
        </div>

        <!-- form -->
        <form>
          <div class="flex flex-col">
            <div v-if="activeTab === 'buy'" class="mb-4 flex flex-row-reverse">
              <SelectInput></SelectInput>
              <input
                id="buyCurrency"
                type="text"
                class="shadow-lg hover:border-gray-400 input input-ghost appearance-none rounded-l-lg py-2 px-3 text-white leading-tight focus:border-gray-700 focus:outline-none focus:shadow-outline focus:bg-white/5 focus:text-white"
                placeholder="پرداخت"
                dir="rtl"
              />
            </div>

            <div v-if="activeTab === 'sell'" class="mb-4 flex flex-row-reverse">
              <SelectInput></SelectInput>
              <input
                id="sellCurrency"
                type="text"
                class="shadow-lg hover:border-gray-400 input input-ghost appearance-none rounded-l-lg py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline focus:bg-white/5 focus:text-white"
                placeholder="دریافت"
              />
            </div>

            <svg
              @click="toggleSwitch"
              class="hover:cursor-pointer w-10 self-center pb-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.5"
              stroke="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>

            <div v-if="activeTab === 'sell'" class="mb-4 flex flex-row-reverse">
              <div
                class="appearance-none flex flex-row shadow-lg input input-ghost rounded-r-lg text-white border hover:border-gray-400 pl-10 leading-tight focus:outline-none focus:border-blue-500"
              >
                <img
                  src="../assets/pic/R.png"
                  alt=""
                  class="w-8 h-8 p-1 self-center"
                />
                <span class="text-white p-1 self-center shadow-lg">تومان</span>
              </div>

              <input
                id="buyCurrency"
                type="text"
                class="shadow-lg ml-2 input input-ghost hover:border-gray-400 appearance-none rounded-l-lg py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline focus:bg-white/5 focus:text-white"
                placeholder="پرداخت"
              />
            </div>

            <div v-if="activeTab === 'buy'" class="mb-4 flex flex-row-reverse">
              <div
                class="appearance-none flex flex-row shadow-lg input input-ghost rounded-r-lg text-white border hover:border-gray-400 pl-10 leading-tight focus:outline-none focus:border-blue-500"
              >
                <img
                  src="../assets/pic/R.png"
                  alt=""
                  class="w-8 h-8 p-1 self-center"
                />
                <span class="text-white p-1 self-center shadow-lg">تومان</span>
              </div>

              <input
                id="sellCurrency"
                type="text"
                class="shadow-lg ml-2 input input-ghost hover:border-gray-400 appearance-none rounded-l-lg py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline focus:bg-white/5 focus:text-white"
                placeholder="دریافت"
              />
            </div>
          </div>

          <!-- submit button -->
          <div class="flex items-center justify-between pt-3">
            <button
              v-if="activeTab === 'buy'"
              :class="[{ ' bg-green-500 text-white  ': activeTab === 'buy' }]"
              class="btn btn-block text-[#03e9f4] border-1 border-transparent hover:border-[#03e9f4] opacity-100 hover:mcs"
              type="button"
            >
              شروع تبادل
            </button>
            <button
              v-else="activeTab === 'sell'"
              :class="[{ ' bg-red-500 text-white': activeTab === 'sell' }]"
              class="btn btn-block text-[#03e9f4] border-1 border-transparent hover:border-[#03e9f4] opacity-100 hover:mcs"
              type="button"
            >
              شروع تبادل
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberValue: "", // Stores the input value
      isNumberValid: true, // Tracks if the input value is valid
      isActive: false,
      activeTab: "buy",
    };
  },
  methods: {
    toggleSwitch() {
      this.isActive = !this.isActive;
      return this.isActive
        ? (this.activeTab = "buy")
        : (this.activeTab = "sell");
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

input[type="text"] {
  width: 100%;
  padding: 0.5rem;
  border-width: 1px;
}
</style>
