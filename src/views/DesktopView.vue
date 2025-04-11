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
  background-color: #ffd6d6; /* pink test */

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
</style>
