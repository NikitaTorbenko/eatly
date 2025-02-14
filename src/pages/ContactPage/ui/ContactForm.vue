<script setup lang="ts">
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
</script>

<template>
  <div class="contact-form">
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
</template>

<style scoped lang="scss">
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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
</style>
