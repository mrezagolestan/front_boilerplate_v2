<template>
  <KTModalCard
    title="New Target Modal Example"
    description="Click on the below buttons to launch <br/>a new target example."
    :image="getIllustrationsPath('17.png')"
    button-text="Add New Target"
    modal-id="kt_modal_new_target"
  ></KTModalCard>

  <KTNewTargetModal></KTNewTargetModal>
</template>

<script setup lang="ts">
definePageMeta({layout: "main"});
useSeoMeta({title: 'New Target'})
</script>
<script lang="ts">
import { defineComponent } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTNewTargetModal from "@/components/modals/forms/NewTargetModal.vue";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "new-target",
  components: {
    KTModalCard,
    KTNewTargetModal,
  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
