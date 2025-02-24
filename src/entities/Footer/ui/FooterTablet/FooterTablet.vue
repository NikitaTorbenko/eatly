<script setup lang="ts">
import { Logo } from "@/shared/ui/Logo";
import FooterTabletLinks from "./FooterTabletLinks.vue";
import FooterTabletMedia from "./FooterTabletMedia.vue";
</script>

<template>
  <footer class="footer-tablet">
    <div class="container">
      <div class="tablet-nav">
        <logo />
        <FooterTabletLinks />
      </div>

      <div class="tablet-content">
        <p class="tablet-text">© 2023 EATLY All Rights Reserved.</p>
        <FooterTabletMedia />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.footer {
  &-tablet {
    background-color: rgb(234, 234, 234);
    display: none;
    @media (min-width: v.$tablet) {
      display: block;
    }
  }
}

.tablet {
  &-nav {
    padding: 96px 0px 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(129, 129, 129, 0.25);

    @media (max-width: v.$desctop) {
      padding: 70px 0px 20px;
    }
  }

  &-content {
    padding: 58px 0px 81px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: v.$desctop) {
      padding: 41px 0px 58px;
    }
  }

  &-text {
    color: rgb(153, 153, 153);
    font-size: 17px;
    font-weight: 500;
    line-height: 25px;

    @media (max-width: v.$desctop) {
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
    }
  }
}
</style>
