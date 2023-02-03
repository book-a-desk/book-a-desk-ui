<template>
  <v-card class="mx-auto" rounded-lg width="250">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h3 text-center">
          {{day}}
        </v-list-item-title>
        <v-list-item-subtitle class="text-center font-weight-bold caption">{{month.toUpperCase()}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile height="80" width="120">
        <img src="@/assets/booking-right.png">
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>
<script>
export default {
  name: "BadBookingDetails",
  data() {
    return {};
  },
  props: {
    day:{
      type: String,
      required: true
    },
    month: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped></style>
