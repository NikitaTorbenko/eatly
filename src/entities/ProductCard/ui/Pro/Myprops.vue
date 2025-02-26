<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ object }}</p>

    <div class="card-list">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import ProductCard from "../ProductCard.vue";

// Определяем интерфейс для пропсов
interface Props {
  title: string;
  object: string;
}

// Получаем пропсы
const props = defineProps<Props>();
</script>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.card-list {
  padding: 0px 30px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 20px;

  @media (min-width: v.$tablet) {
    column-gap: 20px;
  }

  @media (min-width: v.$desctop) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
}
</style>
