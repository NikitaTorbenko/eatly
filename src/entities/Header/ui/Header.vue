<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import { storeToRefs } from "pinia";
import { Logo } from "@/shared/ui/Logo";
import { useSidebarStore } from "../store";
import BurgerIcon from "../assets/icons/BurgerIcon.vue";

const store = useSidebarStore();
const { visible } = storeToRefs(store);
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <Logo />

      <div class="burger">
        <Sidebar />
        <BurgerIcon @click="visible = true" />
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
