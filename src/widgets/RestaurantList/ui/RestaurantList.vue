<script setup lang="ts">
import { computed } from "vue";
import type { IRestaurant, IViewAll } from "@/shared/types";
import { RestaurantCard } from "@/entities/RestaurantCard";
import { ViewAll } from "@/entities/ViewAll";
import { useWindowSize } from "@/shared/hooks";

interface Props {
  title: string;
  restaurantList: IRestaurant[];
  isViewAll?: boolean;
  viewAllPosition?: IViewAll;
}

const props = withDefaults(defineProps<Props>(), {
  isViewAll: false,
});

const { dimensions } = useWindowSize();

const list = computed(() => {
  if (dimensions.width.value >= 1435) {
    return props.restaurantList.slice(0, 3);
  }
  return props.restaurantList;
});

const headerCenter = computed(() => {
  if (props.viewAllPosition && props.viewAllPosition === "bottom")
    return "header-center";

  return "";
});
</script>

<template>
  <div class="container">
    <div class="restaunrants">
      <div class="header" :class="headerCenter">
        <h2 class="title" v-html="props.title" />
        <ViewAll
          url="/"
          v-if="props.isViewAll && props.viewAllPosition === 'bottom'"
        />
      </div>
      <div class="restaurant-list">
        <RestaurantCard
          v-if="list"
          v-for="item in list"
          :key="item.id"
          v-bind="item"
        />
      </div>
      <ViewAll
        url="/"
        v-if="props.isViewAll && props.viewAllPosition === 'top'"
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
  align-items: center;
  gap: 40px;
  margin-bottom: 100px;

  @media (min-width: v.$tablet) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
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
