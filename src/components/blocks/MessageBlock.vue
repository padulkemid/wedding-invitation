<script setup lang="ts">
import Translations from '@/utils/translations';
import AmpersandDivider from '../AmpersandDivider.vue';
</script>

<template>
  <div class="message view decorated">
    <!-- <img src="@/assets/images/rose.svg" alt="rose" class="corner" /> -->

    <p class="justify bottom-gap">
      {{ Translations.MESSAGE_HEADER }}
    </p>
    <p class="center bottom-gap decorated circular-rose-bg">
      {{ Translations.MESSAGE_INVITATION_OPENER }}
      <br /><br />

      <b>{{ Translations.MESSAGE_GROOM_NAME }}</b>
      <br />

      <sub>
        {{ Translations.MESSAGE_GROOM_PARENTS_BRIDGE }}
        <br />
        {{ Translations.MESSAGE_GROOM_PARENTS_NAME }}
      </sub>
      <br />

      <AmpersandDivider />

      <b>{{ Translations.MESSAGE_BRIDE_NAME }}</b>
      <br />

      <sub>
        {{ Translations.MESSAGE_BRIDE_PARENTS_BRIDGE }}
        <br />
        {{ Translations.MESSAGE_BRIDE_PARENTS_NAME }}
      </sub>
    </p>
    <p class="justify">
      {{ Translations.MESSAGE_FOOTER }}
    </p>
  </div>
</template>

<style scoped>
p {
  font-size: 1.1rem;
  text-shadow: 1px 1px white;
}

b {
  font-size: 1.6rem;
  font-family: 'Dancing Script', serif;
}

.bottom-gap {
  margin-bottom: 1.8rem;
}

.justify {
  text-align: justify;
}

.center {
  text-align: center;
}

.message {
  flex-direction: column;
  margin: auto;
}

.circular-rose-bg::before {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);

  width: 100%;
  height: 100%;

  background-image: url('@/assets/images/circular_rose.svg');

  opacity: 0.15;
}
</style>
