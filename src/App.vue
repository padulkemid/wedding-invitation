<script setup lang="ts"></script>

<template>
  <header>
    <div class="header-container">
      <h3>the wedding of</h3>
      <h1>Fadhil & Tanaya</h1>
    </div>
  </header>
  <main>
    <div class="body-container">
      <div id="left">
        <div class="maps-container">
          <p style="color: aquamarine">maps box</p>
        </div>
      </div>
      <div id="right">
        <div class="guest-container">
          <p>hi, guest_name</p>
        </div>
        <div id="right-bottom">
          <div class="date-container">
            <p>date</p>
          </div>
          <div class="qr-container">
            <p>qr_code</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
h2 {
  margin: 0;
}

.header-container {
  background-color: red;
}

.body-container {
  margin: 2em auto;
  padding: 8em;
  height: 85vh;

  background-color: cyan;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 0.2em;
}

.body-container > div {
  flex: 1;
  min-width: 0;
}

.maps-container {
  background-color: green;
  height: 100%;
}

.guest-container {
  background-color: black;
  color: white;
  height: 40%;
}

.date-container {
  background-color: brown;
  color: white;
}

.qr-container {
  background-color: yellow;
}

#right {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}

#right-bottom {
  height: 60%;

  display: flex;
  flex-direction: row;
  gap: 0.3em;
}

#right-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

#right-bottom > div {
  flex: 1;
  min-width: 0;
}

@media only screen and (max-width: 820px) {
  .body-container {
    height: 95vh;
    margin: 1em auto;
    padding: 0.7em;

    flex-direction: column;
  }

  .maps-container {
    margin: auto 0;
  }

  #right-bottom {
    flex-direction: column;
  }
}
</style>
