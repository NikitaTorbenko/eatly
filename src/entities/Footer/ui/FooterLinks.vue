<script setup lang="ts">
import { links } from "../consts";
</script>

<template>
  <div class="footer-content-text">
    <RouterLink
      v-for="(item, index) in links"
      :key="index"
      :to="item.link"
      class="footer-content-text-item"
    >
      {{ item.title }}
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.footer-content-text {
  padding: 0px 32px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.footer-content-text-item {
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  text-transform: uppercase;
  color: #606060;
}
</style>
