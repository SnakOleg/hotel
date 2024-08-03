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
          <button class="md:hidden flex items-center" @click="toggleMenu">
            <svg class="w-6 h-6 text-[#7E7E8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="md:hidden absolute left-0 w-full bg-white rounded-lg shadow-lg mt-2 py-3 px-2 mt-64 md:rounded-tr-2xl">
          <a class="block py-2 px-4 text-[#7E7E8E] hover:bg-gray-200" href="#booking-form" @click="closeMenu">Отели</a>
          <a class="block py-2 px-4 text-[#7E7E8E] hover:bg-gray-200" href="#gallery" @click="closeMenu">Апартаменты</a>
          <a class="block py-2 px-4 text-[#7E7E8E] hover:bg-gray-200" href="#map" @click="closeMenu">Мы тут</a>
          <a class="block py-2 px-4 text-[#7E7E8E] hover:bg-gray-200" href="#contacts" @click="closeMenu">Контакты</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

img {
  height: 46px;
}

.wrapper {
  margin-left: auto;
  margin-right: auto;
  max-width: 1320px;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
