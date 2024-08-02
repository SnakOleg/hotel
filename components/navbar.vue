<template>
  <div class="relative">
    <div class="wrapper py-4 relative z-[300]">
      <div class="bg-white items-center rounded-2xl py-3 md:px-6 px-4 pr-2 flex md:gap-3 gap-6 md:justify-between">
        <div class="flex gap-8 items-center">
          <a class="text-[#7E7E8E] hover:opacity-60 an" href="/">
            <NuxtImg src="image/logo.png" height="46"/>
          </a>
          <div class="md:flex hidden gap-8 items-center">
            <a class="tbase hover:opacity-60" href="#booking-form">Отели</a>
            <a class="tbase hover:opacity-60" href="#gallery">Апартаменты</a>
            <a class="tbase hover:opacity-60" href="#map">Мы тут</a>
            <a class="tbase hover:opacity-60" href="#contacts">Контакты</a>
          </div>
        </div>
        <div>
          <div class="flex gap-1 items-center cursor-pointer hover:opacity-60 relative">
            <div class="tbase">Москва</div>
            <div class="relative bottom-[2px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 12L12 15.9999L16.5 12" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

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
</style>
