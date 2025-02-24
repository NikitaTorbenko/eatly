<script setup lang="ts">
import { Button, InputText } from "primevue";
import { ref, watch } from "vue";
import { useWindowSize } from "@/shared/hooks";

const email_placeholder = ref("Email Address");

const { dimensions } = useWindowSize();

watch(dimensions.width, () => {
  if (dimensions.width.value >= 750) {
    email_placeholder.value = "Enter Your Email Address";
  } else {
    email_placeholder.value = "Email Address";
  }
});

const value = ref("");
</script>

<template>
  <div class="container">
    <div class="banner">
      <h1 class="banner-title">GET 50%</h1>
      <div class="info">
        <InputText
          class="email"
          :placeholder="email_placeholder"
          type="text"
          v-model="value"
          variant="filled"
        />
        <Button class="subcribe" label="Subscribe" severity="help" />
      </div>
      <img class="food" src="../assets/food/food.png" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/app/styles/variables" as v;

.banner {
  width: 100%;
  position: relative;
  background-color: var(--p-primary-600);
  display: inline-block;
  opacity: 80%;
  border-radius: 15px;
}
.banner-title {
  margin-top: 36px;
  margin-bottom: 10px;
  text-align: center;
  color: #ffffff;
  font-size: 41px;
  font-weight: 800;
  line-height: auto;

  @media (min-width: v.$tablet) {
    margin-left: 48px;
    text-align: start;
  }
}

.info {
  position: relative;
  margin: 0px 28px;
  margin-bottom: 100px;

  @media (min-width: v.$tablet) {
    margin-left: 48px;
    font-size: 50px;
    font-weight: 800;
    line-height: auto;
    margin-bottom: 50px;
  }
}

.email {
  width: 100%;
  color: #878787;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 3%;
  width: 260px;
  height: 50px;
  border-radius: 9px;
  padding-right: 130px;

  @media (min-width: v.$tablet) {
    width: 300px;
    font-size: 11px;
    line-height: 17px;
    font-weight: 400;
    border-radius: 10px;
    padding-right: 130px;
  }

  @media (min-width: v.$desctop) {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    border-radius: 10px;
    padding-right: 115px;
  }
}

.subcribe {
  position: absolute;
  right: 12px;
  bottom: 8px;

  @media (min-width: v.$tablet) {
    position: absolute;
    padding: 10px 18px;
    border-radius: 8px;
    bottom: 5px;
    right: 420px;
  }

  @media (min-width: v.$desctop) {
    position: absolute;
    padding: 16px 24px;
    border-radius: 11px;
    bottom: 68px;
    right: 0px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 3%;
  }
}

.food {
  position: absolute;
  right: 75px;
  top: 170px;
  width: 170px;
  height: 170px;

  @media (min-width: v.$tablet) {
    width: 195px;
    height: 195px;
    top: 60px;
  }
  @media (min-width: v.$desctop) {
    width: 270px;
    height: 270px;
    top: 60px;
  }
}
</style>
