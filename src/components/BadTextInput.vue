<template>
  <v-text-field
    @input="handleUpdate"
    @keydown.space.prevent
    :disabled="disabled"
    :label="label"
    :placeholder="placeholder"
    :id="id"
    :rules="[
      rules.isNotEmpty,
      rules.hasWhitespaces,
      rules.isCorporateDomain,
      rules.hasEmailFormat
    ]"
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
    let domainName = process.env.VUE_APP_DOMAIN_NAME;
    return {
      rules: {
        isNotEmpty: value => !!value || value !== "" || "Email cannot be empty",
        hasWhitespaces: value =>
          value.indexOf(" ") <= 0 || "Email cannot contain spaces",
        isCorporateDomain: value =>
          value.endsWith(`@${domainName}`) ||
          `Email should end with @${domainName}`,
        hasEmailFormat: value =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
          `Email must be in format: user@${domainName}`
      }
    };
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
