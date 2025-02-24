<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <div class="block">
    <div class="user">
      <input class="name" type="text" placeholder="Full Name" />
      <img class="user-img" src="../inputs/assets/icons/user.svg" alt="" />
    </div>
    <div class="adress">
      <input class="email" type="email" placeholder="Email" />
      <img class="email-img" src="../inputs/assets/icons/email.svg" alt="" />
    </div>
    <div class="password">
      <input class="password-text" type="text" placeholder="Password" />
      <img
        class="password-img"
        src="../inputs/assets/icons/password.svg"
        alt=""
      />
    </div>
    <br />

    <h1>fffffffffffff</h1>
  </div>
</template>

<style scoped lang="scss">
.block {
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.user {
  position: relative;
}

.user-img {
  position: absolute;
  left: 20px;
  top: 18px;
  width: 17px;
}

.adress {
  position: relative;
}

.email-img {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 15px;
}

.password {
  position: relative;
}

.password-img {
  position: absolute;
  left: 20px;
  top: 18px;
  width: 18px;
}

h1 {
  padding-bottom: 400px;
}

.name,
.email,
.password-text {
  background-color: #eeeeee;
  width: 310px;
  padding: 20px 165px 20px 65px;
  font-size: 14px;
  border-radius: 12px;
  letter-spacing: 7%;
  text-transform: uppercase;
  padding-right: 30px;

  &:focus {
    border: 1px solid var(--p-purple-700);
    background-color: white;
    color: var(--p-purple-700);
  }
}
</style>
