<script setup lang="ts">
import { Header } from "@/entities/Header";
import { Footer } from "@/entities/Footer";
import FooterTablet from "@/entities/Footer/ui/FooterTablet.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <FooterTablet />
</template>

<style lang="scss">
@import url("./styles/global.scss");
</style>
