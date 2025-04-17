<script setup lang="ts">
import Constants from '@/utils/constants';
import Translations from '@/utils/translations';
</script>

<template>
  <div>
    <img src="@/assets/images/ft_logo.webp" alt="ft_logo" />
    <span></span>
    <a :href="Constants.LOCATION.GITHUB" target="_blank">
      <img src="@/assets/images/gh_logo.svg" alt="gh_logo" />
    </a>
  </div>
  <sub>{{ Translations.FOOTER_TEXT }}</sub>
</template>

<style scoped>
div {
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  margin: 0.5rem auto;
}

img {
  height: 18px;
  width: auto;
  object-fit: contain;
}

span {
  height: 17px;
  width: 1px;
  background-color: black;
}

sub {
  font-size: 0.7rem;
  text-align: center;
}

a {
  text-decoration: none;
}

@media only screen and (min-width: 768px) {
  img {
    height: 20px;
  }
}
</style>
