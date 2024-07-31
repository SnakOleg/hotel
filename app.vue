<script>
import Navbar from '/components/header.vue'

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
  margin: 0;
  padding: 0;
}

</style>