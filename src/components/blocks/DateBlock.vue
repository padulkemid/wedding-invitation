<script setup lang="ts">
import Translations from '@/utils/translations';

interface Props {
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="props.class">
    <p>
      {{ Translations.DATE }}
      <br />
      <b>{{ Translations.TIME }}</b>
      <br />
      <br />
      {{ Translations.LOCATION }}
    </p>
  </div>
</template>

<style scoped>
p {
  font-size: 1.2rem;
}
</style>
