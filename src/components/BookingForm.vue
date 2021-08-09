<template>
  <v-container>
     <v-row>
      <v-col>
          <div class="text-h6">Book a desk</div>
          <div class="text-subtitle-1 primary--text">{{bookingDateFormatted}}</div>
      </v-col>
     </v-row>
    <v-row class="text-center" no-gutters>
      <v-col>
         <bad-text-input
          id="email"
          label="Email"
          placeholder="Enter your email"
          v-model.trim="emailAddress"
        ></bad-text-input>
        <bad-combo-box
          id = "offices"
          :items = "offices"
          itemText = "name"
          itemValue = "id"
          v-model = "selectedOffice"
          prependInnerIcon="mdi-office-building"
          @change="officeChange"
        ></bad-combo-box>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
       <bad-date-picker 
        v-model="bookingDate"
        :min="tomorrow()"
        :fullWidth="true"
        @handle-change="bookingDateChanged">
        </bad-date-picker>
      </v-col>
    </v-row>
    <v-row>
      <availabilities
        :total="totalDesks"
        :available="availableDesks"
        :reserved="reservedDesks"
      ></availabilities> 
    </v-row>
    <v-row>
      <v-col>
        <bad-contained-button 
            id="btnBook" 
            :click="submitBooking"
            :block="true">
          Book a desk
        </bad-contained-button>
        <v-snackbar
            color="orange"
            v-model="isWarningShownOnBooking">
          Please verify the office schedule to make sure that the office is open on that day
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import moment from 'moment'
import { getAsync } from "@/services/apiFacade";
import Availabilities from "@/components/Availabilities.vue"

export default {
  name: "BookingForm",
  components: {
  Availabilities
},
  data() {
    return {
      bookingDate: this.tomorrow(),
      emailAddress: "",
      offices: [],
      selectedOffice: null,
      availabilities: null,
      isWarningShownOnBooking: false
    };
  },
  async mounted() {
    await this.fetchOffices();
    this.selectedOffice = this.offices[0];
    await this.fetchAvailabilities();
  },
  computed:{
    totalDesks(){
      return this.availabilities?.totalDesks;
    },
    availableDesks(){
      return this.availabilities?.availableDesks;
    },
    reservedDesks(){
      return this.availabilities?.reservedDesks;
    },
    bookingDateFormatted() {
      return moment(this.bookingDate).format("dddd, MMMM Do");
    }
  },
  methods: {
    async fetchOffices() {
      const url = `offices`;
      const offices = await getAsync(url);
      this.offices = offices.data.items;
    },
    async fetchAvailabilities() {
        let url = `/offices/${this.selectedOffice.id}/availabilities?date=${this.bookingDate}`;
        const availabilities = await getAsync(url);
        this.availabilities = availabilities.data;
      },
    bookingDateChanged(){
      this.fetchAvailabilities();
    },
    officeChange(){
      this.fetchAvailabilities();
    },
    async submitBooking() {
      this.isWarningShownOnBooking = true;
      await this.$store.dispatch("book", {
        office: { id: this.selectedOffice.id },
        date: this.bookingDate,
        user: { email: this.emailAddress }
      });
      this.fetchAvailabilities();
    },    
    tomorrow() {
        return moment().add(1, 'days').format('YYYY-MM-DD')
    }
  }
};
</script>
