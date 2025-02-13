import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore("sidebarStore", () => {
  const visible = ref(false);

  return { visible };
});
