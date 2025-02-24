<script setup lang="ts">
// import { ref } from 'vue'

// interface Props {

// }
</script>

<template>
  <div class="article">
    <div class="article-img">
      <img class="background-img" src="../assets/imgs/background.png" alt="" />
    </div>
    <div class="article-text">
      <p class="article-title">How To Track The Order ?</p>
    </div>
    <div class="article-information">
      <div class="article-person">
        <div class="person-logo">
          <img class="logo" src="../assets/people/person.png" alt="" />
          <p class="logo-text">
            Written By <br />
            <span class="name">Perperzon</span>
          </p>
        </div>
      </div>
      <div class="article-time">
        <div class="time">15 DEC, 2022</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.article {
  background-color: white;
  width: 240px;

  border-radius: 11px;

  @media (min-width: v.$tablet) {
    width: 250px;
    border-radius: 11px;
  }

  @media (min-width: v.$desctop) {
    width: 350px;
    border-radius: 16px;
  }
}

.background-img {
  padding: 17px 14px 0px;

  @media (min-width: v.$tablet) {
    padding: 18px 18px 0px;
  }

  @media (min-width: v.$desctop) {
    padding: 20px 20px 0px;
    width: 350px;
    height: 270px;
  }
}

.article-text {
  padding: 14px 14px 14px;

  @media (min-width: v.$tablet) {
    padding: 15px 0px 0px 18px;
  }

  @media (min-width: v.$desctop) {
    padding: 22px 0px 0px 20px;
  }
}

.article-title {
  color: #252525;
  font-size: 15px;
  font-weight: 600;
  line-height: 17px;

  @media (min-width: v.$desctop) {
    font-size: 21px;
    font-weight: 600;
    line-height: 25px;
  }
}

.article-information {
  padding: 0px 13px 22px 10px;
  display: flex;
  justify-content: space-between;

  @media (min-width: v.$tablet) {
    padding: 15px 21px 22px 14px;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: v.$desctop) {
    padding: 20px 21px 30px 14px;
    display: flex;
    justify-content: space-between;
  }
}

.logo {
  @media (min-width: v.$desctop) {
    width: 45px;
    height: 45px;
  }
}

.person-logo {
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: v.$desctop) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}

.logo-text {
  padding-top: 6px;
  color: #8d8d8d;
  font-size: 8px;
  font-weight: 400;

  @media (min-width: v.$desctop) {
    font-size: 12px;
    font-weight: 400;
  }
}

.name {
  color: #000000;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;

  @media (min-width: v.$desctop) {
    font-size: 17px;
    font-weight: 500;
    line-height: 26px;
  }
}

.time {
  margin-top: 14px;
  color: #b7b4b4;
  font-size: 11px;
  font-weight: 500;
  line-height: 22px;

  @media (min-width: v.$desctop) {
    margin-top: 18px;
    font-size: 16px;
    font-weight: 500;
    line-height: 31px;
  }
}
</style>
