<script setup lang="ts">
import { imgs } from "../consts";
</script>

<template>
  <div class="footer-links">
    <img v-for="(item, index) in imgs" :key="index" :src="item.icon" alt="" />
  </div>
</template>

<style scoped lang="scss">
.footer-links {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
