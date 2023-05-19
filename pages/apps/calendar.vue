<template>
  <CalendarApp1></CalendarApp1>
</template>

<script setup lang="ts">
definePageMeta({layout: "main"});
useSeoMeta({title: 'Calendar'})
</script>
<script lang="ts">
import { defineComponent } from "vue";
import CalendarApp1 from "@/components/calendar/CalendarApp1.vue";

export default defineComponent({
  name: "apps-calendar",
  components: {
    CalendarApp1,
  },
});
</script>
