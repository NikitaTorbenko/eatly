<script setup lang="ts">
import { computed } from "vue";
import type { IRestaurant } from "@/shared/types";
import { RestaurantCard } from "@/entities/RestaurantCard";
import { ViewAll } from "@/entities/ViewAll";

interface Props {
  title: string;
  restaurantList: IRestaurant[];
  isViewAll?: boolean;
  viewAllPosition?: "bottom" | "top";
}

const props = withDefaults(defineProps<Props>(), {
  isViewAll: false,
});

const headerCenter = computed(() => {
  if (props.viewAllPosition && props.viewAllPosition === "bottom")
    return "header-center";

  return "";
});
</script>

<template>
  <div class="restaunrants">
    <div class="container">
      <div class="header" :class="headerCenter">
        <h2 class="title" v-html="props.title" />
        <ViewAll
          url="/"
          v-if="props.isViewAll && props.viewAllPosition === 'top'"
        />
      </div>
      <div class="restaurant-list">
        <RestaurantCard
          v-for="item in props.restaurantList"
          :key="item.id"
          v-bind="item"
        />
      </div>
      <ViewAll
        url="/"
        v-if="props.isViewAll && props.viewAllPosition === 'bottom'"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.header {
  margin-top: 140px;
  margin-bottom: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

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

.title {
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;

  @media (min-width: v.$tablet) {
    font-size: 32px;
    line-height: 18px;
  }

  @media (min-width: v.$desctop) {
    font-size: 45px;
    line-height: 26px;
  }
}
</style>
