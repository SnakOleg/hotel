<template>
  <div class="wrapper md:pb-50 pb-[25px]-section">
    <BookingForm id="booking-form" />
    <Apartments id="apartments" />
    <About id="about" />
    <Map id="map" />
    <Contacts id="contacts" />
  </div>
</template>


<script>
import BookingForm from '~/components/booking.vue'
import About from '~/components/about.vue'
import Apartments from '@/components/apartments.vue'
import Map from '~/components/map.vue'
import Contacts from '@/components/contacts.vue'

export default {
  components: {
    BookingForm,
    About,
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
