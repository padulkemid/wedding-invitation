<script setup lang="ts">
import Translations from '@/utils/translations';
</script>

<template>
  <div>
    <p class="subtitle">{{ Translations.HEADER_SUBTITLE }}</p>
    <h1>{{ Translations.HEADER_TITLE }}</h1>
  </div>
</template>

<style scoped>
div {
  color: white;
  margin-bottom: 1.5rem;
}

.subtitle {
  font-size: 1.8rem;
  text-shadow: 1px 1px black;

  margin-bottom: 0.2rem;
}

h1 {
  font-size: 3rem;
  text-shadow: 3px 3px black;
  font-family: 'Vailery', 'Georgia', serif;
}
</style>
