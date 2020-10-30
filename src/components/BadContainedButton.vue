<template>
  <v-btn @click="click"  elevation="1" color="primary" :disabled="disabled">
    <slot></slot>
  </v-btn>
</template>
<script>
    export default {
        name: "BadContainedButton",
        data() {
            return {};
        },
        props: {
            click: {
                type: Function,
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        }
    };
</script>
<style scoped></style>
