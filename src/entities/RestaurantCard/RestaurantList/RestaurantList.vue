<script setup lang="ts">
import RestaurantCard from "../ui/RestaurantCard.vue";
</script>

<template>
  <div class="container">
    <div class="restaurant-list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.restaurant-list {
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: v.$tablet) {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  @media (min-width: v.$desctop) {
    gap: 30px;
  }
}
</style>
