<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ArticlesList } from "@/widgets/ArticlesList";
import { RestaurantList } from "@/widgets/RestaurantList";
import { getPopularProducts, getRestaurants, getArticles } from "../api";
import type { IProduct, IRestaurant, IArticle } from "@/shared/types";
import StatisticBanner from "./StatisticBanner/StatisticBanner.vue";

const restaurants = ref<IRestaurant[]>([]);
const popularProducts = ref<IProduct[]>([]);
const articles = ref<IArticle[]>([]);

const getPopularProductsHandler = async () => {
  const { data } = await getPopularProducts();
  popularProducts.value = data;
};

const getRestaurantsHandler = async () => {
  const { data } = await getRestaurants();
  restaurants.value = data;
};

const getArticlesHandler = async () => {
  const { data } = await getArticles();
  articles.value = data;
};

onMounted(() => {
  getRestaurantsHandler();
  getPopularProductsHandler();
  getArticlesHandler();
});
</script>

<template>
  <div class="home">
    <ArticlesList title="Latest Articles" :article-list="articles" />

    <RestaurantList
      title="Our Top <span class='purple'>Restaurants</span>"
      :restaurant-list="restaurants"
      is-view-all
      view-all-position="top"
    />

    <StatisticBanner />

    <!-- это остается тут -->
    <!-- <ProductList
      title='Our Top <span class="purple">Dishes</span>'
      :product-list="popularProducts"
      is-view-all
      view-all-position="bottom"
    /> -->
    <!-- Это для второй главной (если смотреть на макет) -->
    <!-- <ProductList
      title="Our Top Dishes"
      :product-list="popularProducts"
      is-view-all
      view-all-position="top"
    />
    <ProductList title="Our Top Dishes" :product-list="popularProducts" /> -->
  </div>
</template>

<style scoped lang="scss"></style>
