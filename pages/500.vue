<template>
  <div class="d-flex flex-column flex-center flex-column-fluid">
    <!--begin::Content-->
    <div class="d-flex flex-column flex-center text-center p-10">
      <!--begin::Wrapper-->
      <div class="card card-flush w-lg-650px py-5">
        <div class="card-body py-15 py-lg-20">
          <!--begin::Title-->
          <h1 class="fw-bolder fs-2qx text-gray-900 mb-4">System Error</h1>
          <!--end::Title-->
          <!--begin::Text-->
          <div class="fw-semibold fs-6 text-gray-500 mb-7">
            Something went wrong! Please try again later.
          </div>
          <!--end::Text-->
          <!--begin::Illustration-->
          <div class="mb-11">
            <img
              src="/media/auth/500-error.png"
              class="mw-100 mh-300px theme-light-show"
              alt=""
            />
            <img
              src="/media/auth/500-error-dark.png"
              class="mw-100 mh-300px theme-dark-show"
              alt=""
            />
          </div>
          <!--end::Illustration-->
          <!--begin::Link-->
          <div class="mb-0">
            <NuxtLink to="/" class="btn btn-sm btn-primary"
              >Return Home</NuxtLink
            >
          </div>
          <!--end::Link-->
        </div>
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Content-->
  </div>
</template>

<script setup lang="ts">
definePageMeta({layout: "systen"});
useSeoMeta({title: 'Error 500'})
</script>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useBodyStore } from "@/store/body";
import { useThemeStore } from "@/store/theme";

import { getIllustrationsPath } from "@/core/helpers/assets";
import LayoutService from "@/core/services/LayoutService";

export default defineComponent({
  name: "error-500",
  components: {},
  setup() {
    const bodyStore = useBodyStore();
    const themeStore = useThemeStore();

    const themeMode = computed(() => {
      return themeStore.getThemeMode();
    });
    const bgImage = themeMode.value !== "dark" ? "bg7.jpg" : "bg7-dark.jpg";

    onMounted(() => {
      LayoutService.emptyElementClassesAndAttributes(document.body);

      bodyStore.removeBodyClassName("bg-body");
      bodyStore.addBodyAttribute({
        qualifiedName: "style",
        value: `background-image: url("/media/auth/${bgImage}")`,
      });

    });

    return {
      getIllustrationsPath,
      bgImage,
    };
  },
});
</script>
