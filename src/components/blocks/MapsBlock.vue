<script setup lang="ts">
import Constants from '@/utils/constants';
import GoogleMaps from './embed/GoogleMaps.vue';

interface Props {
  width?: string;
  height?: string;
  class?: string;
}

const props = defineProps<Props>();
const attr = {
  src: Constants.LOCATION.MAPS,
  width: props.width,
  height: props.height,
};
</script>

<template>
  <div v-if="props.class" :class="props.class">
    <GoogleMaps v-bind="attr" />
  </div>

  <GoogleMaps v-else v-bind="attr" />
</template>
