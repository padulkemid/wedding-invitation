<script setup lang="ts">
import DateBlock from '@/components/blocks/DateBlock.vue';
import GuestBlock from '@/components/blocks/GuestBlock.vue';
import MapsBlock from '@/components/blocks/MapsBlock.vue';
import MessageBlock from '@/components/blocks/MessageBlock.vue';
import QrBlock from '@/components/blocks/QrBlock.vue';
</script>

<template>
  <MessageBlock />
  <div class="desktop view decorated">
    <div class="maps">
      <MapsBlock class="maps-container" width="100%" height="100%" />
    </div>
    <div class="detail section">
      <GuestBlock class="guest block" />
      <div class="right-bottom section">
        <DateBlock class="date block" />
        <QrBlock class="qr-block" qr />
      </div>
    </div>
  </div>
</template>
