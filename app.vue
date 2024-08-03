<script>
import Navbar from '/components/navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <div>
    <Navbar />
    <NuxtPage />
  </div>
</template>

<style>

body {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
  font-family: 'Geologica', sans-serif;
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
  margin-left: auto;
  margin-right: auto;
  max-width: 1320px;
  padding-left: 1rem;
  padding-right: 1rem;
}

</style>