<template>
  <v-text-field
    @change="change"
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
  props: {
    change: {
      type: Function,
      required: true
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    }
  }
};
</script>
<style scoped></style>
