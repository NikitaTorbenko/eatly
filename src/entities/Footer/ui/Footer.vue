<script setup lang="ts">
import Footer_logo from "../assets/icons/footer-logo.svg";
import Instagram from "../assets/icons/instagram.svg";
import In from "../assets/icons/in.svg";
import Facebook from "../assets/icons/facebook.svg";
import Twitter from "../assets/icons/twitter.svg";
</script>
<template>
  <footer class="footer">
    <div class="footer-nav">
      <div class="footer-logo">
        <div class="footer-logo-img">
          <img :src="Footer_logo" alt="" />
        </div>
        <p class="footer-logo-title">eatly</p>
      </div>
      <div class="footer-links">
        <img :src="Instagram" alt="" />
        <img :src="In" alt="" />
        <img :src="Facebook" alt="" />
        <img :src="Twitter" alt="" />
      </div>
    </div>
    <div class="footer-content">
      <div class="footer-content-text">
        <p class="footer-content-text-item">Blog</p>
        <p class="footer-content-text-item">Pricing</p>
        <p class="footer-content-text-item">About Us</p>
        <p class="footer-content-text-item">Contact</p>
      </div>
    </div>
    <div class="footer-end">
      <p class="footer-end-text">© 2023 EATLY All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.footer {
  background-color: #efefef;
  &-nav {
    padding: 55px 30px 55px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &-logo-title {
    color: #6c5fbc;
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
