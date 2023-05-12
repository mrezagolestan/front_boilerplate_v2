import ApiService from "@/core/services/ApiService";
import VueApexCharts from "vue3-apexcharts";

export default defineNuxtPlugin((nuxtApp) => {
    ApiService.init(nuxtApp.vueApp);

});
