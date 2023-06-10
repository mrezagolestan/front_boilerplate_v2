<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted } from "vue";
import { initializeComponents } from "@/core/plugins/keenthemes";
import { useConfigStore } from "@/store/config";

export default defineComponent({
  name: "app",
  setup() {
    const configStore = useConfigStore();

    onMounted(() => {
      /**
       * this is to override the layout config using saved data from localStorage
       * remove this to use config only from static config (@/core/config/DefaultLayoutConfig.ts)
       */
      configStore.overrideLayoutConfig();
      //store.commit(Mutations.OVERRIDE_LAYOUT_CONFIG);

      nextTick(() => {
        initializeComponents();
      });
    });
  },
});
</script>