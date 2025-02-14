<script setup lang="ts">
import { links } from "@/shared/consts";
</script>

<template>
  <div class="link-list">
    <div class="link-item" v-for="item in links" :key="item.title">
      <router-link :to="item.link">
        {{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/app/styles/variables" as v;

.link-list {
  display: none;

  @media (min-width: v.$desctop) {
    display: flex;
    align-items: center;
    gap: 38px;
  }

  @media (min-width: v.$desctopLg) {
    gap: 53px;
  }
}

.link-item {
  font-size: 17px;
  font-weight: 600;
}
</style>
