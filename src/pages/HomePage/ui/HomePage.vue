<script setup lang="ts">
import { onMounted, ref } from "vue";
import { AppBanner } from "@/entities/AppBanner";
import { ProductList } from "@/widgets/ProductList";
import { RestaurantList } from "@/widgets/RestaurantList";
import { getPopularProducts, getRestaurants } from "../api";
import type { IProduct, IRestaurant } from "@/shared/types";
import StatisticBanner from "./StatisticBanner/StatisticBanner.vue";

const restaurants = ref<IRestaurant[]>([]);
const popularProducts = ref<IProduct[]>([]);

const getPopularProductsHandler = async () => {
  const { data } = await getPopularProducts();
  popularProducts.value = data;
};

const getRestaurantsHandler = async () => {
  const { data } = await getRestaurants();
  restaurants.value = data;
};

onMounted(() => {
  getRestaurantsHandler();
  getPopularProductsHandler();
});
</script>

<template>
  <div class="home">
    <RestaurantList
      title="Our Top <span class='purple'>Restaurants</span>"
      :restaurant-list="restaurants"
      is-view-all
      view-all-position="top"
    />

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
