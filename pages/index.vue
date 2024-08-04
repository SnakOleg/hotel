<template>
  <div class="wrapper md:pb-50 pb-[25px]-section">
    <BookingForm id="booking-form" />
    <Apartments id="apartments" />
    <Gallery id="gallery" />
    <Map id="map" />
    <Contacts id="contacts" />
  </div>
</template>


<script>
import BookingForm from '~/components/booking.vue'
import Gallery from '@/components/gallery.vue'
import Apartments from '@/components/apartments.vue'
import Map from '~/components/map.vue'
import Contacts from '@/components/contacts.vue'

export default {
  components: {
    BookingForm,
    Gallery,
    Apartments,
    Map,
    Contacts,
  },
}
</script>

<style scoped>
* {
  background-color: rgb(245 245 245 / var(--tw-bg-opacity)) !important;
}
</style>
