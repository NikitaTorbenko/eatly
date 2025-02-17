<script setup lang="ts">
import { Logo } from "@/shared/ui/Logo";
import FooterMedia from "./FooterMedia.vue";
import FooterLinks from "./FooterLinks.vue";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-nav">
        <Logo />
        <FooterMedia />
      </div>

      <FooterLinks />

      <div class="footer-end">
        <p class="footer-end-text">© 2023 EATLY All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "@/app/styles/variables" as v;

.footer {
  background-color: #efefef;
  display: none;

  @media (max-width: v.$tablet) {
    display: block;
  }

  &-nav {
    padding: 55px 30px 55px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-end {
    margin: 0px 30px;
    padding: 33px 0px 0px 0px;
  }

  &-end-text {
    border-top: 1px solid #cbcbcb;
    padding: 26px 44px 36px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #70798b;
  }
}
</style>
