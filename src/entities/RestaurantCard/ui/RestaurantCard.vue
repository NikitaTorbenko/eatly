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
  width: 100%;
  height: 236px;
  max-width: 390px;
  border-radius: 24px;
  overflow: hidden;
  @media (min-width: v.$tablet) {
    width: 280px;
    border-radius: 21px;
  }

  @media (min-width: v.$desctop) {
    width: 395px;
    border-radius: 30px;
    border: 1.25px;
  }
}

.card-img {
  height: 140px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
}

.food-img {
  width: 100%;
  height: 140px;
}

.food-category {
  margin-top: 15px;
  margin-left: 27px;
  display: inline-block;
  background-color: #f7c5ba;
  padding: 2px 6px;
  border-radius: 4px;

  @media (min-width: v.$tablet) {
    margin-left: 23px;
  }

  @media (min-width: v.$desctop) {
    margin-left: 30px;
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
  border: 1px solid #f4f4f6;

  height: 150px;
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
  position: relative;
  margin: 0px 21px 13px 27px;
  display: flex;
  justify-content: space-between;

  @media (min-width: v.$tablet) {
    margin: 0px 19px 13px 24px;
  }

  @media (min-width: v.$desctop) {
    margin: 0px 27px 18px 30px;
  }
}

.title {
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
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;

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
