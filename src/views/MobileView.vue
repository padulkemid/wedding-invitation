<script setup lang="ts">
import DateBlock from '@/components/blocks/DateBlock.vue';
import GuestBlock from '@/components/blocks/GuestBlock.vue';
import MapsBlock from '@/components/blocks/MapsBlock.vue';
import MessageBlock from '@/components/blocks/MessageBlock.vue';
import QrBlock from '@/components/blocks/QrBlock.vue';
</script>

<template>
  <MessageBlock />
  <div class="mobile-card">
    <GuestBlock class="guest-container" />
    <DateBlock class="date-container" />
    <MapsBlock />
    <QrBlock class="qr-container" />
  </div>
</template>

<style scoped>
.mobile-card {
  background-color: #e8ded7;

  border: 2px solid #bcc1c1;
  box-shadow: 7px 7px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  width: 100%;
  height: 100%;
  margin: 1rem auto;

  text-align: center;
}
</style>
