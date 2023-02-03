<template>
  <v-alert
      dense
      outlined
      dismissible
      light
      :value="enabled"
      :type="messageType">
    <h3>{{title}}</h3>
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
