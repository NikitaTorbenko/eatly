import { useWindowSize } from "@/shared/hooks";
import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useSidebarStore = defineStore("sidebarStore", () => {
  const visible = ref(false);
  const closeSidebar = () => (visible.value = false);

  const { dimensions } = useWindowSize();

  watch(dimensions.width, () => {
    if (dimensions.width.value >= 1024) closeSidebar();
  });

  return { visible, closeSidebar };
});
