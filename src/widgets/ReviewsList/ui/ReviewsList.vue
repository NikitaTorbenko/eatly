<script setup lang="ts">
import { Review } from "@/entities/Review";
import type { IReviews } from "@/shared/types";
import { computed } from "vue";
import { useWindowSize } from "@/shared/hooks";

interface Props {
  title: string;
  reviewList: IReviews[];
}

const props = defineProps<Props>();

const { dimensions } = useWindowSize();

const list = computed(() => {
  if (dimensions.width.value >= 750) {
    return props.reviewList.slice(0, 2);
  }
  return props.reviewList;
});
</script>

<template>
  <div class="container">
    <div class="review-list">
      <Review v-if="list" v-for="item in list" :key="item.id" v-bind="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.review-list {
  @media (min-width: v.$tablet) {
    display: flex;
  }
}
</style>
