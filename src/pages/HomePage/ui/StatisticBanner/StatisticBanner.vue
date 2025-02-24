<script setup lang="ts">
// import { ref } from 'vue'

// interface Props {

// }
</script>

<template>
  <div class="container">
    <div class="statistic-banner">
      <div class="customers">
        <span class="counts-customers">10K+</span>
        <p class="customers-info">
          Satisfied Costumers <br />
          All Great Over The World
        </p>
      </div>
      <div class="sales">
        <span class="counts-sales">4M</span>
        <p class="sales-info">
          Healthy Dishes Sold <br />
          Including Milk Shakes Smooth
        </p>
      </div>
      <div class="support">
        <span class="percent-support">99.99%</span>
        <p class="support-info">
          Reliable Customer Support <br />
          We Provide Great Experiences
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.statistic-banner {
  background-color: var(--p-primary-600);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: v.$tablet) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
}

.customers,
.sales,
.support {
  text-align: center;
}

.counts-customers,
.counts-sales,
.percent-support {
  color: #ffffff;
  font-size: 43px;
  font-weight: 700;
  line-height: 54px;
  padding-bottom: 10px;

  @media (min-width: v.$tablet) {
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
  }

  @media (min-width: v.$desctop) {
    font-size: 43px;
    font-weight: 700;
    line-height: 54px;
  }
}

.customers-info,
.sales-info,
.support-info {
  color: var(--p-primary-300);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;

  @media (min-width: v.$tablet) {
    font-size: 10px;
    font-weight: 500;
    line-height: 15px;
  }

  @media (min-width: v.$desctop) {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
  }
}

.customers {
  margin-top: 100px;
  padding-bottom: 60px;
  border-bottom: 1px solid #c5c5c5;

  @media (min-width: v.$tablet) {
    margin-top: 35px;
    padding-bottom: 0px;
    margin-bottom: 40px;
    border-bottom: none;
  }

  @media (min-width: v.$desctop) {
    margin: 50px 0px;
  }
}

.sales,
.support {
  margin-top: 60px;
  padding-bottom: 60px;
  border-bottom: 1px solid #c5c5c5;

  @media (min-width: v.$tablet) {
    margin-top: 35px;
    padding-bottom: 0px;
    margin-bottom: 40px;
    border-bottom: none;
  }
}

.sales {
  @media (min-width: v.$tablet) {
    margin-top: 35px;
    margin-bottom: 40px;
    padding: 0px 47px;
    border-left: 1px solid #c5c5c5;
    border-right: 1px solid #c5c5c5;
    border-bottom: none;
  }

  @media (min-width: v.$desctop) {
    padding: 0px 66px;
  }
}

.support {
  border: none;
}
</style>
