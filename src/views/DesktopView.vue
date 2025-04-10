<script setup lang="ts">
import DateBlock from '@/components/blocks/DateBlock.vue';
import GuestBlock from '@/components/blocks/GuestBlock.vue';
import MapsBlock from '@/components/blocks/MapsBlock.vue';
import QrBlock from '@/components/blocks/QrBlock.vue';
</script>

<template>
  <div class="desktop-card">
    <div class="maps-section">
      <MapsBlock class="maps-container" width="538" height="350" />
    </div>

    <div class="details-section">
      <GuestBlock class="guest-container" />
      <div class="right-bottom-detail">
        <DateBlock class="date-container" />
        <QrBlock class="qr-container" qr />
      </div>
    </div>
  </div>
</template>

<style scoped>
.desktop-card {
  background: url('@/assets/images/bg_mobile.jpg');
  background-size: 32% 100%;

  border: 3px solid black;
  box-shadow: 7px 7px;

  padding: 1rem;
  height: 100%;

  display: flex;
}

.maps-section {
  flex: 1.5;
  padding-right: 1rem;
}

.details-section {
  display: flex;
  flex-direction: column;
  flex: 1;

  gap: 1rem;
}

.right-bottom-detail {
  display: flex;
  gap: 1rem;
  flex: 1;
}

/* Block Containers */
.maps-container {
  display: flex; /* only for centering */
  justify-content: center;
  align-items: center;
}

.guest-container {
  background-color: #4a8fe7; /* blue test */
  color: white;
  border: 2px solid black;

  padding: 0.8rem;
  text-align: center;
  text-shadow: 2px 2px black;
}

.date-container {
  background-color: #a67c52; /* brown test */
  border: 2px solid black;
  text-shadow: 2px 2px black;
  color: white;

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 0.8rem;
}

.qr-container {
  background-color: #ffed8a; /* yellow test */
  border: 2px solid black;

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 0.8rem;
}
</style>
