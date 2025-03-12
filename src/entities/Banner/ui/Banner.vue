<script setup lang="ts">
import { Button, InputText } from "primevue";
import { ref, watch } from "vue";
import { useWindowSize } from "@/shared/hooks";

const email_placeholder = ref("Email Adress");
const { dimensions } = useWindowSize();
watch(dimensions.width, () => {
  if (dimensions.width.value >= 750) {
    email_placeholder.value = "Enter Your Email Address";
  } else {
    email_placeholder.value = "Email Adress";
  }
});

const value = ref("");
</script>

<template>
  <div class="container">
    <div class="banner">
      <div class="banner-information">
        <div class="banner-title">
          <span class="title">GET 50%</span>
        </div>
        <div class="banner-email">
          <InputText
            class="email"
            :placeholder="email_placeholder"
            type="text"
            v-model="value"
            variant="filled"
          />
          <Button class="subscribe" label="Subscribe" severity="help" />
        </div>
      </div>
      <div class="banner-img">
        <img
          class="food"
          src="/src/entities/Banner/assets/food/food.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.banner {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 315px;
  max-width: 1215px;
  height: 255px;
  border-radius: 15px;
  background-color: var(--p-primary-700);
  padding: 35px 25px 0 25px;

  @media (min-width: v.$tablet) {
    flex-direction: row;
    justify-content: space-between;
    height: 200px;
    padding: 26px 50px 45px 45px;

    .food {
      margin-top: 35px;
    }
  }
}

.banner-information {
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  @media (min-width: v.$tablet) {
    text-align: start;
    align-items: inherit;
  }
}

.banner-title {
  color: #ffffff;
  font-size: 40px;
  font-weight: 800;
}

.banner-email {
  position: relative;
  min-width: 260px;
  max-width: 440px;
}

.email {
  width: 100%;
  min-width: 260px;
  max-width: 440px;
  padding: 15px 15px;
  padding-right: 75px;
  font-size: 16px;
  letter-spacing: 3%;
  color: #878787;

  @media (min-width: v.$tablet) {
    padding-right: 100px;
  }
}

.subscribe {
  position: absolute;
  top: 8px;
  right: 7px;
  padding: 10px 15px;
  font-size: 10px;
  letter-spacing: 3%;
  text-transform: uppercase;
  color: #f7f8fa;
}

.banner-img {
  display: flex;
  justify-content: center;

  @media (min-width: v.$desctop) {
    right: 30px;
  }
}

.food {
  width: 170px;
  height: 170px;
}
</style>
