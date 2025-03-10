<script setup lang="ts">
import type { IProduct } from "@/shared/types";
import { computed } from "vue";

const props = defineProps<IProduct>();

const integerPart = computed(() => Math.floor(props.price));
const decimalPart = computed(() => {
  const decimal = (props.price % 1).toFixed(2).split(".")[1];
  return decimal ? decimal : "00";
});
</script>

<template>
  <div class="card">
    <div class="card-img">
      <img :src="props.image" alt="" />
      <div class="heart">
        <img src="../assets/icons/heart.svg" alt="" />
      </div>
    </div>
    <div class="card-content">
      <div
        :style="{
          color: props.category.color,
          backgroundColor: props.category.background_color,
        }"
        class="food-category"
      >
        {{ props.category.title }}
      </div>
      <div class="food-name">
        {{ props.name }}
      </div>
      <div class="card-footer">
        <div class="card-info">
          <span class="time">{{ props.delivery_time }}•</span>
          <img class="star" src="../assets/icons/star.png" alt="" />
          <span class="rating">{{ props.rating }}</span>
        </div>
        <div class="card-order">
          <div class="card-price">${{ props.price }}</div>
          <div class="card-plus">
            <img class="plus-img" src="../assets/icons/plus.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <img class="star-img" src="../assets/icons/star.png" alt="" /> -->
<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.card {
  padding: 20px 15px 15px;
  min-width: 145px;
  width: 100%;
  max-width: 225px;
  border: 1.5px solid #f4f4f6;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 7px 82px 40px #e5e5e5b2;
}

.card-img {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  width: 100%;
  height: auto;
  // margin: 10px auto;
}

.heart {
  position: absolute;
  right: 0;
  top: 0;
  width: 15px;
  height: 12px;
}

.card-content {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.food-category {
  width: fit-content;
  padding: 2px 5px;
  border-radius: 5px;

  @media (min-width: v.$tablet) {
    padding: 3px 8px;
    font-size: 20px;
  }
}

.food-name {
  color: #323142;
  font-size: 15px;
  font-weight: 600;

  @media (min-width: v.$tablet) {
    font-size: 23px;
  }
}

.card-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #8e97a6;

  @media (min-width: v.$tablet) {
    font-size: 17px;
  }
}

.card-footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.star {
  width: 15px;
  padding-bottom: 3px;
}

.card-order {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-price {
  color: #323142;
  font-size: 18px;
  font-weight: 700;
}

.card-plus {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #323142;
}

.plus-img {
  width: 15px;
  height: 15px;
}
</style>
