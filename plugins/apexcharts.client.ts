import VueApexCharts from "vue3-apexcharts";

console.log('Vue3-Apexcharts')
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueApexCharts);
});
