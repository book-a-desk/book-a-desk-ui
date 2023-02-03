<template>
  <v-container>
    <div class="hidden-xs-only">
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Book A Desk
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <menu-list></menu-list>
      </v-navigation-drawer>
    </div>
    <div class="hidden-sm-and-up">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
        </template>
        <menu-list></menu-list>
      </v-menu>
    </div>
  </v-container>
</template>

<script>
import MenuList from "@/components/MenuList";
export default {
  name: "BadMenu",
  components: {MenuList}
}
</script>

<style scoped>

</style>