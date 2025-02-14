<script setup lang="ts">
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";

import Arrow from "../assets/img/arrow.vue";
</script>

<template>
  <div class="contact">
    <div class="container">
      <div class="contact-inner">
        <div class="contact-preview">
          <div class="contact-wrap">
            <h2 class="contact-title">Contact Us</h2>
            <Arrow class="contact-arrow" />
          </div>
        </div>

        <FloatLabel variant="on">
          <InputText class="input" id="on_label" size="large" />
          <label for="on_label">Enter name</label>
        </FloatLabel>

        <FloatLabel class="float-label" variant="on">
          <InputText class="input" size="large" id="on_label" />
          <label for="on_label">Enter your email</label>
        </FloatLabel>

        <FloatLabel variant="on">
          <Textarea id="over_label" rows="15" cols="42" style="resize: none" />
          <label for="on_label">Enter The Problem Or Query</label>
        </FloatLabel>

        <Button class="btn" label="Send Now" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.float-label {
  margin-top: 12px;
  margin-bottom: 50px;
}

:deep(.p-floatlabel) {
  width: 100%;
}

.input {
  padding: 13px 16px;
  width: 100%;
}

.btn {
  width: 100%;
  margin-top: 22px;
  padding: 17px;
}

.contact {
  margin-top: 50px;
  margin-bottom: 100px;

  &-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-preview {
    width: 100%;
    height: 150px;
    padding: 23px;
    background-color: var(--p-primary-600);
    display: flex;
    justify-content: center;

    margin-bottom: 50px;
  }

  &-wrap {
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
