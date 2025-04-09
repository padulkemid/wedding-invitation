<script setup lang="ts">
import DateBlock from '@/components/blocks/DateBlock.vue';
import GuestBlock from '@/components/blocks/GuestBlock.vue';
import MapsBlock from '@/components/blocks/MapsBlock.vue';
import QrBlock from '@/components/blocks/QrBlock.vue';
</script>

<template>
  <div class="desktop-inner-card">
    <GuestBlock class="guest-container" />
    <DateBlock class="date-container" />
    <MapsBlock width="500" height="350" />
    <QrBlock class="qr-container" qr />
  </div>
</template>

<style scoped></style>
