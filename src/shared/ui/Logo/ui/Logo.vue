<script setup lang="ts">
import Logo from "../assets/img/Logo.png";
</script>

<template>
  <div class="logo">
    <img class="logo-icon" :src="Logo" alt="" />
    <h1 class="logo-title text-purple-800">eatly</h1>
  </div>
</template>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  gap: 10px;

  &-title {
    font-weight: 600;
    font-size: 21px;
    color: var(--p-purple-800);
  }
}
</style>
