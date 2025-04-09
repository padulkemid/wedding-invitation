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
    <img v-if="props.qr" :src="Constants.LOCATION.QR_IMAGE" alt="qr" />
    <a v-else :href="Constants.LOCATION.SAWERIA" target="_blank">
      {{ Translations.BLESSING }}
    </a>
  </div>
</template>
