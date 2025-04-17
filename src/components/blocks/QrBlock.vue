<script setup lang="ts">
import Constants from '@/utils/constants';
import Translations from '@/utils/translations';

interface Props {
  class?: string;
  qr?: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="props.class">
    <a v-if="props.qr" :href="Constants.LOCATION.SAWERIA" target="_blank">
      <img src="@/assets/images/qr.webp" alt="qr" data-test="qr_image" loading="lazy" />
    </a>
    <a v-else :href="Constants.LOCATION.SAWERIA" target="_blank">
      {{ Translations.BLESSING }}
    </a>
  </div>
</template>

<style scoped>
a {
  font-size: 1rem;

  text-decoration: none;
}
</style>
