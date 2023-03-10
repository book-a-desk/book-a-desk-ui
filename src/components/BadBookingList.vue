<template>
  <v-list>
    <v-subheader class="font-weight-black">UPCOMING BOOKINGS</v-subheader>
    <v-list-item v-for="booking in bookings" v-bind:key="booking.date">
      <bad-booking-details
        class="mb-5"
        :day="getDay(booking.date)"
        :month="getMonth(booking.date)"
      >
      </bad-booking-details>
    </v-list-item>
  </v-list>
</template>

<script>
import BadBookingDetails from "@/components/BadBookingDetails.vue";
import moment from "moment";

export default {
  name: "BadBookingList",
  components: { BadBookingDetails },
  props: {
    bookings: Array
  },
  methods: {
    getDay(dateString) {
      return moment(dateString)
        .date()
        .toString();
    },
    getMonth(dateString) {
      return moment(dateString).format("MMMM");
    }
  }
};
</script>

<style scoped></style>
