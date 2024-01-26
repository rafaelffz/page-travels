<template>
  <div class="flex flex-row mx-24 mt-24 justify-between">
    <section class="flex flex-col w-1/2">
      <h1 class="text-6xl font-Volkhov mb-8 font-bold z-20" v-html="$t('homeSection.mainText')"></h1>

      <p class="font-Poppins text-xl text-[#667] font-normal z-20">{{ $t("homeSection.secondaryText") }}</p>

      <button
        class="flex mt-28 bg-transparent hover:bg-[#FA7436] hover:text-white transition-all hover:drop-shadow-lg items-center justify-center rounded-md py-3 px-3 border border-[#FA7436] w-40 h-[60px] text-lg font-medium text-[#FA7436]"
      >
        {{ $t("homeSection.button") }}
      </button>
    </section>

    <section class="flex justify-center self-end w-1/3">
      <img
        class="absolute w-[750px] h-[190px] top-[20%] right-[-8%] opacity-40 z-10"
        src="@/assets/homeSection/avioes.png"
        alt="aviões"
      />

      <div class="flex relative justify-center">
        <div
          class="flex items-center justify-center absolute bg-white w-36 h-16 rounded-xl z-10 left-[-20%] top-[15%] px-2 gap-3 drop-shadow-lg"
        >
          <img src="@/assets/homeSection/trophy.svg" alt="" />

          <p class="font-Poppins text-base font-medium text-[#444]">{{ $t("homeSection.leftCard") }}</p>
        </div>

        <div
          class="grid grid-cols-3 grid-rows-2 items-center absolute bg-white w-[170px] h-18 rounded-xl z-20 right-[-10%] top-[48%] drop-shadow-lg pb-2"
        >
          <img
            class="flex row-span-2 self-center justify-self-center"
            src="@/assets/homeSection/google-maps.svg"
            alt=""
          />

          <p class="font-Poppins text-base font-medium text-[#444] pt-2">Explore!</p>
          <p class="col-span-2 font-Poppins pr-1 text-xs text-[#444]">{{ $t("homeSection.rightCard") }}</p>
        </div>

        <img class="z-10 w-[500px]" src="@/assets/homeSection/tourist.png" alt="imagem de turista" />
        <img class="absolute bottom-0 z-0" src="@/assets/homeSection/Ellipse.svg" alt="" />
      </div>
    </section>
  </div>

  <section
    class="grid grid-cols-4 bg-white w-[820px] h-32 items-center rounded-md drop-shadow-lg mt-14 mx-auto px-6 mb-32"
  >
    <div class="flex flex-col">
      <span class="flex items-center gap-1 font-Poppins text-base font-medium text-[#222] hover:cursor-pointer"
        >{{ $t('homeSection.locale') }} <i class="ph-bold ph-caret-down text-[#FA7436]"></i
      ></span>
      <span class="font-Poppins font-normal text-xs text-[#667]">{{ $t('homeSection.localeSub') }}</span>
    </div>

    <div>
      <span class="flex items-center gap-1 font-Poppins text-base font-medium text-[#222] hover:cursor-pointer"
        >{{ $t('homeSection.date') }} <i class="ph-bold ph-caret-down text-[#FA7436]"></i
      ></span>
      <span class="font-Poppins font-normal text-xs text-[#667]">{{ $t('homeSection.dateSub') }}</span>
    </div>

    <div>
      <span class="flex items-center gap-1 font-Poppins text-base font-medium text-[#222] hover:cursor-pointer"
        >{{ $t('homeSection.people') }}<i class="ph-bold ph-caret-down text-[#FA7436]"></i
      ></span>
      <span class="font-Poppins font-normal text-xs text-[#667]">{{ $t('homeSection.peopleSub') }}</span>
    </div>

    <button
      class="bg-[#FA7436] w-48 h-[60px] py-3 px-7 text-lg font-Poppins font-medium text-white rounded-md drop-shadow-md hover:drop-shadow-lg hover:bg-[#F16625] transition-all"
    >
      {{ $t('homeSection.buttonSecondary') }}
    </button>
  </section>
</template>

<script setup></script>

<style scoped></style>
