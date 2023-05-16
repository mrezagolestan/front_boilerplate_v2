import VueApexCharts from "vue3-apexcharts";

console.log('VueApexCharts');


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueApexCharts);
});

// export default defineNuxtPlugin(async () => {
//   return {
//     provide: {
//       VueApexCharts: VueApexCharts,
//     }
//   };
// });