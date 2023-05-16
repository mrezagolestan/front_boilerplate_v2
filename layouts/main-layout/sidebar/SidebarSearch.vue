<template>
  <!--begin::Quick Search-->
  <form
    id="kt_sidebar_search_form"
    class="w-100 position-relative mb-5 mb-lg-10"
    autocomplete="off"
  >
    <!--begin::Hidden input(Added to disable form autocomplete)-->
    <input type="hidden" />
    <!--end::Hidden input-->

    <!--begin::Icon-->
    <span
      class="svg-icon svg-icon-2 svg-icon-gray-700 position-absolute top-50 translate-middle-y ms-4"
    >
      <inline-svg src="/media/icons/duotune/general/gen021.svg" />
    </span>
    <!--end::Icon-->

    <!--begin::Input-->
    <input
      type="text"
      class="form-control bg-transparent ps-13 fs-7 h-40px"
      name="search"
      value=""
      placeholder="Search"
    />
    <!--end::Input-->
  </form>
  <!--end::Quick Search-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-sidebar-search",
  components: {},
});
</script>
