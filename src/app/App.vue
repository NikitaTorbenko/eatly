<script setup lang="ts">
import { Header } from "@/entities/Header";
import { Footer } from "@/entities/Footer";
import ArticleList from "@/entities/Article/ui/ArticleList.vue";
import Banner from "@/entities/Banner/ui/Banner.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <ArticleList />
  <Banner />
</template>

<style lang="scss">
@import url("./styles/global.scss");
</style>
