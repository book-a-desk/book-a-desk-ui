<template>
    <v-date-picker
        @input="handleUpdate"
        :value="value"
        :min="min"
    ></v-date-picker>
</template>
<script>

export default {
  name: "BadDatePicker",
  data() {
    return {};
  },
  methods: {
    handleUpdate(newValue) {
      this.$emit("input", newValue);
    }
  },
  props: {
    value: {
      type: String
    },
    min: {
        type: String
    }
  }
};
</script>
<style scoped></style>
