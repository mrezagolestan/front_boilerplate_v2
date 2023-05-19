<template>
  <!--begin::Toolbar-->
  <div class="toolbar" id="kt_toolbar">
    <!--begin::Container-->
    <div
      id="kt_toolbar_container"
      :class="{
        'container-fluid': toolbarWidthFluid,
        'container-xxl': !toolbarWidthFluid,
      }"
      class="d-flex flex-stack"
    >
      <PageTitle />

      <!--begin::Actions-->
      <div class="d-flex align-items-center py-1">
        <!--begin::Wrapper-->
        <div class="me-4">
          <!--begin::Menu-->
          <a
            href="#"
            class="btn btn-sm btn-flex btn-light btn-active-primary fw-bold"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <span class="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
              <ClientOnly><inline-svg src="/media/icons/duotune/general/gen031.svg" /></ClientOnly>
            </span>
            Filter
          </a>

          <Dropdown1></Dropdown1>
          <!--end::Menu-->
        </div>
        <!--end::Wrapper-->

        <!--begin::Button-->
        <a
          href="#"
          class="btn btn-sm btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_create_app"
          id="kt_toolbar_primary_button"
        >
          Create
        </a>
        <!--end::Button-->
      </div>
      <!--end::Actions-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Toolbar-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "@/layouts/main-layout/page-title/PageTitle.vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import { toolbarWidthFluid } from "@/core/helpers/config";

export default defineComponent({
  name: "KToolbar",
  components: {
    Dropdown1,
    PageTitle,
  },
  setup() {
    return {
      toolbarWidthFluid,
    };
  },
});
</script>
