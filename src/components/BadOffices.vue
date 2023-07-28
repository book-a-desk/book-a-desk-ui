<template>
  <v-container id="offices">
    <bad-combo-box
        id = "offices"
        :items = "offices"
        itemText = "name"
        itemValue = "id"
        v-model = "selectedOffice"
        prependInnerIcon="mdi-office-building"
        @change="officeChanged"
        :hint="officeOpeningHours"
        :persistentHint="true"
    ></bad-combo-box>
  </v-container>
</template>
<script>

export default {
  name: "Offices",
  data() { 
    return {
      selectedOffice: null
    }
  },
  computed:{
    offices() {
      return this.$store.getters.offices;
    },
    officeOpeningHours() {
      return "Opening hours: " + this.selectedOffice?.openingHours?.text;
    }
  },  
  methods: {},
  props: {
    officeChanged: {
      type: Function,
      required: true
    },
  }
};
</script>
<style scoped></style>
