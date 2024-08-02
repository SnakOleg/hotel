<template>
  <div class="header">
    <div class="header-content">
      <div class="menu">
        <NavLinks />
      </div>
      <div class="burger-icon" @click="toggleMenu">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </div>
    </div>
    <div v-if="isMenuOpen" class="mobile-menu">
      <NavLinks />
    </div>
  </div>
</template>

<script>
import NavLinks from '/components/navLinks.vue'

export default {
  components: {
    NavLinks,
  },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style scoped src="assets/css/default.css"></style>

<style scoped>
.header {
  font-family: 'TildaSans';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(180, 151, 91, 1);
  height: 60px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  border-bottom: 2px solid white;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.menu {
  display: flex;
  gap: 20px;
}

.burger-icon {
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 4px;
}

.burger-icon .icon-bar {
  width: 25px;
  height: 3px;
  background-color: white;
  border-radius: 1px;
}

.mobile-menu {
  display: none;
  background-color: #333;
  width: 100%;
}

@media (max-width: 990px) {
  .menu {
    display: none;
  }

  .burger-icon {
    display: flex;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
