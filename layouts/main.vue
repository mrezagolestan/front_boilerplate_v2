<template>
  <!-- begin:: Body -->
  <div class="page d-flex flex-column flex-column-fluid">
    <KTHeader title="Test" />
  </div>
  <!-- end:: Body -->
  <slot />
</template>


<script lang="ts">
import KTAside from "@/layouts/main-layout/aside/Aside.vue";

// import { defineComponent, computed, onMounted, watch, nextTick } from "vue";
// import { useStore } from "vuex";
// import { useRoute, useRouter } from "vue-router";
// import KTSidebar from "@/layouts/main-layout/sidebar/Sidebar.vue";
import KTHeader from "@/layouts/main-layout/header/Header.vue";
// import KTFooter from "@/layouts/main-layout/footer/Footer.vue";
// import HtmlClass from "@/core/services/LayoutService";
// import KTScrollTop from "@/layouts/main-layout/extras/ScrollTop.vue";
// import KTActivityDrawer from "@/layouts/main-layout/drawers/ActivityDrawer.vue";
// import KTLoader from '@/components/Loader.vue';
// import KTCreateApp from "@/components/modals/wizards/create-app-modal/CreateAppModal.vue";
// import KTInviteFriendsModal from "@/components/modals/general/InviteFriendsModal.vue";
// import KTDemosDrawer from "@/layouts/main-layout/extras/DemosDrawer.vue";
// import KTHelpDrawer from "@/layouts/main-layout/extras/HelpDrawer.vue";
// import KTToolButtons from "@/layouts/main-layout/extras/ToolButtons.vue";
// import KTDrawerMessenger from "@/layouts/main-layout/extras/MessengerDrawer.vue";
// import { Actions } from "@/store/enums/StoreEnums";
// import { MenuComponent } from "/assets/ts/components";
// import { removeModalBackdrop } from "@/core/helpers/dom";
// import { reinitializeComponents } from "@/core/plugins/keenthemes";
// import {
//   toolbarDisplay,
//   loaderEnabled,
//   contentWidthFluid,
//   loaderLogo,
//   asideEnabled,
//   displaySidebar,
//   subheaderDisplay,
//   themeLightLogo,
//   themeDarkLogo,
// } from "@/core/helpers/config";
//
export default defineComponent({
  name: "master-layout",
  components: {
    KTAside,
    // KTSidebar,
    KTHeader,
    // KTFooter,
    // KTScrollTop,
    // KTCreateApp,
    // KTInviteFriendsModal,
    // KTActivityDrawer,
    // KTDemosDrawer,
    // KTHelpDrawer,
    // KTToolButtons,
    // KTDrawerMessenger,
    // KTLoader,
  },
  // setup() {
  //   const store = useStore();
  //   const route = useRoute();
  //   const router = useRouter();
  //
  //   // show page loading
  //   store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
  //
  //   const pageTitle = computed(() => {
  //     return store.getters.pageTitle;
  //   });
  //
  //   const breadcrumbs = computed(() => {
  //     return store.getters.pageBreadcrumbPath;
  //   });
  //
  //   onMounted(() => {
  //     //check if current user is authenticated
  //     if (!store.getters.isUserAuthenticated) {
  //       router.push({ name: "sign-in" });
  //     }
  //
  //     // initialize html element classes
  //     HtmlClass.init();
  //
  //     nextTick(() => {
  //       reinitializeComponents();
  //     });
  //
  //     // Simulate the delay page loading
  //     setTimeout(() => {
  //       // Remove page loader after some time
  //       store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
  //     }, 500);
  //   });
  //
  //   watch(
  //       () => route.path,
  //       () => {
  //         MenuComponent.hideDropdowns(undefined);
  //
  //         // check if current user is authenticated
  //         if (!store.getters.isUserAuthenticated) {
  //           router.push({ name: "sign-in" });
  //         }
  //
  //         nextTick(() => {
  //           reinitializeComponents();
  //         });
  //         removeModalBackdrop();
  //       }
  //   );
  //
  //   return {
  //     toolbarDisplay,
  //     loaderEnabled,
  //     contentWidthFluid,
  //     loaderLogo,
  //     asideEnabled,
  //     displaySidebar,
  //     subheaderDisplay,
  //     pageTitle,
  //     breadcrumbs,
  //     themeLightLogo,
  //     themeDarkLogo,
  //   };
  // },
  //
});

</script>

