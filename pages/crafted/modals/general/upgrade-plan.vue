<template>
  <KTModalCard
    title="Upgrade Plan Modal Example"
    description="Click on the below buttons to launch <br/>a upgrade plan example."
    :image="getIllustrationsPath('8.png')"
    button-text="Upgrade Plan"
    modal-id="kt_modal_upgrade_plan"
  ></KTModalCard>
  <KTUpgradePlanModal></KTUpgradePlanModal>
</template>

<script setup lang="ts">
definePageMeta({layout: "main"});
useSeoMeta({title: 'Upgrade Plan'})
</script>
<script lang="ts">
import { defineComponent } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTUpgradePlanModal from "@/components/modals/general/UpgradePlanModal.vue";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "upgrade-plan",
  components: {
    KTModalCard,
    KTUpgradePlanModal,
  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
