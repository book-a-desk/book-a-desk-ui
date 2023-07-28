<template>
  <bad-combo-box
      id = "offices"
      :items = "offices"
      itemText = "name"
      itemValue = "id"
      v-model = "selectedOffice"
      prependInnerIcon="mdi-office-building"
      @change="selectedOfficeChanged"
      :hint="officeOpeningHours"
      :persistentHint="true"/>
</template>
<script>

export default {
  name: "Offices",
  data() { 
    return {
      selectedOffice: null
    }
  },
  async mounted() {
    await this.fetchOffices();
    this.selectedOffice = this.offices[0]
  },
  computed:{
    offices() {
      return this.$store.getters.offices;
    },
    officeOpeningHours() {
      return "Opening hours: " + this.selectedOffice?.openingHours?.text;
    }
  },  
  methods: {
    selectedOfficeChanged() {
      this.officeChanged(this.selectedOffice.id)
    },
    async fetchOffices() {
      await this.$store.dispatch("getOffices")
    }
  },
  props: {
    officeChanged: {
      type: Function,
      required: true
    },
  }
};
</script>
<style scoped></style>
