import { computed } from "vue";
import { useConfigStore } from '@/store/config'
import {createPinia} from 'pinia';
const pinia = createPinia()
const configStore = useConfigStore(pinia);

/**
 * Returns layout config
 * @returns {object}
 */
export const config = computed(() => {
    return configStore.layoutConfig();
});

/**
 * Set the sidebar display
 * @returns {boolean}
 */
export const displaySidebar = computed(() => {
  return configStore.layoutConfig("sidebar.display");
});

/**
 * Check if footer container is fluid
 * @returns {boolean}
 */
export const footerWidthFluid = computed(() => {
  return configStore.layoutConfig("footer.width") === "fluid";
});

/**
 * Check if header container is fluid
 * @returns {boolean}
 */
export const headerWidthFluid = computed(() => {
  return configStore.layoutConfig("header.width") === "fluid";
});

/**
 * Returns header left part type
 * @returns {string}
 */
export const headerLeft = computed(() => {
  return configStore.layoutConfig("header.left");
});

/**
 * Set the aside display
 * @returns {boolean}
 */
export const asideDisplay = computed(() => {
  return configStore.layoutConfig("aside.display") == "true";
});

/**
 * Check if toolbar width is fluid
 * @returns {boolean}
 */
export const toolbarWidthFluid = computed(() => {
  return configStore.layoutConfig("toolbar.width") === "fluid";
});

/**
 * Set the toolbar display
 * @returns {boolean}
 */
export const toolbarDisplay = computed(() => {
  return configStore.layoutConfig("toolbar.display");
});

/**
 * Page title display
 * @returns {boolean}
 */
export const pageTitleDisplay = computed(() => {
  return configStore.layoutConfig("pageTitle.display");
});

/**
 * Page title breadcrumb display
 * @returns {boolean}
 */
export const pageTitleBreadcrumbDisplay = computed(() => {
  return configStore.layoutConfig("pageTitle.breadcrumb");
});

/**
 * Page title direction display
 * @returns { "row" | "column" }
 */
export const pageTitleDirection = computed(() => {
  return configStore.layoutConfig("pageTitle.direction");
});

/**
 * Check if the page loader is enabled
 * @returns {boolean}
 */
export const loaderEnabled = computed(() => {
  return configStore.layoutConfig("loader.display");
});

/**
 * Check if container width is fluid
 * @returns {boolean}
 */
export const contentWidthFluid = computed(() => {
  return configStore.layoutConfig("content.width") === "fluid";
});

/**
 * Page loader logo image
 * @returns {string}
 */
export const loaderLogo = computed(() => {
  return import.meta.env.baseUrl + configStore.layoutConfig("loader.logo");
});

/**
 * Check if the aside menu is enabled
 * @returns {boolean}
 */
export const asideEnabled = computed(() => {
  return !!configStore.layoutConfig("aside.display");
});

/**
 * Set the aside theme
 * @returns {string}
 */
export const asideTheme = computed(() => {
  return configStore.layoutConfig("aside.theme");
});

/**
 * Set the subheader display
 * @returns {boolean}
 */
export const subheaderDisplay = computed(() => {
  return configStore.layoutConfig("toolbar.display");
});

/**
 * Set the aside menu icon type
 * @returns {string}
 */
export const asideMenuIcons = computed(() => {
  return configStore.layoutConfig("aside.menuIcon");
});

/**
 * Light theme logo image
 * @returns {string}
 */
export const themeLightLogo = computed(() => {
  return configStore.layoutConfig("main.logo.light");
});

/**
 * Dark theme logo image
 * @returns {string}
 */
export const themeDarkLogo = computed(() => {
  return configStore.layoutConfig("main.logo.dark");
});

/**
 * Set the header menu icon type
 * @returns {string}
 */
export const headerMenuIcons = computed(() => {
  return configStore.layoutConfig("header.menuIcon");
});

/**
 * Illustrations set
 * @returns {string}
 */
export const illustrationsSet = computed(() => {
  return configStore.layoutConfig("illustrations.set");
});
