<script setup lang="ts">
import { imgs } from "../consts";
</script>

<template>
  <div class="footer-links">
    <img
      class="footer-links-item"
      v-for="(item, index) in imgs"
      :key="index"
      :src="item.icon"
      alt=""
    />
  </div>
</template>

<style scoped lang="scss">
@use "@/app/styles/variables" as v;

.footer-links {
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: v.$desctop) {
    gap: 40px;
  }
}
.footer-links-item {
  width: 20px;
  height: 20px;

  @media (max-width: v.$desctop) {
    width: 15px;
    height: 15px;
  }
}
</style>
