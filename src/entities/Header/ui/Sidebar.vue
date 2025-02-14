<script setup lang="ts">
import { storeToRefs } from "pinia";
import Drawer from "primevue/drawer";
import Button from "primevue/button";
import { links } from "@/shared/consts";
import { useSidebarStore } from "../store";

const store = useSidebarStore();
const { visible } = storeToRefs(store);
</script>

<template>
  <Drawer v-model:visible="visible" position="right" style="width: 100%">
    <div class="sidebar">
      <div class="sidebar-top">
        <div class="sidebar-item" v-for="item in links">
          <router-link :to="item.link" class="sidebar-link">
            {{ item.title }}
          </router-link>
        </div>
      </div>

      <div class="sidebar-bottom">
        <Button label="Login" class="btn" variant="link" />
        <Button label="Sign up" class="btn" />
      </div>
    </div>
  </Drawer>
</template>

<style scoped lang="scss">
.btn {
  font-size: 24px;
  padding: 15px 20px;
}

.sidebar {
  height: 80%;
  padding-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &-top {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  &-item {
    font-size: 24px;
    padding: 15px;
  }

  &-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>
