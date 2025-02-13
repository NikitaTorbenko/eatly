import { createApp } from "vue";
import { App, router, pinia, primevueOptions } from "./app";
import PrimeVue from "primevue/config";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, primevueOptions);
app.use(pinia);
app.mount("#app");
