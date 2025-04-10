<script setup lang="ts">
import DateBlock from '@/components/blocks/DateBlock.vue';
import GuestBlock from '@/components/blocks/GuestBlock.vue';
import MapsBlock from '@/components/blocks/MapsBlock.vue';
import QrBlock from '@/components/blocks/QrBlock.vue';
</script>

<template>
  <div class="mobile-card">
    <GuestBlock class="guest-container" />
    <DateBlock class="date-container" />
    <MapsBlock />
    <QrBlock class="qr-container" />
  </div>
</template>

<style scoped>
.mobile-card {
  background: url('@/assets/images/bg_mobile.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;

  border: 3px solid black;
  box-shadow: 7px 7px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  width: 100%;

  text-align: center;
}

/* Block Containers */
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
