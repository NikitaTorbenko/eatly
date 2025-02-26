<script setup lang="ts">
import { computed } from "vue";
import ViewAll from "./ViewAll.vue";
import type { IProduct } from "@/shared/types";
import { ProductCard } from "@/entities/ProductCard";

interface Props {
  title: string;
  productList: IProduct[];
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
  <div class="products-list">
    <div class="container">
      <div class="header" :class="headerCenter">
        <h2 class="title" v-html="props.title" />
        <ViewAll v-if="props.isViewAll && props.viewAllPosition === 'top'" />
      </div>
      <div class="card-list">
        <ProductCard
          v-for="item in props.productList"
          :key="item.id"
          v-bind="item"
        />
      </div>
      <ViewAll v-if="props.isViewAll && props.viewAllPosition === 'bottom'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.products-list {
  margin-top: 100px;
  margin-bottom: 120px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 75px;

  &-center {
    justify-content: center;
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

.card-list {
  padding: 0px 30px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 20px;

  margin-bottom: 66px;

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
