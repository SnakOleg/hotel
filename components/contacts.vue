<template>
  <footer :id="id">
    <div class="md:pt-20 pt-5 pb-5">
      <div class="wrapper">
        <div class="bg-white p-4 rounded-20 mb-11">
          <div class="flex lg:flex-row flex-col flex-row md:gap-16 gap-6">
            <a class="flex justify-center xl:justify-start xl:py-5 mx-auto lg:mx-0" href="/">
              <NuxtImg src="image/logo.svg" height="100"/>
            </a>
            <div class="flex lg:flex-row flex-col place-items-center gap-4">
              <a class="tbase hover:opacity-60" href="#booking-form">Главная</a>
              <a class="tbase hover:opacity-60" href="#gallery">Номера</a>
              <a class="tbase hover:opacity-60" href="#map">Как доехать</a>
              <a class="tbase hover:opacity-60" href="#contacts">Контакты</a>
              <a class="tbase hover:opacity-60" href="#about">О нас</a>
            </div>
            <div class="flex-grow"></div>
            <div class="footer-text text-right flex-col md:mt-20">
              <p>Телефон: +7 (123) 456-78-90</p>
              <p>Адрес: Станица Голубицкая, Курортная улица 145, Россия</p>
            </div>
          </div>
        </div>
        <div class="flex gap-5 md:flex-wrap justify-between">
          <div class="tsm-ex">© <!-- -->2024<!-- --> Берег Моря</div>
          <a href="https://github.com/SnakOleg/" class="flex gap-2" rel="noreferrer">
            <div class="tsm-ex">Разработал сайт Snak</div>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped src="~/assets/css/default.css"></style>

<style scoped>
html {
  scroll-behavior: smooth;
}

.wrapper {
  margin-left: auto;
  margin-right: auto;
  max-width: 1320px;
}

img {
  height: 80px;
}

.rounded-20 {
  border-radius: 20px;
}

.tsm-ex {
  font-family: Geologica, sans-serif;
  font-size: 12px;
  line-height: 16px;
  font-weight: 200;
}

.footer-text {
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.875rem;
}

.footer-text a:hover {
  text-decoration: underline;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.footer-text.text-right {
  text-align: right;
}
</style>
