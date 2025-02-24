<script setup lang="ts">
import { Logo } from "@/shared/ui/Logo";
import FooterMedia from "./FooterMedia.vue";
import FooterLinks from "./FooterLinks.vue";
import FooterTablet from "./FooterTablet/FooterTablet.vue";
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
  <FooterTablet />
</template>

<style lang="scss" scoped>
@use "@/shared/styles/variables" as v;

.footer {
  background-color: #efefef;
  display: block;

  @media (min-width: v.$tablet) {
    display: none;
  }

  &-nav {
    padding: 55px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-end {
    margin: 0px 30px;
    padding-top: 33px;
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
