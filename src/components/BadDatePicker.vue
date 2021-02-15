<template>
    <v-date-picker
        @input="handleUpdate"
        :value="value"
        :min="tomorrow()"
    ></v-date-picker>
</template>
<script>

import moment from 'moment'
export default {
  name: "BadDatePicker",
  data() {
    return {};
  },
  methods: {
    handleUpdate(newValue) {
      this.$emit("input", newValue);
    },
    tomorrow() {
        return moment().add(1, 'days').format('YYYY-MM-DD')
    }
  },
  props: {
    value: {
      type: String
    }
  }
};
</script>
<style scoped></style>
