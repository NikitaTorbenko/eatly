<script setup lang="ts">
import type { IRestaurant } from "@/shared/types";

const props = defineProps<IRestaurant>();
</script>

<template>
  <div class="restaurant-card">
    <div class="card-img">
      <img class="food-img" :src="props.image" />
    </div>
    <div class="card-text">
      <div class="food-category">
        <p class="food-type">{{ props.category }}</p>
      </div>
      <div class="card-info">
        <div class="info-title">
          <h1 class="title">{{ props.name }}</h1>
          <div class="info-text">
            <p class="info-time">{{ props.delivery_time }} •</p>
            <img class="info-img" src="../assets/icons/star.svg" alt="" />
            <p class="info-time">{{ props.rating }}</p>
          </div>
        </div>
        <div class="favourite">
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
  margin-bottom: 100px;
  height: 236px;
  width: 315px;
  border-radius: 24px;
  overflow: hidden;

  @media (min-width: v.$tablet) {
    width: 280px;
    height: 220px;
    border-radius: 21px;
  }

  @media (min-width: v.$desctop) {
    width: 395px;
    height: 297px;
    border-radius: 30px;
    border: 1.25px;
  }
}

.card-img {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.food-img {
  object-fit: cover;
  width: 315px;
  height: 176px;

  @media (min-width: v.$tablet) {
    height: 125px;
    width: 281px;
  }

  @media (min-width: v.$desctop) {
    height: 176px;
    width: 395px;
  }
}

.food-category {
  display: inline-block;
  background-color: #f7c5ba;
  padding: 2px 6px;
  border-radius: 4px;

  @media (min-width: v.$tablet) {
  }

  @media (min-width: v.$desctop) {
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;
    padding: 3px 9px;
    border-radius: 5px;
  }
}

.food-type {
  color: #fb471d;
  font-size: 10px;
  line-height: 15px;
  font-weight: 400;

  @media (min-width: v.$tablet) {
    font-size: 9px;
    line-height: 14px;
    font-weight: 400;
  }

  @media (min-width: v.$desctop) {
    font-size: 13px;
    line-height: 16px;
    font-weight: 400;
  }
}

.card-text {
  padding: 10px 21px 13px 27px;
  border: 1px solid #f4f4f6;
  height: 150px;

  /* @media (min-width: v.$tablet) {
    
  } */
}

.info-img {
  @media (min-width: v.$tablet) {
    width: 12px;
    padding-bottom: 2px;
  }

  @media (min-width: v.$desctop) {
    width: 17px;
    padding-bottom: 2px;
  }
}

.card-info {
  display: flex;
  justify-content: space-between;
  gap: 10px;

  /* @media (min-width: v.$tablet) {
    padding: 0px 19px 13px 24px;
  }

  @media (min-width: v.$desctop) {
    padding: 0px 27px 18px 30px;
  } */
}

.title {
  white-space: nowrap;
  color: #323142;
  font-size: 20px;
  font-weight: 600;
  line-height: 33px;

  @media (min-width: v.$tablet) {
    font-size: 18px;
    line-height: 30px;
    font-weight: 600;
  }

  @media (min-width: v.$desctop) {
    font-size: 22px;
    font-weight: 600;
  }
}

.info-text {
  display: flex;
  align-items: center;
  gap: 5px;

  @media (min-width: v.$desctop) {
    gap: 10px;
  }
}

.info-time {
  color: #8e97a6;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;

  @media (min-width: v.$tablet) {
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }

  @media (min-width: v.$desctop) {
    font-size: 18px;
    font-weight: 400;
  }
}

.favourite {
  margin-top: 20px;
  display: flex;
  align-items: center;

  @media (min-width: v.$tablet) {
    margin-top: 10px;
  }

  @media (min-width: v.$desctop) {
    display: flex;
    align-items: center;
  }
}

.favourite-img {
  background-color: #dbd9ee;
  padding: 8px 10px;
  border-radius: 50%;

  @media (min-width: v.$desctop) {
    padding: 10px 14px;
  }
}
</style>
