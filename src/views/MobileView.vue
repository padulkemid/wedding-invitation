<script setup lang="ts">
import DateBlock from '@/components/blocks/DateBlock.vue';
import GuestBlock from '@/components/blocks/GuestBlock.vue';
import MapsBlock from '@/components/blocks/MapsBlock.vue';
import QrBlock from '@/components/blocks/QrBlock.vue';
</script>

<template>
  <div class="mobile-inner-card">
    <GuestBlock class="guest-container" />
    <DateBlock class="date-container" />
    <MapsBlock />
    <QrBlock class="qr-container" />
  </div>
</template>

<style scoped></style>
