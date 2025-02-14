<script setup lang="ts">
// import { ref } from 'vue'

// interface Props {

// }
</script>

<template>
  <div class="card">
    <div class="card-img">
      <img class="heart" src="../assets/icons/heart.svg" alt="" />
      <img class="food-img" src="../assets/food/foodp.png" alt="" />
      <div class="food-type">Healthy</div>
    </div>
    <div class="card-text">
      <p class="text-title">Chicken Hell</p>
      <div class="text-content">
        <p class="text-time">24min •</p>
        <img class="star-img" src="../assets/icons/star.png" alt="" />
        <div class="text-rate">4.8</div>
      </div>
    </div>
    <div class="card-button">
      <p class="card-price">$12<span class="second-price">.99</span></p>
      <button class="card-buy">
        <img class="plus-button" src="../assets/icons/plus.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  background-color: #ffffff;
  border: 1px solid rgb(244, 244, 246);
  border-radius: 23px;
  width: 147px;
  height: 255px;
}
.card-img {
  padding: 17px 12px 7px 4px;
}
.heart {
  position: absolute;
  right: 15px;
}
.food-img {
  width: 130px;
  height: 135px;
}
.food-type {
  position: absolute;
  left: 14px;
  bottom: 90px;
  display: inline;
  padding: 2px 5px;
  color: rgb(218, 163, 26);
  background-color: rgb(247, 237, 208);
  border-radius: 3px;
  font-size: 7px;
  font-weight: 400;
  line-height: 11px;
}
.card-text {
  padding: 0px 36px 9px 15px;
}
.text-content {
  display: flex;
  align-items: center;
  gap: 4px;
}
.text-title {
  color: rgb(50, 49, 66);
  font-size: 15px;
  font-weight: 600;
  line-height: 25px;
}
.text-time,
.text-rate {
  color: #8e93a6;
  font-size: 11px;
  font-weight: 400;
  line-height: 15px;
}
.star-img {
  width: 10px;
  height: 12px;
  padding-bottom: 2px;
}
.card-button {
  padding: 0px 18px 19px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card-price,
.second-price {
  color: #323142;
  font-size: 17px;
  font-weight: 700;
  line-height: 26px;
}
.second-price {
  color: #8e97a6;
  font-size: 12px;
}
.card-buy {
  display: flex;
  align-items: center;
  padding: 10px 10px;

  background-color: #323142;
  border-radius: 6px;
  font-size: 15px;
  color: white;
}
.plus-button {
  width: 15px;
  height: 15px;
}
</style>
