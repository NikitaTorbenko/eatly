<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import { storeToRefs } from "pinia";
import { Logo } from "@/shared/ui/Logo";
import { useSidebarStore } from "../store";
import BurgerIcon from "../assets/icons/BurgerIcon.vue";
import Button from "primevue/button";
import LinkList from "./LinkList.vue";

const store = useSidebarStore();
const { visible } = storeToRefs(store);
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <Logo />

        <LinkList />

        <div class="link-list"></div>

        <div class="sign">
          <Button label="Login" class="btn" variant="link" />
          <Button label="Sign up" class="btn" />
        </div>

        <div class="burger">
          <Sidebar />
          <BurgerIcon @click="visible = true" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "@/app/styles/variables" as v;

.sign {
  display: none;

  @media (min-width: v.$desctop) {
    display: flex;
    gap: 9px;
  }
}

.btn {
  border-radius: 18px;
  font-size: 12px;
  font-weight: 700;
  padding: 12px 19px;

  @media (min-width: v.$desctop) {
    font-size: 17px;
    padding: 18px 26px;
  }
}

.header {
  padding-top: 35px;

  @media (min-width: v.$tablet) {
    padding-top: 50px;
  }

  &-inner {
    padding-bottom: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid rgb(203, 203, 203);
  }
}

.burger {
  @media (min-width: v.$desctop) {
    display: none;
  }
}
</style>
