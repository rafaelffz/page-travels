<template>
  <div class="topbar w-full top-0 z-50 drop-shadow-sm border border-red-600">
    <header class="flex h-28 mx-16 justify-between items-center">
      <div class="flex gap-3 items-center hover:cursor-pointer">
        <span class="font-Volkhov text-2xl hover:opacity-80" @click="home">Trabook</span>
        <img class="w-5 h-5" src="@/assets/homeSection/logo.svg" alt="logo" />
      </div>

      <ul class="flex gap-8 items-center">
        <li
          class="hover:cursor-pointer hover:mb-1 hover:opacity-60 transition-all font-Poppins"
          v-for="item in menuItems"
          :key="item"
          @click="routes(item)"
        >
          {{ item }}
        </li>
      </ul>

      <div class="flex items-center gap-8">
        <div class="flex gap-5">
          <button
            class="py-3 rounded-md text-[#FD8D3A] text-base font-semibold font-Poppins hover:text-[#F16625] transition-all"
          >
            {{ $t("topBar.login") }}
          </button>

          <button
            class="bg-[#FA7436] px-8 py-3 rounded-md text-white font-Poppins text-base font-semibold hover:bg-[#F16625] transition-all"
          >
            {{ $t("topBar.signUp") }}
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
          </svg>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const menuItems = ["Sobre", "Destino", "Tour", "Blog"]
const router = useRouter()

function home() {
  router.push({
    name: "Home",
  })
}

function routes(item) {
  router.push({
    name: item,
  })
}
</script>

<style lang="scss" scoped></style>
