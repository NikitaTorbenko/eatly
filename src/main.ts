import { createApp } from "vue";
import { App, router } from "./app";
import PrimeVue from "primevue/config";
import Lara from "@primevue/themes/lara";
import { definePreset } from "@primevue/themes";

const MyPreset = definePreset(Lara, {
  semantic: {
    primary: {
      50: "{purple.50}",
      100: "{purple.100}",
      200: "{purple.200}",
      300: "{purple.300}",
      400: "{purple.400}",
      500: "{purple.500}",
      600: "{purple.600}",
      700: "{purple.700}",
      800: "{purple.800}",
      900: "{purple.900}",
      950: "{purple.950}",
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      // darkModeSelector: ".my-app-dark",
      darkModeSelector: false || "none",
    },
  },
});
app.mount("#app");
