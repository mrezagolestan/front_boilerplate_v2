<template>
  <KTModalCard
    title="Two-factor Authentication"
    description="Click on the below buttons to launch <br/>two-factor authentication setup example."
    :image="getIllustrationsPath('4.png')"
    button-text="Enable Two-factor Authentication"
    modal-id="kt_modal_two_factor_authentication"
  ></KTModalCard>

  <KTTwoFactorAuthModal></KTTwoFactorAuthModal>
</template>

<script setup lang="ts">
definePageMeta({layout: "main"});
useSeoMeta({title: 'Two Factor Auth'})
</script>
<script lang="ts">
import { defineComponent } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTTwoFactorAuthModal from "@/components/modals/wizards/TwoFactorAuthModal.vue";
import { getIllustrationsPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "two-factor-auth",
  components: {
    KTModalCard,
    KTTwoFactorAuthModal,
  },
  setup() {
    return {
      getIllustrationsPath,
    };
  },
});
</script>
