<template>
  <v-container>
     <v-row>
      <v-col>
          <div class="text-h6">Today’s schedule</div>
          <div class="text-subtitle-1 primary--text">{{today()}}</div>
      </v-col>
     </v-row>
    <v-row class="text-center" no-gutters>
      <v-col>
         <bad-text-input
          id="email"
          label="Email"
          placeholder="Enter your email"
          v-model="emailAddress"
        ></bad-text-input>
        <bad-combo-box
          id = "offices"
          :items = "offices"
          itemText = "name"
          itemValue = "id"
          v-model = "selectedOffice"
          prependInnerIcon="mdi-office-building"
        ></bad-combo-box>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <bad-date-picker 
        v-model="bookingDate"
        :min="tomorrow()"
        :fullWidth="true">
        </bad-date-picker>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <bad-contained-button 
            id="btnBook" 
            :click="submitBooking"
            :block="true">
          Book a desk
        </bad-contained-button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import moment from 'moment'
import { getAsync } from "@/services/apiFacade";

export default {
  name: "BookingForm",
  data() {
    return {
      bookingDate: "",
      emailAddress: "",
      offices: [],
      selectedOffice: {}
    };
  },
  async mounted() {
    await this.fetchOffices();
    this.selectedOffice = this.offices[0];
  },
  methods: {
    async fetchOffices() {
      const url = `offices`;
      const offices = await getAsync(url);
      this.offices = offices.data;
    },

    submitBooking() {
      this.$store.dispatch("book", {
        office: { id: this.selectedOffice.id },
        date: this.bookingDate,
        user: { email: this.emailAddress }
      });
    },    
    tomorrow() {
        return moment().add(1, 'days').format('YYYY-MM-DD')
    },
    today() {
        return moment().format("dddd, MMMM Do")
    }
  }
};
</script>
