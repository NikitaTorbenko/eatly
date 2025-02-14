<script setup lang="ts">
import ContactForm from "./ContactForm.vue";
import Preview from "./Preview.vue";
</script>

<template>
  <div class="contact">
    <div class="container">
      <div class="contact-inner">
        <Preview />

        <ContactForm />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/app/styles/variables" as v;

.contact {
  margin-top: 50px;
  margin-bottom: 100px;

  @media (min-width: v.$desctop) {
    margin-top: 150px;
  }

  &-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
