<script setup lang="ts">
import Button from "primevue/button";
import { toggleDarkMode } from "@/shared/utils";
</script>

<template>
  <div class="">
    <h2>Home Page</h2>
    <Button label="Test" />

    <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />
  </div>
</template>

<style scoped lang="scss"></style>
