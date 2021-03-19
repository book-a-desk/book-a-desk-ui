<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <bad-combo-box
          id = "offices"
          :items = "offices"
          itemText = "name"
          itemValue = "id"
          v-model = "selectedOffice"
        ></bad-combo-box>
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
        <bad-date-picker 
        v-model="bookingDate"
        :min="tomorrow()">
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

import moment from 'moment'
export default {
  name: "BookingForm",
  data() {
    return {
      officeId: "",
      bookingDate: "",
      emailAddress: "",
      offices: [{id: 'id-1', name: 'name-1'}, {id: 'id-2', name: 'name-2'}],
      selectedOffice: {id: 'id-1', name: 'name-1'}
    };
  },
  methods: {
    submitBooking() {
      this.$store.dispatch("book", {
        office: { id: this.officeId },
        date: this.bookingDate,
        user: { email: this.emailAddress }
      });
    },    
    tomorrow() {
        return moment().add(1, 'days').format('YYYY-MM-DD')
    }
  }
};
</script>
