<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <bad-text-input
          id="officeID"
          label="Office ID"
          placeholder="Enter office ID"
          v-model="officeId"
        ></bad-text-input>
        <bad-text-input
          id="email"
          label="Email"
          placeholder="Enter your email"
          v-model="emailAddress"
        ></bad-text-input>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>Select a booking date</p>
        <bad-date-picker v-model="bookingDate">
        </bad-date-picker>
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
import BadDatePicker from './BadDatePicker.vue';

export default {
  components: { BadDatePicker },
  name: "BookingForm",
  data() {
    return {
      officeId: "",
      bookingDate: "",
      emailAddress: ""
    };
  },
  methods: {
    submitBooking() {
      this.$store.dispatch("book", {
        office: { id: this.officeId },
        date: this.bookingDate,
        user: { email: this.emailAddress }
      });
    }
  }
};
</script>
