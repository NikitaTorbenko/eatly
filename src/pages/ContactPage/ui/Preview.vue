<script setup lang="ts">
import Arrow from "../assets/img/arrow.vue";
</script>

<template>
  <div class="preview">
    <div class="preview-mobile">
      <h2 class="preview-title">Contact Us</h2>
      <Arrow class="preview-arrow" />
    </div>

    <div class="preview-desctop">
      <img class="stars" src="../assets/img/stars.png" alt="" />
      <h3 class="preview-title">Just Contact</h3>
      <img class="big-arrow" src="../assets/img/bigArrow.png" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.preview {
  max-width: 330px;
  width: 100%;
  height: 150px;
  padding: 23px;
  background-color: var(--p-primary-600);
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  @media (min-width: v.$tablet) {
    margin: 0;
    height: auto;
    flex-grow: 1;
    max-width: 380px;
  }

  @media (min-width: v.$desctop) {
    max-width: 530px;
  }

  &-mobile {
    width: fit-content;
    position: relative;

    @media (min-width: v.$tablet) {
      display: none;
    }
  }

  &-title {
    font-size: 24px;
    font-weight: 600;
    color: #f9f9f9;
    width: fit-content;

    @media (min-width: v.$tablet) {
      font-size: 34px;
      margin: 0 auto;
    }
  }

  &-arrow {
    position: absolute;
    left: -87px;
    bottom: -5px;
  }

  &-desctop {
    display: none;

    @media (min-width: v.$tablet) {
      margin-top: 37px;
      display: block;
      position: relative;
    }
  }
}

.stars {
  position: absolute;
  top: -20px;
  left: 13%;
  width: 21px;
  height: 40px;

  @media (min-width: v.$desctop) {
    width: auto;
    height: auto;
    top: -30px;
    left: 9%;
  }
}
</style>
