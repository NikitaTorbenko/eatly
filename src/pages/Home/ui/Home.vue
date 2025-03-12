<script setup lang="ts">
import { Review } from "@/entities/Review";
import { Banner } from "@/entities/Banner";
import { onMounted, ref, watch } from "vue";
import { useWindowSize } from "@/shared/hooks";
import { ProductList } from "@/widgets/ProductList";
import { RestaurantList } from "@/widgets/RestaurantList";
import {
  getPopularProducts,
  getRestaurants,
  getArticles,
  getReviews,
} from "../api";
import {
  type IProduct,
  type IRestaurant,
  type IArticle,
  type IViewAll,
  type IReviews,
} from "@/shared/types";
import ProductCard from "@/entities/ProductCard/ui/ProductCard.vue";
import { RestaurantCard } from "@/entities/RestaurantCard";
import ReviewsList from "@/widgets/ReviewsList/ui/ReviewsList.vue";

const { dimensions } = useWindowSize();

const restaurants = ref<IRestaurant[]>([]);
const popularProducts = ref<IProduct[]>([]);
const articles = ref<IArticle[]>([]);
const reviews = ref<IReviews[]>([]);

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

const getReviewsHandler = async () => {
  const { data } = await getReviews();
  reviews.value = data;
};

onMounted(() => {
  getRestaurantsHandler();
  getPopularProductsHandler();
  getArticlesHandler();
  getReviewsHandler();
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
  <div class="home">
    <!-- <ArticlesList
      title="Latest <span class='purple'>Articles</span>"
      :article-list="articles"
    /> -->

    <!-- <ReviewsList title="fasdasd" :review-list="reviews" /> -->

    <ReviewsList
      title="Our Top <span class='purple'>Dishes</span>"
      :review-list="reviews"
    />

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
