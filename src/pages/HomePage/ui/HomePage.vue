<script setup lang="ts">
import { ProductList } from "@/widgets/ProductList";
import StatisticBanner from "./StatisticBanner/StatisticBanner.vue";

const testList = [
  {
    id: 101,
    name: "Chicken Hell",
    category: "Healthy",
    price: 12.99,
    rating: 4.8,
    delivery_time: "24min",
    image: "https://example.com/images/chicken-hell.jpg",
  },
  {
    id: 102,
    name: "Swe Dish",
    category: "Trending",
    price: 19.99,
    rating: 4.9,
    delivery_time: "34min",
    image: "https://example.com/images/swe-dish.jpg",
  },
  {
    id: 101,
    name: "Chicken Hell",
    category: "Healthy",
    price: 12.99,
    rating: 4.8,
    delivery_time: "24min",
    image: "https://example.com/images/chicken-hell.jpg",
  },
  {
    id: 102,
    name: "Swe Dish",
    category: "Trending",
    price: 19.99,
    rating: 4.9,
    delivery_time: "34min",
    image: "https://example.com/images/swe-dish.jpg",
  },
  {
    id: 101,
    name: "Chicken Hell",
    category: "Healthy",
    price: 12.99,
    rating: 4.8,
    delivery_time: "24min",
    image: "https://example.com/images/chicken-hell.jpg",
  },
  {
    id: 102,
    name: "Swe Dish",
    category: "Trending",
    price: 19.99,
    rating: 4.9,
    delivery_time: "34min",
    image: "https://example.com/images/swe-dish.jpg",
  },
];
</script>

<template>
  <div class="">
    <StatisticBanner />
    <ProductList
      title="Our Top Dishes"
      :product-list="testList"
      is-view-all
      view-all-position="top"
    />
  </div>
</template>

<style scoped lang="scss"></style>
