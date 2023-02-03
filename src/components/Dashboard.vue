<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="3">
        <bad-menu></bad-menu>
      </v-col>
      <v-col cols="12" sm="6">
        <booking-form></booking-form>
      </v-col>
      <v-col cols="12" sm="3">
        <bad-booking-list :bookings="bookings"></bad-booking-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import BookingForm from "@/components/BookingForm";
import BadBookingList from "@/components/BadBookingList";
import BadMenu from "@/components/BadMenu";
export default {
  name: "Dashboard",
  components: {BadMenu, BadBookingList, BookingForm},
  computed: {
    bookings() {
      return this.$store.getters.bookings;
    }
  }
}
</script>

<style scoped>

</style>