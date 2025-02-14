<script setup lang="ts">
import { Header } from "@/entities/Header";
import { Footer } from "@/entities/Footer";
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style lang="scss">
@import url("./styles/global.scss");
</style>
