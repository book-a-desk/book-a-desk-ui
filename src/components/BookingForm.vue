<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <bad-contained-button id="btnBook" :click="sayHello">
          Book
        </bad-contained-button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BadContainedButton from "../components/BadContainedButton";
export default {
  name: "BookingForm",
  data() {
    return {};
  },
  methods: {
    sayHello() {
      alert("Hello.");
      this.$store.dispatch("reserveOffice");
    }
  },
  components: {
    BadContainedButton
  }
};
</script>
