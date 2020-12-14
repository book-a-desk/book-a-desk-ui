<template>
  <v-text-field
    @input="update"
    :disabled="disabled"
    :label="label"
    :placeholder="placeholder"
    :id="id"
    :value="value"
  >
  </v-text-field>
</template>
<script>
export default {
  name: "BadTextInput",
  data() {
    return {};
  },
  methods: {
    update(newValue) {
      this.$emit("input", newValue);
    }
  },
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    id: {
      type: String
    }
  }
};
</script>
<style scoped></style>
