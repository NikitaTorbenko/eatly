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
  <div class="container">
    <h1 class="article-title" v-html="props.title"></h1>
    <div class="article-list">
      <Article v-for="item in props.articleList" :key="item.id" v-bind="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.article-title {
  margin-top: 100px;
  margin-bottom: 60px;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 1px;
}

.article-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  @media (min-width: v.$tablet) {
    display: flex;
    flex-direction: row;
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
