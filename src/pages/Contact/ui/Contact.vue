<script setup lang="ts">
import { ContactForm } from "@/features/ContactForm";
import Preview from "./Preview.vue";
</script>

<template>
  <div class="contact">
    <div class="contact-inner">
      <Preview />

      <ContactForm />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.contact {
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
  max-width: 1440px;

  // @media (min-width: v.$tablet) {
  //   margin-top: 150px;
  // }

  // @media (min-width: v.$desctop) {
  //   margin-top: 210px;
  // }

  &-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;

    @media (min-width: v.$tablet) {
      gap: 60px;
      flex-direction: row;
      align-items: stretch;
    }
  }
}
</style>
