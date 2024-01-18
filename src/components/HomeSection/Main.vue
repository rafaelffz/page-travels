<template>
  <div class="grid grid-cols-2 mx-28 mt-20">
    <section class="flex flex-col">
      <h1 class="text-6xl font-Volkhov mb-8 font-bold z-20">
        Realize sua tão sonhada <span class="text-[#FA7436]">viagem</span> conosco!
      </h1>

      <p class="font-Poppins text-xl text-[#667] font-normal z-20">
        Temos uma equipe de profissionais de turismo que irá lhe fornecer os melhores hotéis e dicas para o local que
        deseja viajar.
      </p>

      <button
        class="flex mt-[45px] bg-transparent hover:bg-[#FA7436] hover:text-white transition-all hover:drop-shadow-lg items-center justify-center rounded-md py-3 px-3 border border-[#FA7436] w-40 h-[60px] text-lg font-medium text-[#FA7436]"
      >
        Descubra agora
      </button>
    </section>

    <section class="flex relative justify-end">
      <img class="absolute top-[-5%] z-10" src="@/assets/homeSection/avioes.png" alt="aviões" />

      <div
        class="flex items-center justify-center absolute bg-white w-36 h-16 rounded-xl z-10 left-3 top-[20%] px-2 gap-3 drop-shadow-lg"
      >
        <img src="@/assets/homeSection/trophy.svg" alt="" />

        <p class="font-Poppins text-base font-medium text-[#444]">Melhores ofertas!</p>
      </div>

      <div
        class="grid grid-cols-3 grid-rows-2 items-center absolute bg-white w-[170px] h-18 rounded-xl z-20 right-[-4%] top-[42%] drop-shadow-lg pb-2"
      >
        <img class="flex row-span-2 self-center justify-self-center" src="@/assets/homeSection/google-maps.svg" alt="" />

        <p class="font-Poppins text-base font-medium text-[#444] pt-2">Explore!</p>
        <p class="col-span-2 font-Poppins text-xs text-[#444]">Cada canto do mundo com nós!</p>
      </div>

      <img class="z-10" src="@/assets/homeSection/tourist.png" alt="imagem de turista" />
      <img class="absolute bottom-0" src="@/assets/homeSection/Ellipse.svg" alt="" />
    </section>
  </div>

  <section class="grid grid-cols-4 bg-white w-[820px] h-32 items-center rounded-md drop-shadow-lg mt-14 mx-auto px-6 mb-32">
    <div class="flex flex-col">
      <span class="flex items-center gap-1 font-Poppins text-base font-medium text-[#222] hover:cursor-pointer"
        >Local <i class="ph-bold ph-caret-down text-[#FA7436]"></i
      ></span>
      <span class="font-Poppins font-normal text-xs text-[#667]">Onde você está indo?</span>
    </div>

    <div>
      <span class="flex items-center gap-1 font-Poppins text-base font-medium text-[#222] hover:cursor-pointer"
        >Data <i class="ph-bold ph-caret-down text-[#FA7436]"></i
      ></span>
      <span class="font-Poppins font-normal text-xs text-[#667]">Quando você vai?</span>
    </div>

    <div>
      <span class="flex items-center gap-1 font-Poppins text-base font-medium text-[#222] hover:cursor-pointer"
        >Pessoas <i class="ph-bold ph-caret-down text-[#FA7436]"></i
      ></span>
      <span class="font-Poppins font-normal text-xs text-[#667]">Números de convidados</span>
    </div>

    <button
      class="bg-[#FA7436] w-48 h-[60px] py-3 px-7 text-lg font-Poppins font-medium text-white rounded-md drop-shadow-md hover:drop-shadow-lg hover:bg-[#F16625] transition-all"
    >
      Explorar agora
    </button>
  </section>
</template>

<script setup></script>

<style scoped></style>
