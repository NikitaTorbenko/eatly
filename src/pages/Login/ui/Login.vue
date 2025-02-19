<script setup lang="ts">
// import { ref } from "vue";
import { Mail, PasswordIcon } from "@/shared/assets/icons";
import { IconField, InputIcon, InputText, Password } from "primevue";
// import { Input } from "@/shared/ui/Auth/Input";

// const test = ref("");
// const isShowPassword = ref(false);
</script>

<template>
  <div class="login">
    <div class="container">
      <div class="login-form">
        <IconField>
          <InputIcon>
            <Mail class="mail-icon" />
          </InputIcon>
          <InputText class="input" placeholder="Email" />
        </IconField>

        <div class="password-wrap">
          <PasswordIcon class="password-icon" />
          <Password class="my-input" toggleMask placeholder="PASSWORD" />
        </div>

        <!-- <Input :value="test" placeholder="EMAIL" />
        <Input
          :value="test"
          placeholder="PASSWORD"
          is-password
          :is-show-password="isShowPassword"
        /> -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  margin: 100px 0;
}

.my-input {
  width: 100%;
  padding: 20px 22px;
  font-size: 14px;
  font-weight: 600;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.input {
  padding: 20px 22px;
  font-size: 14px;
  font-weight: 600;
}

.mail-icon {
  width: 13px;
  height: 10px;
}

.password-icon {
  width: 15px;
  height: 19px;
}
</style>
