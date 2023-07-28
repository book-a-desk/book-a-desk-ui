<template>
  <v-container>
    <div v-if="authState.isAuthenticated">
      <p>Welcome, {{claims && claims.name}}!</p>
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
            v-model.trim="emailAddress">
          </bad-text-input>
          <bad-combo-box
          id = "offices"
          :items = "offices"
          itemText = "name"
          itemValue = "id"
          v-model = "selectedOffice"
            prependInnerIcon="mdi-office-building"
            @change="officeChange"
            :hint="officeOpeningHours"
            :persistentHint="true"
          ></bad-combo-box>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <bad-date-picker
            v-model="bookingDate"
            :min="tomorrow()"
            :fullWidth="true"
            @input="bookingDateChanged">
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
            :click="bookADesk"
            :block="true"
            label="Book a desk">
          </bad-contained-button>
        <v-snackbar
            color="orange"
            v-model="isWarningShownOnBooking">
            Please verify the office schedule to make sure that the office is open on that day
          </v-snackbar>
        </v-col>
      </v-row>
      <bad-message
        @hide-message="isMessageShownOnBooking=false"
        :title="bookingResultTitle"
        :message="bookingResultMessage"
        :messageType="messageType"
        :enabled="isMessageShownOnBooking">
      </bad-message>
      <bad-user-list 
        :date="bookingDateFormatted">
      </bad-user-list>
    </div>
  </v-container>
</template>

<script>
import moment from "moment";
import { getAsync, postAsync } from "@/services/apiFacade";
import Availabilities from "@/components/Availabilities.vue";
import BadUserList from "@/components/BadUserList.vue"

export default {
  name: "BookingForm",
  components: {
    Availabilities, BadUserList
  },
  data() {
    return {
      bookingDate: this.tomorrow(),
      emailAddress: "",
      bookingResultTitle: "",
      bookingResultMessage: "",
      messageType: "",
      offices: [],
      selectedOffice: null,
      availabilities: null,
      isWarningShownOnBooking: false,
      isMessageShownOnBooking: false,
      problemDetails: {},
      claims:''
    };
  },
  created () { this.setup() },
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
    },
    officeOpeningHours(){
      return "Opening hours: " + this.selectedOffice?.openingHours?.text;
    }
  },
  methods: {
    async setup () {
      if (this.authState.isAuthenticated) {
        this.claims = await this.$auth.getUser()
      }
    },
    login () {
      this.$auth.signInWithRedirect('/')
    },
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
    async fetchBookings() {
      await this.$store.dispatch("getBookings", {date: this.bookingDate, officeId: this.selectedOffice.id})
    },
    bookingDateChanged(){
      this.fetchAvailabilities();
      this.fetchBookings();
    },
    officeChange(){
      this.fetchAvailabilities();
      this.fetchBookings();
    },
    displayConfirmationMessage(){
      this.bookingResultTitle = "Booked successfully"
      this.bookingResultMessage = "Please check your emails for your booking confirmation";
      this.messageType = "success";
      this.isMessageShownOnBooking = true;
    },
    displayErrorMessage(error){
      if (error.response) {
        this.bookingResultTitle = error.response.data.title;
        this.bookingResultMessage = `Something went wrong with the booking: ${error.response.data.details}`;
      }
      else if (error.message) {
        this.bookingResultTitle = error.message
        this.bookingResultMessage = `Unknown Error`
      }

      this.messageType = "error";
      this.isMessageShownOnBooking = true;
    },
    async bookADesk() {
      await this.submitBooking();
      this.fetchBookings();
    },
    async submitBooking() {
      await postAsync("/bookings", {
          office: { id: this.selectedOffice.id },
          date: this.bookingDate,
          user: { email: this.emailAddress }
        })
        .then(response => {
          this.isWarningShownOnBooking = true;
          this.displayConfirmationMessage(response);
          this.fetchAvailabilities();
        })
        .catch(error => {
          this.displayErrorMessage(error);
        });
    },
    tomorrow() {
        return moment().add(1, 'days').format('YYYY-MM-DD')
    }
  }
};
</script>
