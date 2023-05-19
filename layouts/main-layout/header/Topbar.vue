<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex align-items-stretch flex-shrink-0">
    <!--begin::Search-->
    <div class="d-flex align-items-stretch ms-1 ms-lg-3">
      <KTSearch></KTSearch>
    </div>
    <!--end::Search-->

    <!--begin::Activities-->
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::drawer toggle-->
      <div
        class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
        id="kt_activities_toggle"
      >
        <span class="svg-icon svg-icon-1">
          <ClientOnly><inline-svg src="/media/icons/duotune/general/gen032.svg" /></ClientOnly>
        </span>
      </div>
      <!--end::drawer toggle-->
    </div>
    <!--end::Activities-->

    <!--begin::Quick links-->
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::Menu-->
      <div
        class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
        <span class="svg-icon svg-icon-1">
          <ClientOnly><inline-svg src="/media/icons/duotune/general/gen025.svg" /></ClientOnly>
        </span>
      </div>
      <KTQuickLinksMenu></KTQuickLinksMenu>
      <!--end::Menu-->
    </div>
    <!--end::Quick links-->

    <!--begin::Chat-->
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::Menu wrapper-->
      <div
        class="btn btn-icon btn-active-light-primary position-relative w-30px h-30px w-md-40px h-md-40px"
        id="kt_drawer_chat_toggle"
      >
        <span class="svg-icon svg-icon-1">
          <ClientOnly><inline-svg src="/media/icons/duotune/communication/com012.svg" /></ClientOnly>
        </span>

        <span
          class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"
        >
        </span>
      </div>
      <!--end::Menu wrapper-->
    </div>
    <!--end::Chat-->

    <!--begin::Notifications-->
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::Menu-->
      <div
        class="btn btn-icon btn-active-light-primary position-relative w-30px h-30px w-md-40px h-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
        <span class="svg-icon svg-icon-1">
          <ClientOnly><inline-svg src="/media/icons/duotune/general/gen022.svg" /></ClientOnly>
        </span>
      </div>
      <KTNotificationsMenu></KTNotificationsMenu>
      <!--end::Menu-->
    </div>
    <!--end::Notifications-->

    <!--begin::Theme mode-->
    <div class="d-flex align-items-center ms-1 ms-lg-2">
      <!--begin::Menu toggle-->
      <a
        href="#"
        class="btn btn-icon btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px"
        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
      >
        <span class="svg-icon theme-light-show svg-icon-1">
          <ClientOnly><inline-svg src="/media/icons/duotune/general/gen060.svg" /></ClientOnly>
        </span>
        <span class="svg-icon theme-dark-show svg-icon-1">
          <ClientOnly><inline-svg src="/media/icons/duotune/general/gen061.svg" /></ClientOnly>
        </span>
      </a>
      <!--begin::Menu toggle-->
      <KTThemeModeSwitcher></KTThemeModeSwitcher>
    </div>
    <!--end::Theme mode-->

    <!--begin::User-->
    <div
      class="d-flex align-items-center ms-1 ms-lg-3"
      id="kt_header_user_menu_toggle"
    >
      <!--begin::User info-->
      <div
        class="btn btn-active-light d-flex align-items-center bg-hover-light py-2 px-2 px-md-3"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
      >
        <!--begin::Name-->
        <div
          class="d-none d-md-flex flex-column align-items-end justify-content-center me-2"
        >
          <span class="text-muted fs-7 fw-semobold lh-1 mb-2">Hello</span>
          <span class="text-dark fs-base fw-bold lh-1">Richard</span>
        </div>
        <!--end::Name-->

        <!--begin::Symbol-->
        <div class="symbol symbol-30px symbol-md-40px">
          <img src="/media/avatars/300-1.jpg" alt="image" />
        </div>
        <!--end::Symbol-->
      </div>
      <!--end::User info-->
      <KTUserMenu></KTUserMenu>
      <!--end::Menu-->
    </div>
    <!--end::User -->

    <!--begin::Heaeder menu toggle-->
    <div
      class="d-flex align-items-center d-lg-none ms-2 me-n3"
      title="Show header menu"
    >
      <div
        class="btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px"
        id="kt_header_menu_mobile_toggle"
      >
        <span class="svg-icon svg-icon-1">
          <ClientOnly><inline-svg src="/media/icons/duotune/text/txt001.svg" /></ClientOnly>
        </span>
      </div>
    </div>
    <!--end::Heaeder menu toggle-->
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTSearch from "@/layouts/main-layout/header/partials/Search.vue";
import KTNotificationsMenu from "@/layouts/main-layout/header/partials/NotificationsMenu.vue";
import KTQuickLinksMenu from "@/layouts/main-layout/header/partials/QuickLinksMenu.vue";
import KTUserMenu from "@/layouts/main-layout/header/partials/UserMenu.vue";
import KTThemeModeSwitcher from "@/layouts/main-layout/theme-mode/ThemeModeSwitcher.vue";

export default defineComponent({
  name: "layout-topbar",
  components: {
    KTSearch,
    KTNotificationsMenu,
    KTQuickLinksMenu,
    KTUserMenu,
    KTThemeModeSwitcher,
  },
});
</script>
