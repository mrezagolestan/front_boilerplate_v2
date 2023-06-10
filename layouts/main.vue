<template>
  <KTLoader v-if="loaderEnabled" :logo="loaderLogo" />

  <!-- begin:: Body -->
  <div class="page d-flex flex-column flex-column-fluid">
    <KTHeader :title="pageTitle" />

    <div
      id="kt_content_container"
      class="d-flex flex-column-fluid align-items-stretch"
      :class="{
        'container-fluid': contentWidthFluid,
        'container-xxl': !contentWidthFluid,
      }"
    >
      <KTAside v-if="asideEnabled" />
      <!-- begin:: Content -->
      <div
        id="kt_wrapper"
        class="wrapper d-flex flex-column flex-row-fluid mt-5 mt-lg-10"
      >
        <div class="content flex-column-fluid" id="kt_content">
          <!-- begin:: Content Body -->
          <div id="kt_post" class="post">
            <router-view />
          </div>
          <!-- end:: Content Body -->
        </div>
        <KTFooter />
      </div>
      <KTSidebar v-if="displaySidebar" />
      <!-- end:: Content -->
    </div>
  </div>
  <!-- end:: Body -->
  <KTScrollTop />
  <KTDrawerMessenger />
  <KTActivityDrawer />
  <KTCreateApp />
  <KTInviteFriendsModal />

  <KTToolButtons />
  <KTDemosDrawer />
  <KTHelpDrawer />
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch, nextTick } from "vue";
import { useBodyStore } from "@/store/body";
import { useAuthStore } from "@/store/auth";
import { useRoute, useRouter } from "vue-router";
import KTAside from "@/layouts/main-layout/aside/Aside.vue";
import KTSidebar from "@/layouts/main-layout/sidebar/Sidebar.vue";
import KTHeader from "@/layouts/main-layout/header/Header.vue";
import KTFooter from "@/layouts/main-layout/footer/Footer.vue";
import HtmlClass from "@/core/services/LayoutService";
import KTScrollTop from "@/layouts/main-layout/extras/ScrollTop.vue";
import KTActivityDrawer from "@/layouts/main-layout/drawers/ActivityDrawer.vue";
import KTLoader from "@/components/Loader.vue";
import KTCreateApp from "@/components/modals/wizards/create-app-modal/CreateAppModal.vue";
import KTInviteFriendsModal from "@/components/modals/general/InviteFriendsModal.vue";
import KTDemosDrawer from "@/layouts/main-layout/extras/DemosDrawer.vue";
import KTHelpDrawer from "@/layouts/main-layout/extras/HelpDrawer.vue";
import KTToolButtons from "@/layouts/main-layout/extras/ToolButtons.vue";
import KTDrawerMessenger from "@/layouts/main-layout/extras/MessengerDrawer.vue";
import { MenuComponent } from "@/assets/ts/components";
import { removeModalBackdrop } from "@/core/helpers/dom";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import {
  toolbarDisplay,
  loaderEnabled,
  contentWidthFluid,
  loaderLogo,
  asideEnabled,
  displaySidebar,
  subheaderDisplay,
  themeLightLogo,
  themeDarkLogo,
} from "@/core/helpers/config";

export default defineComponent({
  name: "master-layout",
  components: {
    KTAside,
    KTSidebar,
    KTHeader,
    KTFooter,
    KTScrollTop,
    KTCreateApp,
    KTInviteFriendsModal,
    KTActivityDrawer,
    KTDemosDrawer,
    KTHelpDrawer,
    KTToolButtons,
    KTDrawerMessenger,
    KTLoader,
  },
  setup() {
    const bodyStore = useBodyStore();
    const authStore = useAuthStore();
    const route = useRoute();
    const router = useRouter();

    // show page loading
    bodyStore.addBodyClassName("page-loading");

    console.log(bodyStore.pageTitle);

    const pageTitle = computed(() => {
      return bodyStore.pageTitle;
    });

    const breadcrumbs = computed(() => {
      return bodyStore.pageBreadcrumbPath;
    });

    onMounted(() => {
      //check if current user is authenticated
      if (!authStore.isUserAuthenticated) {
        router.push({ name: "sign-in" });
      }

      // initialize html element classes
      HtmlClass.init();

      nextTick(() => {
        reinitializeComponents();
      });

      // Simulate the delay page loading
      setTimeout(() => {
        // Remove page loader after some time
        bodyStore.removeBodyClassName("page-loading");
      }, 500);
    });

    watch(
      () => route.path,
      () => {
        MenuComponent.hideDropdowns(undefined);

        // check if current user is authenticated
        if (!authStore.isUserAuthenticated) {
          router.push({ name: "sign-in" });
        }

        nextTick(() => {
          reinitializeComponents();
        });
        removeModalBackdrop();
      }
    );

    return {
      toolbarDisplay,
      loaderEnabled,
      contentWidthFluid,
      loaderLogo,
      asideEnabled,
      displaySidebar,
      subheaderDisplay,
      pageTitle,
      breadcrumbs,
      themeLightLogo,
      themeDarkLogo,
    };
  },
});
</script>
