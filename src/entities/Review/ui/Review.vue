<script setup lang="ts">
import { ReviewStar } from "@/shared/assets/icons";
import type { IReviews } from "@/shared/types";
import { Rating } from "primevue";
import { Value } from "sass";

const props = defineProps<IReviews>();
</script>

<template>
  <div class="review-card">
    <div class="review">
      <div class="header">
        <div class="person-info">
          <div class="person-image">
            <img class="person-img" :src="props.person_image" alt="" />
          </div>
          <div class="person-name">
            <span class="name">{{ props.person_name }}</span>
            <span class="year">{{ props.person_year }}</span>
          </div>
        </div>
        <div class="kav">
          <img class="kav-img" src="../assets/kav.svg" alt="" />
        </div>
      </div>
      <div class="main">
        <p class="main-text">
          “ Online invoice payment helps companies save time, are faster and
          save maximum effort for the clients and save maximum effort. Online
          invoice payment helps companies save time ”
        </p>
      </div>
      <div class="footer">
        <Rating v-model="props.rating" :stars="5" readonly />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.review-card {
  background-color: #ffffff;
  width: 100%;
  min-width: 315px;
  max-width: 530px;
  border-radius: 20px;
}

.review {
  padding: 30px 45px;
  @media (min-width: v.$tablet) {
    padding: 30px 20px;
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  /* @media (min-width: v.$tablet) {
  } */
}

.person-img {
  border-radius: 100%;
  width: 50px;

  @media (min-width: v.$tablet) {
    width: 75px;
  }
}

.person-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.person-name {
  color: #030314;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 4px;

  @media (min-width: v.$tablet) {
    font-size: 20px;
  }
}

.year {
  font-size: 10px;
  color: #5e5d5d;
  @media (min-width: v.$tablet) {
    font-size: 16px;
  }
}

.kav-img {
  width: 35px;

  @media (min-width: v.$tablet) {
    width: 50px;
  }
}

.main {
  text-decoration: wavy;
  padding-top: 30px;
  font-size: 13px;
  line-height: 16px;
  color: #636363;
  font-style: italic;

  @media (min-width: v.$tablet) {
    font-size: 18px;
    line-height: 26px;
  }
}

.footer {
  padding-top: 35px;

  @media (min-width: v.$tablet) {
  }
}

.star-rating {
  width: 20px;
  height: 20px;
}
</style>
