<template>
  <div class="booking-container">
    <h1>Бронирование номеров</h1>
    <div class="underline"></div>
    <div class="iframe-wrapper">
      <div id="booking_iframe">
        <iframe :src="iframeSrc" id="booking_iframe_iframe" frameborder="0" allowtransparency="1" style="width: 100%; height: 1653px;" sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" scrolling="no"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iframeSrc: 'https://reservationsteps.ru/rooms/index/dbbb125e-d1ee-4e83-8b20-6cb396142aac?lang=ru&scroll_to_rooms=1&colorSchemePreview=0&onlyrooms=&name=&surname=&email=&phone=&orderid=&servicemode=0&firstroom=0&vkapp=&insidePopup=0&dfrom=01-08-2024&dto=02-08-2024&adults=1'
    };
  }
}
</script>

<style scoped>
body {
  background-color: #005a5b !important;
}

.booking-container {
  max-width: 1200px;
  padding-bottom: 50px;
  text-align: center;
  margin: 106px auto 0;
}

h1 {
  font-size: 4em;
  margin-bottom: 10px;
  color: #b4975b;
  font-family: TildaSans;
}

.underline {
  width: 780px;
  height: 1px;
  background-color: #b4975b;
  margin: 0 auto 30px;
}

.iframe-wrapper {
  position: relative;
}

#booking_iframe_iframe {
  width: 100%;
  height: 1653px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
