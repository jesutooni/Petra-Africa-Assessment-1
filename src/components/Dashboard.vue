<template>
  <div class="pt-16">
    <header class="max-w-6xl mx-auto px-6 xl:px-0">
      <div class="flex">
        <div
          class="flex justify-center items-center bg-primary-red h-12 w-12 rounded-md mr-3"
        >
          <h1 class="text-white font-bold">P</h1>
        </div>
        <div
          class="w-48 h-12 px-4 flex items-center justify-between border border-primary-red rounded-md text-primary-red font-GT"
        >
          <h1 class="font-medium">Petra Africa</h1>
          <div
            class="w-4 h-4 bg-primary-red rounded-full flex items-center justify-center"
          >
            <span
              class="iconify"
              data-icon="clarity:caret-line"
              style="color: white"
              data-width="10"
              data-rotate="180deg"
            ></span>
          </div>
        </div>
      </div>
    </header>

    <nav
      class="mt-1.5 px-6 xl:px-0 max-w-6xl mx-auto font-GT text-primary-gray-dark hidden md:flex items-center justify-between"
    >
      <ul class="flex gap-7">
        <li
          v-for="nav in navs"
          :key="nav"
          class="py-6 cursor-pointer border-b-4 border-transparent duration-150 hover:border-primary-red hover:text-primary-red"
        >
          {{ nav }}
        </li>
      </ul>
      <div class="flex items-center gap-9">
        <div class="flex items-center gap-5">
          <h1>Go live</h1>
          <div class="w-12 h-7 p-1 bg-primary-red rounded-full cursor-pointer">
            <div class="w-1/2 h-full bg-white rounded-full"></div>
          </div>
        </div>
        <div class="flex items-center gap-5">
          <div
            class="h-10 w-10 rounded-full bg-primary-pink flex items-center justify-center"
          >
            <h1>I</h1>
          </div>
          <h1>Itunuoluwa Abidoye</h1>
        </div>
      </div>
    </nav>
    <hr />

    <main class="max-w-6xl mx-auto px-6 xl:px-0">
      <section>
        <div class="mt-16 mb-24 font-GT flex items-center justify-between">
          <div>
            <h1 class="text-xl">Today's trends</h1>
            <p class="text-primary-gray-light text-xs">
              As of 17th May 2021, 12:00 PM
            </p>
          </div>
          <div class="flex items-center gap-6">
            <div class="flex items-center gap-2 cursor-pointer">
              <span
                class="iconify"
                data-icon="eva:funnel-fill"
                style="color: #ff503f"
                data-width="20"
              ></span>
              <p class="text-primary-gray-mid">Filters</p>
            </div>
            <div class="flex items-center gap-2 cursor-pointer">
              <span
                class="iconify"
                data-icon="radix-icons:divider-horizontal"
                style="color: #9fa2b4"
                data-width="20"
              ></span>
              <p class="text-primary-gray-light">Days</p>
            </div>
            <div class="flex items-center gap-2 cursor-pointer">
              <span
                class="iconify"
                data-icon="radix-icons:divider-horizontal"
                style="color: #9fa2b4"
                data-width="20"
              ></span>
              <p class="text-primary-gray-light">Weeks</p>
            </div>
            <div class="flex items-center gap-2 cursor-pointer">
              <span
                class="iconify"
                data-icon="radix-icons:divider-horizontal"
                style="color: #ff503f"
                data-width="20"
              ></span>
              <p class="text-primary-red">Months</p>
            </div>
          </div>
        </div>

        <LineChart />
      </section>

      <section class="py-12">
        <div class="flex items-center justify-between mb-7">
          <h1 class="font-dm-sans font-bold text-xl">Account Expenses</h1>
          <div
            class="border border-primary-gray-border w-24 h-10 flex items-center justify-center gap-1 cursor-pointer"
          >
            <p class="text-primary-gray-mid text-sm font-dm-sans font-medium">
              This Year
            </p>
            <span
              class="iconify"
              data-icon="clarity:caret-line"
              style="color: #6b6b6b"
              data-rotate="180deg"
            ></span>
          </div>
        </div>
        <div class="md:flex gap-20">
          <div class="">
            <Doughnut />
          </div>
          <div class="md:flex flex-wrap gap-16">
            <div class="flex items-center mb-6 md:mb-0">
              <div class="w-2 h-2 bg-pie-blue rounded full"></div>
              <div class="font-dm-sans ml-3">
                <h1 class="text-sm text-primary-gray-mid">Rent & Lease</h1>
                <div class="flex items-center">
                  <h1 class="font-bold text-xl mr-3 w-28">$35,040.32</h1>
                  <div
                    class="bg-pie-blue bg-opacity-10 p-2 h-7 flex items-center justify-center rounded-full"
                  >
                    <p class="text-pie-dark-blue font-bold">24.3%</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center mb-6 md:mb-0">
              <div class="w-2 h-2 bg-pie-green rounded full"></div>
              <div class="font-dm-sans ml-3">
                <h1 class="text-sm text-primary-gray-mid">Maintenance</h1>
                <div class="flex items-center">
                  <h1 class="font-bold text-xl mr-3 w-28">$8,233.23</h1>
                  <div
                    class="bg-pie-green bg-opacity-10 p-2 h-7 flex items-center justify-center rounded-full"
                  >
                    <p class="text-pie-dark-green font-bold">14.4%</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center mb-6 md:mb-0">
              <div class="w-2 h-2 bg-pie-red rounded full"></div>
              <div class="font-dm-sans ml-3">
                <h1 class="text-sm text-primary-gray-mid">Shopping</h1>
                <div class="flex items-center">
                  <h1 class="font-bold text-xl mr-3 w-28">$2,990.00</h1>
                  <div
                    class="bg-pie-red bg-opacity-10 p-2 h-7 flex items-center justify-center rounded-full"
                  >
                    <p class="text-pie-dark-red font-bold">14.66%</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center mb-6 md:mb-0">
              <div class="w-2 h-2 bg-pie-brown rounded full"></div>
              <div class="font-dm-sans ml-3">
                <h1 class="text-sm text-primary-gray-mid">General</h1>
                <div class="flex items-center">
                  <h1 class="font-bold text-xl mr-3 w-28">$45,950.00</h1>
                  <div
                    class="bg-pie-brown bg-opacity-10 p-2 h-7 flex items-center justify-center rounded-full"
                  >
                    <p class="text-pie-dark-brown font-bold">29.37%</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center mb-6 md:mb-0">
              <div class="w-2 h-2 bg-pie-gray rounded full"></div>
              <div class="font-dm-sans ml-3">
                <h1 class="text-sm text-primary-gray-mid">Administrative</h1>
                <div class="flex items-center">
                  <h1 class="font-bold text-xl mr-3 w-28">$3,200.87</h1>
                  <div
                    class="bg-pie-gray bg-opacity-10 p-2 h-7 flex items-center justify-center rounded-full"
                  >
                    <p class="text-pie-dark-gray font-bold">5.5%</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center mb-6 md:mb-0">
              <div class="w-2 h-2 bg-pie-lilac rounded full"></div>
              <div class="font-dm-sans ml-3">
                <h1 class="text-sm text-primary-gray-mid">Transport</h1>
                <div class="flex items-center">
                  <h1 class="font-bold text-xl mr-3 w-28">$2,240.87</h1>
                  <div
                    class="bg-pie-lilac bg-opacity-10 p-2 h-7 flex items-center justify-center rounded-full"
                  >
                    <p class="text-pie-dark-lilac font-bold">7.75%</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center mb-6 md:mb-0">
              <div class="w-2 h-2 bg-pie-purple rounded full"></div>
              <div class="font-dm-sans ml-3">
                <h1 class="text-sm text-primary-gray-mid">Others</h1>
                <div class="flex items-center">
                  <h1 class="font-bold text-xl mr-3 w-28">$950.00</h1>
                  <div
                    class="bg-pie-purple bg-opacity-10 p-2 h-7 flex items-center justify-center rounded-full"
                  >
                    <p class="text-pie-dark-purple font-bold">2.62%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import LineChart from "./LineChart.vue";
import Doughnut from "./Doughnut.vue";
export default {
  components: {
    LineChart,
    Doughnut,
  },
  data() {
    return {
      navs: [
        "Overview",
        "Customers",
        "Balance",
        "Analytics",
        "Payment Links",
        "Settings",
      ],
    };
  },
};
</script>
