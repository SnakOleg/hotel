<template>
  <div class="booking-container">
    <h1>Бронирование</h1>
    <div class="iframe-container">
      <iframe
          :src="iframeSrc"
          frameborder="0"
          allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    iframeSrc() {
      const urlParams = new URLSearchParams(window.location.search);
      const checkinDate = urlParams.get('dfrom') || '';
      const checkoutDate = urlParams.get('dto') || '';
      const guests = urlParams.get('adults') || '1';

      return `https://hotel-aql.pages.dev/booking?dfrom=${encodeURIComponent(checkinDate)}&dto=${encodeURIComponent(checkoutDate)}&adults=${encodeURIComponent(guests)}&padding=20&lang=ru&radius=20&uid=0b68a9e2-458c-46c4-9c03-c191a7e32b38`;
    },
  },
}
</script>

<style scoped>
.booking-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  font-size: 2em;
  color: #333;
}

.iframe-container {
  position: relative;
  width: 100%;
  height: 800px;
  margin-top: 20px;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .iframe-container {
    height: 600px;
  }
}
</style>
