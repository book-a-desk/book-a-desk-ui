<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-text-field
          v-model="officeId"
          label="Office ID"
          id="officeID"
        ></v-text-field>
        <v-text-field
          v-model="bookingdate"
          label="Booking Date"
          id="bookingDate"
        ></v-text-field>
        <v-text-field
          v-model="emailaddress"
          label="Email Address"
          id="email"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <bad-contained-button id="btnBook" :click="submitBooking">
          Book
        </bad-contained-button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BadContainedButton from "@/components/BadContainedButton";
export default {
  name: "BookingForm",
  data() {
    return {
      officeId: "",
      bookingdate: "",
      emailaddress: ""
    };
  },
  methods: {
    submitBooking() {
      this.$store.dispatch("book", {
        officeId: this.officeId,
        bookingdate: this.bookingdate,
        emailaddress: this.emailaddress
      });
    }
  },
  components: {
    BadContainedButton
  }
};
</script>
