<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const guestName = computed(() => route.query.gn?.toString() || 'Hamba Allah');

// Sample data - in a real app you would pass these as props or fetch them
const qrCode = ref('<qr_code>');
const qrLink = ref('<link>');

// Responsive state management
const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value <= 1000);

// Update window width on resize
const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

// Lifecycle hooks for event listeners
onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="container">
    <div class="header">
      <p class="subtitle">the wedding of</p>
      <h1>Fadhil & Tanaya</h1>
    </div>

    <div class="content" :class="{ mobile: isMobile }">
      <!-- Desktop Layout -->
      <template v-if="!isMobile">
        <div class="desktop-inner-card">
          <div class="maps-section">
            <div class="maps-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7353185983084!2d106.91850118542749!3d-6.298470145359515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69931937765147%3A0x55ca32dd34695df8!2sTelang%20Biru%20by%20hobihobi!5e0!3m2!1sen!2sid!4v1743958070834!5m2!1sen!2sid"
                allowfullscreen
                width="500"
                height="350"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div class="info-section">
            <div class="guest-container">
              {{ guestName }}
            </div>
            <div class="details-row">
              <div class="date-container">
                <p>4 May 2025</p>
                <p>09.30 - 12.00</p>
              </div>
              <div class="qr-container">
                {{ qrCode }}
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- Mobile Layout -->
      <template v-else>
        <div class="mobile-inner-card">
          <div class="guest-container">
            {{ guestName }}
          </div>
          <div class="date-container">
            <p>4 May 2025<br>09.30 - 12.00</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7353185983084!2d106.91850118542749!3d-6.298470145359515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69931937765147%3A0x55ca32dd34695df8!2sTelang%20Biru%20by%20hobihobi!5e0!3m2!1sen!2sid!4v1743958070834!5m2!1sen!2sid"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
          <div class="qr-container">
            {{ qrLink }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1000px;

  height: auto;
  max-height: 90vh;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  padding: 1.5rem;
}

.header {
  color: white;
  margin-bottom: 1.5rem;
}

.subtitle {
  font-size: 1rem;
  text-shadow: 1px 1px black;
  margin-bottom: 0.2rem;
}

h1 {
  font-size: 2.1rem;
  font-weight: bold;
  text-shadow: 3px 3px black;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Desktop Layout */
.desktop-inner-card {
  background-color: #ffd6d6; /* pink test */

  box-shadow: 5px 5px;

  padding: 1rem;
  height: 100%;

  display: flex;
}

.maps-section {
  flex: 1.5;
  padding-right: 1rem;
}

.info-section {
  display: flex;
  flex-direction: column;
  flex: 1;

  gap: 1rem;
}

.maps-container {
  height: 100%;

  display: flex; /* only for centering */
  justify-content: center;
  align-items: center;
}

.guest-container {
  background-color: #4a8fe7; /* blue test */
  color: white;

  padding: 0.8rem;
  text-align: center;
}

.details-row {
  display: flex;
  gap: 1rem;
  flex: 1;
}

.date-container {
  background-color: #a67c52; /* brown test */
  color: white;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0.8rem;
}

.qr-container {
  background-color: #ffed8a; /* yellow test */

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 0.8rem;
}

/* Mobile Layout */
.mobile .content {
  justify-content: center;
}

.mobile-inner-card {
  background-color: #ffd6d6; /* pink test */
  box-shadow: 8px 8px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  width: 100%;
}

.mobile .guest-container,
.mobile .date-container,
.mobile .maps-container,
.mobile .qr-container {
  padding: 1rem;
  text-align: center;
}

.mobile .maps-container {
  flex: 1;
  min-height: 150px;
}
</style>
