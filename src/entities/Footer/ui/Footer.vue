<script setup lang="ts">
import { Logo } from "@/shared/ui/Logo";
import Instagram from "../assets/icons/instagram.svg";
import In from "../assets/icons/in.svg";
import Facebook from "../assets/icons/facebook.svg";
import Twitter from "../assets/icons/twitter.svg";
import { links } from "../consts";
</script>

<template>
  <footer class="footer">
    <div class="footer-nav">
      <Logo />
      <div class="footer-links">
        <img :src="Instagram" alt="" />
        <img :src="In" alt="" />
        <img :src="Facebook" alt="" />
        <img :src="Twitter" alt="" />
      </div>
    </div>
    <div class="footer-content">
      <div class="footer-content-text">
        <RouterLink
          v-for="(item, index) in links"
          :key="index"
          :to="item.link"
          class="footer-content-text-item"
        >
          {{ item.title }}
        </RouterLink>
      </div>
    </div>
    <div class="footer-end">
      <p class="footer-end-text">© 2023 EATLY All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #efefef;

  &-nav {
    padding: 55px 30px 55px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-links {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &-content {
    padding: 0px 32px;
  }

  &-content-text {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &-content-text-item {
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
    text-transform: uppercase;
    color: #606060;
  }

  &-end {
    margin: 0px 30px;
    padding: 33px 0px 0px 0px;
  }

  &-end-text {
    border-top: 1px solid #cbcbcb;
    padding: 26px 44px 36px 44px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #70798b;
  }
}
</style>
