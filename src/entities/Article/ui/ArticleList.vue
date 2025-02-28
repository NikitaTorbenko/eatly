<script setup lang="ts">
import { computed } from "vue";
import Article from "./Article.vue";

interface props {
  title: string;
}
</script>

<template>
  <div class="article-list">
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.article-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;

  @media (min-width: v.$tablet) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 33px;
    row-gap: 50px;
    justify-content: space-evenly;
  }

  @media (min-width: v.$desctop) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    column-gap: 77px;
    row-gap: 70px;
  }
}
</style>
