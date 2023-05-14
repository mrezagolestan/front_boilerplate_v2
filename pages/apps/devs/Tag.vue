<template>
  <Questions />
</template>

<script>
import { defineComponent, onMounted, onUnmounted } from "vue";
import Questions from "@/components/devs/Questions";
import LayoutService from "@/core/services/LayoutService";

export default defineComponent({
  name: "dev-tag",
  components: { Questions },
  setup() {
    onMounted(() => {
      if (!localStorage.getItem("config")) {
        LayoutService.enableSidebar();
      }
    });

    onUnmounted(() => {
      if (!localStorage.getItem("config")) {
        LayoutService.disableSidebar();
      }
    });
  },
});
</script>
