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
  background-color: #ffd6d6; /* pink test */

  border: 3px solid black;
  box-shadow: 7px 7px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  width: 100%;

  text-align: center;
}
</style>
