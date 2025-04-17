<script setup lang="ts">
import { capitalizeWords } from '@/utils/functions';
import Translations from '@/utils/translations';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

interface Props {
  class?: string;
}

const props = defineProps<Props>();
const router = useRoute();
const guestName = computed(() => router.query.gn?.toString() || Translations.DEFAULT_GUEST_NAME);
</script>

<template>
  <div :class="props.class">
    <p>
      {{ Translations.GUEST_HEADER }}
      <b>{{ capitalizeWords(guestName) }}</b>
      ,<br />
      {{ Translations.GUEST_BODY }}
    </p>
  </div>
</template>

<style scoped>
p {
  font-size: 1.2rem;
  text-align: center;
}
</style>
