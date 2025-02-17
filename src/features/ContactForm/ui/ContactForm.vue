<script setup lang="ts">
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
</script>

<template>
  <div class="contact-form">
    <h3 class="form-title">Customer <span class="purple">Support</span></h3>

    <FloatLabel variant="on">
      <InputText class="input" id="on_label" size="large" />
      <label for="on_label">Enter name</label>
    </FloatLabel>

    <FloatLabel class="float-label" variant="on">
      <InputText class="input" size="large" id="on_label" />
      <label for="on_label">Enter your email</label>
    </FloatLabel>

    <FloatLabel variant="on">
      <Textarea
        class="textarea"
        id="over_label"
        rows="15"
        cols="42"
        style="resize: none"
      />
      <label for="on_label">Enter The Problem Or Query</label>
    </FloatLabel>

    <Button class="btn" label="Send Now" />
  </div>
</template>

<style scoped lang="scss">
@use "@/app/styles/variables" as v;

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 330px;

  @media (min-width: v.$tablet) {
    margin-left: auto;
    margin-right: 70px;
    max-width: 350px;
  }

  @media (min-width: v.$desctop) {
    margin-right: 95px;
    max-width: 500px;
  }
}

.form-title {
  display: none;

  align-self: flex-start;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 44px;

  @media (min-width: v.$tablet) {
    display: block;
  }
}

.purple {
  color: var(--p-primary-600);
}

.float-label {
  margin-top: 12px;
  margin-bottom: 50px;
}

:deep(.p-floatlabel, .p-textarea) {
  width: 100%;
}

.input {
  font-size: 10px;
  padding: 13px 16px;
  width: 100%;

  @media (min-width: v.$tablet) {
    font-size: 12px;
    padding: 15px 18px;
  }

  @media (min-width: v.$desctop) {
    font-size: 17px;
    padding: 21px 25px;
  }
}

.textarea {
  width: 100%;
  font-size: 10px;

  @media (min-width: v.$tablet) {
    font-size: 12px;
    padding: 16px 19px;
  }

  @media (min-width: v.$tablet) {
    font-size: 17px;
    padding: 22px 27px;
  }
}

.btn {
  width: 100%;
  margin-top: 22px;
  padding: 17px;
}
</style>
