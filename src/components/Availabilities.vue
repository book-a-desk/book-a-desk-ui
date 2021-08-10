<template>
<v-container id="availabilities">
      <v-row>
        <v-col>
            <bad-card-availability 
                id="total-desks" 
                title="desks" 
                :value="total">
            </bad-card-availability>
        </v-col>
        <v-col>
            <bad-card-availability 
                id="available-desks" 
                title="available" 
                :value="available">
            </bad-card-availability>
        </v-col>
        <v-col>
            <bad-card-availability 
                id="booked-desks" 
                title="booked" 
                :value="reserved">
            </bad-card-availability>
        </v-col>
    </v-row>
</v-container>
</template>
<script>
export default {
  name: "Availabilities",
  data() {
    return {};
  },
  methods: {
  },
  props: {
    total: Number,
    available: Number,
    reserved: Number
  }
};
</script>
<style scoped></style>
