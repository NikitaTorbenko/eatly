<script setup lang="ts">
import { ref } from "vue";
import { Button, IconField, InputIcon, InputText } from "primevue";

const isFocusedEmail = ref(false);
const isFocusedPassword = ref(false);

const email = ref("");
const password = ref("");
</script>

<template>
  <div class="login">
    <div class="container">
      <div class="login-form">
        <h3 class="title">Sign In To eatly</h3>

        <div class="service-auth">
          <div class="service-block">
            <span class="pi pi-google"></span>
          </div>
          <div class="service-block">
            <span class="pi pi-apple"></span>
          </div>
        </div>

        <div class="or">OR</div>

        <IconField class="icon-field">
          <InputIcon
            class="pi pi-user"
            :class="isFocusedEmail ? 'purple-icon' : ''"
          />
          <InputText
            class="input"
            v-model="email"
            placeholder="Email"
            @focus="isFocusedEmail = true"
            @blur="isFocusedEmail = false"
          />
        </IconField>

        <IconField class="icon-field">
          <InputIcon
            class="pi pi-lock"
            :class="isFocusedPassword ? 'purple-icon' : ''"
          />
          <InputText
            v-model="password"
            class="input"
            placeholder="Password"
            type="password"
            @focus="isFocusedPassword = true"
            @blur="isFocusedPassword = false"
          />
        </IconField>

        <div class="forget-password purple">Forget Password ?</div>

        <Button class="btn" label="SIGN IN" />

        <div class="auth-footer">
          Create A New Account?
          <router-link class="purple" to="/auth">Sign Up</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.login {
  margin: 100px 0;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.title {
  color: #323142;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
}

.service-auth {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 17px;
}

.service-block {
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;
  transition: 0.3s;

  &:hover {
    background-color: #d8d8d8;
  }
}

.or {
  color: #32314259;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
}

.icon-field {
  width: 100%;
}

.input {
  width: 100%;
  padding: 20px 22px;
  font-size: 14px;
  font-weight: 600;

  &:focus,
  &:focus::placeholder {
    color: var(--p-primary-600);
  }
}

.purple-icon {
  color: var(--p-primary-600);
}

.forget-password {
  align-self: flex-end;
  font-size: 12px;
}

.btn {
  width: 100%;
  padding: 19px;
  font-size: 14px;

  @media (min-width: v.$tablet) {
    padding: 17px;
    font-size: 13px;
  }

  @media (min-width: v.$desctop) {
    padding: 24px;
    font-size: 18px;
  }
}

:deep(.p-button-label) {
  font-weight: 600;
}

.auth-footer {
  color: #3e3e3e;
  font-size: 15px;
  font-weight: 700;
}
</style>
