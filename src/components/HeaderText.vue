<script setup lang="ts">
import Translations from '@/utils/translations';
</script>

<template>
  <div class="header">
    <p class="sub-header">{{ Translations.HEADER_SUBTITLE }}</p>
    <h1>{{ Translations.HEADER_TITLE }}</h1>
  </div>
</template>

<style scoped>
.header {
  color: white;
  margin-bottom: 1.5rem;
}

.subtitle {
  font-size: 1rem;
  text-shadow: 1px 1px black;
  margin-bottom: 0.2rem;
}

h1 {
  font-size: 2.1rem;
  font-weight: bold;
  text-shadow: 3px 3px black;
}
</style>
