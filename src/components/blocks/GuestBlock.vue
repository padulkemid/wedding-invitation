<script setup lang="ts">
import { capitalizeWords } from '@/utils/functions';
import Keys from '@/utils/keys';
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
    <h2>{{ Translations.GUEST_GREETING.replace(Keys.GUEST_NAME, capitalizeWords(guestName)) }}</h2>
  </div>
</template>
