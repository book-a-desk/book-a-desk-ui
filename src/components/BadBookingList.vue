<template>
  <v-list>
    <v-subheader class="font-weight-black">UPCOMING BOOKINGS</v-subheader>
    <v-list-item v-for="booking in bookings">
      <bad-booking-details class="mb-5"  :day="booking.day" :month="booking.month">
      </bad-booking-details>
    </v-list-item>

  </v-list>
</template>

<script>
import BadBookingDetails from "@/components/BadBookingDetails";
export default {
  name: "BadBookingList",
  components: {BadBookingDetails},
  props: {
    bookings: []
  }
}
</script>

<style scoped>

</style>