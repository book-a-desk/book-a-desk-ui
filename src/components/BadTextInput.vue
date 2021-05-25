<template>
  <v-text-field
    @input="handleUpdate"
    :disabled="disabled"
    :label="label"
    :placeholder="placeholder"
    :id="id"
    :value="value"
    solo
		class="rounded-lg"
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
    handleUpdate(newValue) {
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
