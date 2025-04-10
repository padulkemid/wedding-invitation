<script setup lang="ts">
interface Props {
  src: string;
  width?: string;
  height?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <iframe
    v-bind="props"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    allowfullscreen
  />
</template>
