<script setup lang="ts">
import Article from "./Article.vue";
// import { ref } from 'vue'

// interface Props {

// }
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
@use "@/app/styles/variables" as v;

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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 77px;
    row-gap: 70px;
  }
}
</style>
