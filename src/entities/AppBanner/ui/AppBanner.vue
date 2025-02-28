<script setup lang="ts">
import Button from "primevue/button";

// interface Props {

// }
</script>

<template>
  <div class="app-banner">
    <div class="container app-banner-inner">
      <div class="app-img">
        <img class="phone-img" src="../assets/phone.png" alt="" />
      </div>
      <div class="app-info">
        <h1 class="title">
          Premium <span class="title-quality">Quality</span> <br />
          For Your Health
        </h1>
        <ul class="list">
          <li class="list-item">
            Premium quality food is made with ingredients that <br />
            are packed with essential vitamins, minerals.
          </li>
          <li class="list-item">
            These foods promote overall wellness by support <br />
            healthy digestion and boosting immunity
          </li>
        </ul>
        <div class="download">
          <Button
            class="button-download"
            label="Download"
            icon="pi pi-arrow-right"
            icon-pos="right"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.app-banner-inner {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;

  @media (min-width: v.$tablet) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: v.$desctop) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.app-info {
  padding-bottom: 100px;

  @media (min-width: v.$tablet) {
    padding-top: 65px;
    padding-bottom: 55px;
  }

  @media (min-width: v.$desctop) {
    padding-top: 65px;
    padding-bottom: 55px;
  }
}

.app-img {
  margin-bottom: 65px;

  @media (min-width: v.$tablet) {
    margin: 85px 0px;
  }

  @media (min-width: v.$desctop) {
    margin: 120px 0px;
  }
}

.phone-img {
  width: 170px;
  height: 342px;

  @media (min-width: v.$tablet) {
    width: 216px;
    height: 433px;
  }

  @media (min-width: v.$desctop) {
    width: 304px;
    height: 610px;
  }
}

.title {
  color: #18181b;
  text-align: center;
  font-size: 30px;
  font-weight: 800;
  line-height: 34px;

  &-quality {
    color: var(--p-primary-600);
  }

  @media (min-width: v.$tablet) {
    font-size: 36px;
    font-weight: 700;
    line-height: 41px;
    text-align: start;
  }

  @media (min-width: v.$desctop) {
    font-size: 51px;
    font-weight: 700;
    line-height: 58px;
    text-align: start;
  }
}

.list {
  padding-top: 37px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: v.$tablet) {
    padding-top: 45px;
    display: flex;
    flex-direction: column;
    gap: 19px;
  }

  @media (min-width: v.$desctop) {
    padding-top: 63px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
}

.download {
  padding-top: 35px;
  text-align: center;

  @media (min-width: v.$tablet) {
    padding-top: 45px;
    text-align: start;
  }

  @media (min-width: v.$desctop) {
    padding-top: 65px;
    text-align: start;
  }
}

.button-download {
  padding: 13px 17px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;

  @media (min-width: v.$tablet) {
    padding: 14px 18px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
  }

  @media (min-width: v.$desctop) {
    padding: 20px 26px;
    border-radius: 15px;
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
  }
}

.list-item {
  color: #676767;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;

  @media (min-width: v.$tablet) {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  @media (min-width: v.$desctop) {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }
}
</style>
