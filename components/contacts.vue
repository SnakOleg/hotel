<template>
  <div :id="id" class="contacts wrapper md:pt-20 pt-5 pb-5">
    <footer class="md:pt-20 pt-5 pb-5">
      <div class="wrapper">
        <div class="bg-white md:p-8 p-6 rounded-20 mb-50 shadow-lg">
          <div class="flex lg:flex-row flex-col gap-6 lg:gap-16">
            <a class="hover:opacity-60 an" href="/">
              <NuxtImg src="image/logo.png" height="80"/>
            </a>
            <div class="flex flex-col gap-4">
              <a class="tbase hover:opacity-60" href="#booking-form">Отели</a>
              <a class="tbase hover:opacity-60" href="#gallery">Апартаменты</a>
              <a class="tbase hover:opacity-60" href="#map">Мы тут</a>
              <a class="tbase hover:opacity-60" href="#contacts">Контакты</a>
            </div>
            <div class="flex-grow"></div>
          </div>
          <div class="footer-text text-right mt-6">
            <p>Телефон: +7 (123) 456-78-90</p>
            <p>Адрес: Курортная набережная, 9, Россия</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom flex justify-between items-center">
        <div class="footer-text" style="font-family: 'Geologica', sans-serif">
          © 2024 Азовское море
        </div>
        <div class="tsm-ex text-black/80">
          <a href="https://github.com/SnakOleg" class="hover:opacity-80">Разработал Snak</a>
        </div>
      </div>
    </footer>
  </div>
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
  padding-left: 1rem;
  padding-right: 1rem;
}

.rounded-20 {
  border-radius: 20px;
}

.bg-white {
  background-color: #ffffff;
}

.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.footer-link {
  display: block;
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease, opacity 0.3s ease;
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
