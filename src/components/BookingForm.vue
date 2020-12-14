<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <bad-text-input
          id="officeID"
          label="Office ID"
          placeholder="Enter office ID"
          :value="officeId"
          :change="changeOfficeId"
        ></bad-text-input>
        <bad-text-input
          id="bookingDate"
          label="Booking Date"
          placeholder="Enter booking date"
          :value="bookingDate"
          :change="changeBookingDate"
        ></bad-text-input>
        <bad-text-input
          id="email"
          label="Email"
          placeholder="Enter your email"
          :value="emailAddress"
          :change="changeEmail"
        ></bad-text-input>
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
import BadTextInput from "@/components/BadTextInput";

export default {
  name: "BookingForm",
  data() {
    return {
      officeId: "",
      bookingDate: "",
      emailAddress: ""
    };
  },
  methods: {
    changeOfficeId(value) {
      this.officeId = value;
    },
    changeBookingDate(value) {
      this.bookingDate = value;
    },
    changeEmail(value) {
      this.emailAddress = value;
    },
    submitBooking() {
      this.$store.dispatch("book", {
        office: { id: this.officeId },
        date: this.bookingDate,
        user: { email: this.emailAddress }
      });
    }
  },
  components: {
    BadContainedButton,
    BadTextInput
  }
};
</script>
