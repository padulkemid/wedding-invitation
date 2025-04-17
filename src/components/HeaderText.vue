<script setup lang="ts">
import Translations from '@/utils/translations';
</script>

<template>
  <div>
    <p class="subtitle shadow">{{ Translations.HEADER_SUBTITLE }}</p>
    <h1 class="shadow">{{ Translations.HEADER_TITLE }}</h1>
  </div>
</template>

<style scoped>
div {
  color: black;
  margin-bottom: 1.5rem;
}

.shadow {
  text-shadow: 1px 1px var(--roman-silver);
}

.subtitle {
  font-size: 1.8rem;

  margin-bottom: 0.2rem;
}

h1 {
  font-size: 2.5rem;
  font-family: 'Vailery', 'Georgia', serif;
}
</style>
