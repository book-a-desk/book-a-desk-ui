<template>
  <v-list dense nav>
    <v-list-item>
      <v-list-item-icon class="mr-2">
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Dashboard</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon class="mr-2">
        <v-icon>mdi-calendar</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Bookings</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon class="mr-2">
        <v-icon>mdi-domain</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Offices</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon class="mr-2">
        <v-icon>mdi-account</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Profile</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon class="mr-2">
        <v-icon>mdi-chat-question</v-icon>
      </v-list-item-icon>
      <v-list-item-title>FAQ</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon class="mr-2">
        <v-icon>mdi-logout-variant</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Log out</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "MenuList"
}
</script>

<style scoped>

</style>