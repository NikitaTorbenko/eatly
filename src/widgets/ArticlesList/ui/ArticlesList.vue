<script setup lang="ts">
import type { IArticle } from "@/shared/types";
import { Article } from "@/entities/Article";

interface Props {
  title: string;
  articleList: IArticle[];
}
const props = defineProps<Props>();
</script>

<template>
  <div class="article-list">
    <Article v-for="item in props.articleList" :key="item.id" v-bind="item" />
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
