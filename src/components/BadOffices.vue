<template>
  <v-container id="offices">
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
  </v-container>
</template>
<script>
import moment from "moment/moment";

export default {
  name: "Offices",
  computed:{
    officeOpeningHours(){
      return "Opening hours: " + this.selectedOffice?.openingHours?.text;
    },
    officeOpeningHours(){
      return "Opening hours: " + this.selectedOffice?.openingHours?.text;
    }
  },  
  methods: {
  }
};
</script>
<style scoped></style>
