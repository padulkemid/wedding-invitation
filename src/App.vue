<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import HeaderText from './components/HeaderText.vue';
import DesktopView from './views/DesktopView.vue';
import MobileView from './views/MobileView.vue';

const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value <= 1000);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
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
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 1.5rem;
}

@media only screen and (max-width: 767px) {
  .container {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .container {
    width: 95%;
  }
}

@media only screen and (min-width: 1024px) {
  .container {
    width: 85%;
  }
}
</style>
