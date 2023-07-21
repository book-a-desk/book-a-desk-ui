<template>
  <v-alert
      v-if="enabled"
      dense
      outlined
      light
      :type="messageType">
      <h3>{{title}}</h3>
      {{message}}
    <v-btn 
      icon
      class="close-button" 
      :color="messageType"
      @click="hideAlert">
      <v-icon>mdi-close</v-icon>
    </v-btn>
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
  methods: {
    hideAlert() {
      this.$emit("hide-message")
    }
  }
}
</script>
<style scoped>
.close-button {
  position: absolute;
  top: 50%;
  right: 1%;
  transform: translateY(-50%);
}
</style>
