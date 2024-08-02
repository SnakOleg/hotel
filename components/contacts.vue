<template>
  <div :id="id" class="contacts wrapper md:pt-20 pt-5 pb-5">
    <footer class="md:pt-20 pt-5 pb-5">
      <div class="wrapper">
        <div class="bg-white md:p-8 p-4 rounded-20 mb-50">
          <div class="flex lg:flex-row gap-y-5 flex-col justify-between">
            <div class="flex lg:flex-row flex-col md:gap-16 gap-6">
              <div class="flex flex-col gap-4">
                <a class="hover:opacity-60 an" href="/hotels">Отели</a>
                <a class="hover:opacity-60 an" href="/apartments">Апартаменты</a>
                <a class="hover:opacity-60 an" href="/hostel">Хостел</a>
                <a class="hover:opacity-60 an" href="/contacts">Контакты</a>
              </div>
            </div>
            <div class="flex flex-col md:gap-y-10 gap-y-5 justify-between">
              <div class="flex lg:justify-end min-h-[50px]">
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
            <div class="tsm-ex text-black/80">
              © 2024 BeregMore
            </div>
            <div class="tsm-ex text-black/80">
              <a href="https://github.com/SnakOleg" class="hover:opacity-60 an">Разработал Snak</a>
            </div>
            <div class="tsm-ex text-black/80">
              <p>Телефон: +7 (123) 456-78-90</p>
              <p>Адрес: Курортная набережная, 9, Россия</p>
            </div>
          </div>
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

<style>
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

.mb-50 {
  margin-bottom: 50px;
}
</style>
