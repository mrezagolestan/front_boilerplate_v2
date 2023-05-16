<template>
  <!--begin::System Layout-->
  <div class="d-flex flex-column flex-root" id="kt_app_root">
    <router-view />
  </div>
  <!--end::System Layout-->
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useBodyStore } from "@/store/body";

export default defineComponent({
  name: "system-layout",
  components: {},
  setup() {
    const bodyStore = useBodyStore();

    onMounted(() => {
      bodyStore.addBodyClassName("app-blank");
      bodyStore.addBodyClassName("bgi-size-cover");
      bodyStore.addBodyClassName("bgi-position-center");
      bodyStore.addBodyClassName("bgi-no-repeat");
    });
  },
});
</script>
