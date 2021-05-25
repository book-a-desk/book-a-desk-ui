<template>
    <v-date-picker
        @input="handleUpdate"
        :value="value"
        :min="min"
        no-title
        next-icon="mdi-menu-right"
        prev-icon="mdi-menu-left"
        color="primary"
        elevation="1"
        :full-width="fullWidth"
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
    value:  String,
    min: String,
    fullWidth: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped></style>
