<template>
  <v-app>
    <v-main>
      <BookForm />
    </v-main>
  </v-app>
</template>

<script>
import BookForm from "./components/BookForm";

export default {
  name: "App",

  components: {
    BookForm
  },

  data: () => ({
    //
  })
};
</script>
