<script setup lang="ts">
import { Faqs } from "@/entities/Faqs";
</script>

<template>
  <div class="blogs">
    <div class="container">
      <Faqs />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.container {
  margin-bottom: 95px;

  @media (min-width: v.$tablet) {
    margin-bottom: 117px;
  }

  @media (min-width: v.$desctop) {
    margin-bottom: 165px;
  }
}
</style>
