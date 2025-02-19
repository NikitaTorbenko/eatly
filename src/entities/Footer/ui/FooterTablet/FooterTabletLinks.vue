<script setup lang="ts">
import { links } from "@/shared/consts";
</script>

<template>
  <div class="footer-content-text">
    <router-link
      v-for="(item, index) in links"
      :key="index"
      :to="item.link"
      class="footer-content-text-item"
    >
      {{ item.title }}
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@use "@/app/styles/variables" as v;

.footer-content-text {
  display: flex;
  align-items: center;
  gap: 70px;

  @media (max-width: v.$desctop) {
    gap: 50px;
  }
}

.footer-content-text-item {
  color: rgb(153, 153, 153);
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;

  @media (max-width: v.$desctop) {
    font-size: 12px;
    font-weight: 500;
    line-height: 19px;
  }
}
</style>
