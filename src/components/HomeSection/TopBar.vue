<template>
  <div class="topbar w-full fixed top-0 z-50 bg-[#f0f0f0] drop-shadow-sm">
    <header class="flex h-28 mx-28 justify-between">
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

      <div class="flex items-center gap-2">
        <button
          class="px-8 py-3 rounded-md text-[#FD8D3A] text-base font-semibold font-Poppins hover:brightness-90 transition-all"
        >
          Login
        </button>

        <button
          class="bg-[#FA7436] px-8 py-3 rounded-md text-white font-Poppins text-base font-semibold hover:brightness-95 transition-all"
        >
          Sign up
        </button>
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
