<script setup lang="ts">
import Translations from '@/utils/translations';

interface Props {
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="props.class">
    <h3>
      {{ Translations.DATE }}
      <br />
      {{ Translations.TIME }}
      <br />
      {{ Translations.LOCATION }}
    </h3>
  </div>
</template>
