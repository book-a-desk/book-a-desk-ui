<template>
    <v-card
      :id="`card-availability-${id}`"
      class="mx-auto rounded-lg"
      align="center"
    >
      <v-list-item>
        <v-list-item-content class="my-2">
          <div class="text-button font-weight-medium">
           {{title}}
          </div>
           <div class="text-h6 font-weight-medium">
            {{value}}
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
</template>
<script>
export default {
  name: "BadCardAvailability",
  data() {
    return {};
  },
  props: {
    id: {
      type: String
    },
    title: {
      type: String
    },
    value: {
      type: Number
    }
  }
};
</script>
<style scoped></style>
