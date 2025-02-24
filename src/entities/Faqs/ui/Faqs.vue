<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionPanel,
} from "primevue";
import type { IFaq } from "@/shared/types";
import { ref, onMounted } from "vue";
import { getFaqs } from "../api";

const faqs = ref<IFaq[]>([]);

const getFaqsHandler = async () => {
  const { data } = await getFaqs();
  faqs.value = data;
};

onMounted(getFaqsHandler);
</script>

<template>
  <div class="faqs">
    <h3 class="faqs-title">
      Frequently Asked<br />
      <span class="purple">Questions</span>
    </h3>

    <Accordion :value="['0']" multiple>
      <AccordionPanel v-for="(item, index) in faqs" :key="index" :value="index">
        <AccordionHeader class="faq-title">{{ item.question }}</AccordionHeader>
        <AccordionContent>
          <p class="faq-text">
            {{ item.answer }}
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<style scoped lang="scss">
@use "@/shared/styles/variables" as v;

:deep(.p-accordionheader) {
  padding-top: 15px;
  padding-bottom: 15px;

  @media (min-width: v.$tablet) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media (min-width: v.$desctop) {
    padding: 30px;
  }
}

:deep(.p-accordioncontent-content) {
  @media (min-width: v.$desctop) {
    padding: 0 30px 30px;
  }
}

.faqs-title {
  margin-top: 100px;
  margin-bottom: 67px;
  font-size: 23px;
  font-weight: 600;
  line-height: 120%;
  text-align: center;
  color: #323142;

  @media (min-width: v.$tablet) {
    font-size: 32px;
  }

  @media (min-width: v.$desctop) {
    font-size: 45px;
  }
}

.faq-title {
  font-size: 12px;
  color: #323142;
  font-weight: 600;
  line-height: 31.12px;

  @media (min-width: v.$tablet) {
    font-size: 16px;
  }

  @media (min-width: v.$desctop) {
    font-size: 23px;
  }
}

.faq-text {
  color: #686868;
  font-size: 11px;
  line-height: 160%;
  letter-spacing: 1%;

  @media (min-width: v.$tablet) {
    font-size: 14px;
  }

  @media (min-width: v.$desctop) {
    font-size: 20px;
  }
}

.purple {
  color: var(--p-primary-800);
}
</style>
