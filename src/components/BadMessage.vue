<template>
  <v-alert
      dense
      outlined
      dismissible
      light
      :title="title"
      :value="enabled"
      :type="messageType">
    {{message}}
  </v-alert>  
</template>
<script>
export default {
  name: "BadMessage",
  props: {
    title: {
      type: String
    },
    message: {
      type: String
    },
    messageType: {
      type: String
    },
    enabled: {
      type: Boolean
    }
  },
}
</script>
<style scoped></style>
