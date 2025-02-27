<template>
  <div class="veiw">
    <router-link to="/" class="veiw-text">View All</router-link>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

.veiw {
  display: flex;
  justify-content: flex-end;
}

.veiw-text {
  color: #acadb9;
  font-size: 20px;
  font-weight: 500;
  line-height: 45px;
  text-decoration: underline;

  @media (min-width: v.$tablet) {
    font-size: 14px;
    font-weight: 500;
    line-height: 32px;
  }

  @media (min-width: v.$desctop) {
    font-size: 20px;
    font-weight: 500;
    line-height: 45px;
  }
}
</style>
