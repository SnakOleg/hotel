<template>
  <div>
    <BookingForm />
    <Gallery />
    <About />
    <Contact />
  </div>
</template>

<script>
import BookingForm from '/components/BookingForm.vue'
import Gallery from '/components/Gallery.vue'
import About from '/components/About.vue'
import Contact from '/components/Contact.vue'

export default {
  components: {
    BookingForm,
    Gallery,
    About,
    Contact,
  },
}
</script>
