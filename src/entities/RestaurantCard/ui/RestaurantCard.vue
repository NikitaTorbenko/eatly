<script setup lang="ts">
import type { IRestaurant } from "@/shared/types";

const props = defineProps<IRestaurant>();
</script>

<template>
  <div class="restaurant-card">
    <div class="restaurant-img">
      <img :src="props.image" alt="" />
    </div>
    <div class="restaurant-content">
      <div
        class="restaurant-category"
        :style="{
          color: props.category.color,
          backgroundColor: props.category.background_color,
        }"
      >
        {{ props.category.title }}
      </div>
      <div class="restaurant-name">{{ props.name }}</div>
      <div class="restaurant-footer">
        <div class="restaurant-info">
          <span class="restaurant-time">{{ props.delivery_time }} •</span>
          <span class="restaurant-rating">
            <img class="info-img" src="../assets/icons/star.svg" alt="" />
            {{ props.rating }}
          </span>
        </div>
        <div class="restaurant-favorite">
          <img
            class="favourite-img"
            src="../assets/icons/favourite.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.restaurant-card {
  min-width: 315px;
  width: 100%;
  max-width: 480px;
  border-radius: 24px;
  box-shadow: 4.73px 56.75px 28.38px 0px rgba(229, 229, 229, 0.7);
  background-color: #fff;

  @media (min-width: 790px) {
    width: auto;
  }

  @media (min-width: v.$desctop) {
    width: 100%;
    max-width: 395px;
  }
}

.restaurant-img {
  width: 100%;
  height: 140px;
  overflow: hidden;

  @media (min-width: v.$desctop) {
    height: 176px;
  }

  img {
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  }
}

.restaurant-content {
  padding: 8px 21px 13px;

  @media (min-width: v.$desctop) {
    padding: 11px 26px 17px;
  }
}

.restaurant-category {
  width: fit-content;
  padding: 5px 7px 3px;
  border-radius: 4px;
  font-size: 10px;

  @media (min-width: v.$tablet) {
    font-size: 9px;
  }

  @media (min-width: v.$desctop) {
    font-size: 11px;
  }
}

.restaurant-name {
  color: rgb(50, 49, 66);
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;

  @media (min-width: v.$desctop) {
    font-size: 26px;
  }
}

.restaurant-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.restaurant-info {
  display: flex;
  align-items: center;
  gap: 8px;

  color: rgb(142, 151, 166);
  font-size: 15px;

  @media (min-width: v.$desctop) {
    font-size: 19px;
  }
}

.info-img {
  margin-top: 2px;
  margin-right: 3px;
  width: 15px;
}

.restaurant-favorite {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--p-primary-200);
  border-radius: 50%;

  @media (min-width: v.$desctop) {
    width: 40px;
    height: 40px;
  }
}
.favourite-img {
  width: 15px;
  height: 20px;
}
</style>
