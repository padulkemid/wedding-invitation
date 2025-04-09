<script setup lang="ts">
import Constants from '@/utils/constants';

interface Props {
  width?: string;
  height?: string;
}

const props = defineProps<Props>();
const attr = {
  src: Constants.LOCATION.MAPS,
  width: props.width,
  height: props.width,
};
</script>

<template>
  <div>
    <iframe
      v-bind="attr"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
    />
  </div>
</template>
