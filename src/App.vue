<script setup lang="ts">
import { ref, computed } from 'vue';
import HeaderText from './components/HeaderText.vue';
import DesktopView from './views/DesktopView.vue';
import MobileView from './views/MobileView.vue';

const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value <= 1000);
</script>

<template>
  <div class="container">
    <HeaderText />
    <DesktopView v-if="!isMobile" />
    <MobileView v-else />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1000px;

  height: auto;
  max-height: 90vh;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  padding: 1.5rem;
}
</style>
