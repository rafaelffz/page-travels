<template>
  <div>
    <TopBar />
    <Main />
    <Title />
    <Cards />
  </div>
</template>

<script setup>
import TopBar from '@/components/HomeSection/TopBar.vue';
import Main from '@/components/HomeSection/Main.vue';
import Title from '@/components/ToDoSection/Title.vue';
import Cards from "@/components/ToDoSection/Cards.vue"
</script>