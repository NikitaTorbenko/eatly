<script setup lang="ts">
import { Mail, PasswordIcon } from "@/shared/assets/icons";
import { computed, onMounted } from "vue";

interface Props {
  value: string;
  type?: "text" | "password";
  placeholder?: string;
  isPassword?: boolean;
  isShowPassword?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  isPassword: false,
  isShowPassword: false,
});

const emit = defineEmits(["toggle-eye"]);

const inputType = computed(() => {
  if (props.type === "text") return "text";

  if (props.isShowPassword) return "text";
  else return "password";
});
</script>

<template>
  <div class="input-wrap">
    <PasswordIcon v-if="isPassword" class="icon password-lock" />
    <Mail v-else class="icon mail-icon" />

    <input
      class="input"
      :type="inputType"
      :placeholder="props.placeholder"
      v-model="props.value"
    />

    <div class="show-password" v-if="props.isPassword">
      <img
        @click="emit('toggle-eye')"
        class="password-icon"
        v-if="props.isShowPassword"
        src="../assets/icons/password-show.svg"
        alt=""
      />
      <img
        @click="emit('toggle-eye')"
        class="password-icon"
        v-else
        src="../assets/icons/password-hide.svg"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.input-wrap {
  width: 100%;
  position: relative;
}

.input {
  width: 100%;
  padding: 20px 40px 20px 64px;
  border-radius: 12px;
  background-color: #f1f1f1;
  font-size: 13.45px;
  font-weight: 600;

  &::placeholder {
    color: #c2c3cb;
  }
}

.icon {
  position: absolute;
  top: 50%;
  left: 19px;
  transform: translateY(-50%);
}

.password-icon {
  position: absolute;
  top: 50%;
  right: 23px;
  transform: translateY(-50%);
  width: 17px;
  height: 15px;
  opacity: 0.5;
}
</style>
