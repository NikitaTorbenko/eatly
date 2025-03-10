<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { ProductList } from "@/widgets/ProductList";
import { ArticlesList } from "@/widgets/ArticlesList";
import { RestaurantList } from "@/widgets/RestaurantList";
import { getPopularProducts, getRestaurants, getArticles } from "../api";
import type { IProduct, IRestaurant, IArticle, IViewAll } from "@/shared/types";
import StatisticBanner from "./StatisticBanner/StatisticBanner.vue";
import { useWindowSize } from "@/shared/hooks";
import { Banner } from "@/entities/Banner";
const { dimensions } = useWindowSize();

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

const position = ref<IViewAll>("bottom");

watch(dimensions.width, () => {
  if (dimensions.width.value >= 750) {
    position.value = "bottom";
  } else {
    position.value = "top";
  }
});
</script>

<template>
  <div class="home container">
    <!-- <ArticlesList
      title="Latest <span class='purple'>Articles</span>"
      :article-list="articles"
    /> -->

    <!-- <RestaurantList/> -->

    <Banner />

    <RestaurantList
      title="Our Top <span class='purple'>Restaurants</span>"
      :restaurant-list="restaurants"
      is-view-all
      :view-all-position="position"
    />

    <!-- это остается тут -->
    <ProductList
      title="Our Top <span class='purple'>Dishes</span>"
      :product-list="popularProducts"
      is-view-all
      :view-all-position="position"
    />
    <!-- Это для второй главной (если смотреть на макет) -->
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.rest {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  @media (min-width: v.$tablet) {
    flex-direction: row;
    justify-content: space-evenly;
    gap: 20px;
  }

  @media (min-width: v.$desctop) {
    display: flex;
    justify-content: space-evenly;
    gap: 30px;
  }
}
</style>
