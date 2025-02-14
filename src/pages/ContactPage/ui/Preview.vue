<script setup lang="ts">
import Arrow from "../assets/img/arrow.vue";
</script>

<template>
  <div class="preview">
    <div class="preview-inner">
      <h2 class="preview-title">Contact Us</h2>
      <Arrow class="preview-arrow" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.preview {
  width: 100%;
  height: 150px;
  padding: 23px;
  background-color: var(--p-primary-600);
  display: flex;
  justify-content: center;

  margin-bottom: 50px;

  &-inner {
    width: fit-content;
    position: relative;
  }

  &-title {
    font-size: 24px;
    font-weight: 600;
    color: #f9f9f9;
    width: fit-content;
  }

  &-arrow {
    position: absolute;
    left: -87px;
    bottom: -5px;
  }
}
</style>
