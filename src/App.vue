<template>
  <v-app>
    <v-main>
      <booking-form />
    </v-main>
  </v-app>
</template>

<script>
import BookingForm from "../components/BookingForm";

export default {
  name: "App",

  components: {
    BookingForm
  },

  data: () => ({
    //
  })
};
</script>
