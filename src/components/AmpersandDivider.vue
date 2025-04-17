<template>
  <span class="divider-container">
    <span class="line"></span>
    <span class="amp">&amp;</span>
    <span class="line"></span>
  </span>
</template>

<style scoped>
.divider-container {
  margin: 0 auto;

  display: flex;
  align-items: center;

  text-align: center;

  width: 70%;
}

.line {
  flex-grow: 1;
  height: 1px;
  background-color: black;
}

.amp {
  margin: 0 10px;
}
</style>
