<script setup lang="ts">
import BurgerIcon from "../assets/icons/BurgerIcon.vue";
import { Logo } from "@/shared/ui/Logo";
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <Logo />

      <div class="burger">
        <BurgerIcon />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 35px 31px 0;

  &-inner {
    padding-bottom: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid rgb(203, 203, 203);
  }
}
</style>
