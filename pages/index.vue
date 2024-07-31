<template>
  <div>
    <BookingForm />
    <Gallery />
    <About />
    <Contact />
  </div>
</template>

<script>
import BookingForm from '@/components/bookingForm.vue'
import Gallery from '@/components/gallery.vue'
import About from '@/components/about.vue'
import Contact from '@/components/contact.vue'

export default {
  components: {
    BookingForm,
    Gallery,
    About,
    Contact,
  },
}
</script>

<style scoped>
* {
  background-color: #005a5b !important;
}
</style>
