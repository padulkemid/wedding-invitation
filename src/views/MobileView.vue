<script setup lang="ts">
import DateBlock from '@/components/blocks/DateBlock.vue';
import GuestBlock from '@/components/blocks/GuestBlock.vue';
import MapsBlock from '@/components/blocks/MapsBlock.vue';
import MessageBlock from '@/components/blocks/MessageBlock.vue';
import QrBlock from '@/components/blocks/QrBlock.vue';
</script>

<template>
  <MessageBlock />
  <div class="mobile view">
    <GuestBlock class="guest block" />
    <DateBlock class="date block" />
    <MapsBlock />
    <QrBlock class="qr-block" />
  </div>
</template>
