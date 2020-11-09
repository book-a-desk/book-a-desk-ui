<template>
  <v-app>
    <v-main>
      <booking-form />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import BookingForm from "./components/BookingForm";

export default {
  name: "App",

  components: {
    BookingForm
  },
  created: function() {
    var url = "./env/config.json";
    axios.get(url).then(response => {
      axios.defaults.baseURL = `${response.data.base_api_url}/`;
    });
  },
  data: () => ({
    //
  })
};
</script>
