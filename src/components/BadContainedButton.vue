<template>
  <v-btn @click="click" 
        elevation="1" 
        color="primary" 
        :disabled="disabled"
        class="rounded-lg"
        :block="block">
    {{label}}
  </v-btn>
</template>
<script>
export default {
  name: "BadContainedButton",
  data() {
    return {};
  },
  props: {
    label:{
      type: String,
      required: true
    },
    click: {
      type: Function,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped></style>
