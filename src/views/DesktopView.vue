<script setup lang="ts">
import DateBlock from '@/components/blocks/DateBlock.vue';
import GuestBlock from '@/components/blocks/GuestBlock.vue';
import MapsBlock from '@/components/blocks/MapsBlock.vue';
import MessageBlock from '@/components/blocks/MessageBlock.vue';
import QrBlock from '@/components/blocks/QrBlock.vue';

// TODO: new palette
// const BLUE = '#BFDDFF';
// const CREAM = '#E8DED7';
// const OLIVE = '#85968C';
// const LIGHT_OLIVE = '#BCC1C1';
// const GRAY = '#848D96';
</script>

<template>
  <MessageBlock />
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
  background-color: #e8ded7;

  border: 2px solid #bcc1c1;
  box-shadow: 7px 7px;

  padding: 1rem;
  margin: 1rem auto;
  height: 100%;
  width: 100%;

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
