<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getPopularProducts } from "../api";
import { ProductList } from "@/widgets/ProductList";
import StatisticBanner from "./StatisticBanner/StatisticBanner.vue";
import type { IProduct } from "@/shared/types";

const popularProducts = ref<IProduct[]>([]);

const getPopularProductsHandler = async () => {
  const { data } = await getPopularProducts();
  popularProducts.value = data;
};

onMounted(getPopularProductsHandler);
</script>

<template>
  <div class="home">
    <StatisticBanner />

    <!-- это остается тут -->
    <ProductList
      title='Our Top <span class="purple">Dishes</span>'
      :product-list="popularProducts"
      is-view-all
      view-all-position="bottom"
    />
    <!-- Это для второй главной (если смотреть на макет) -->
    <ProductList
      title="Our Top Dishes"
      :product-list="popularProducts"
      is-view-all
      view-all-position="top"
    />
    <ProductList title="Our Top Dishes" :product-list="popularProducts" />
  </div>
</template>

<style scoped lang="scss"></style>
