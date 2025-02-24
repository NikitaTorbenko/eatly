<script setup lang="ts">
import { Header } from "@/entities/Header";
import { Footer } from "@/entities/Footer";
import ArticleList from "@/entities/Article/ui/ArticleList.vue";
import Banner from "@/entities/Banner/ui/Banner.vue";
import HomePage from "@/pages/HomePage/ui/HomePage.vue";
import ProductCard from "@/entities/ProductCard/ui/ProductCard.vue";
import ProductCardList from "@/entities/ProductCard/ui/ProductCardList.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <HomePage />
  <ProductCard />
  <ProductCardList />
</template>

<style lang="scss">
@import url("./styles/global.scss");
</style>
