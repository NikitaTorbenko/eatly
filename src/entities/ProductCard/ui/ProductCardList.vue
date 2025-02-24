<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
// import { ref } from 'vue'

// interface Props {

// }
</script>

<template>
  <div class="product-list">
    <h1 class="list-title">
      Our Top
      <span class="dishes">Dishes</span>
    </h1>
    <div class="card-list">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    <div class="veiw">
      <p class="veiw-text">View All</p>
      <img src="#" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.list-title {
  margin: 85px 124px 60px 124px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;

  @media (min-width: v.$tablet) {
    font-size: 32px;
    font-weight: 600;
    line-height: 18px;
  }

  @media (min-width: v.$desctop) {
    font-size: 45px;
    font-weight: 600;
    line-height: 26px;
  }
}

.dishes {
  color: var(--p-primary-600);
}

.card-list {
  padding: 0px 30px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 20px;

  @media (min-width: v.$tablet) {
    column-gap: 20px;
  }

  @media (min-width: v.$desctop) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
}

.veiw {
  padding: 36px 60px;
  display: flex;
  justify-content: flex-end;
}

.veiw-text {
  color: #acadb9;
  font-size: 20px;
  font-weight: 500;
  line-height: 45px;

  @media (min-width: v.$tablet) {
    font-size: 14px;
    font-weight: 500;
    line-height: 32px;
  }

  @media (min-width: v.$desctop) {
    font-size: 20px;
    font-weight: 500;
    line-height: 45px;
  }
}
</style>
