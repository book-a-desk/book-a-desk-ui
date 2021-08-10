<template>
    <v-date-picker
        @input="handleChange"
        :min="min"
        no-title
        next-icon="mdi-menu-right"
        prev-icon="mdi-menu-left"
        color="primary"
        elevation="1"
        :full-width="fullWidth"
        :value="value"
        v-model="value"
    ></v-date-picker>
</template>
<script>

export default {
  name: "BadDatePicker",
  data() {
    return {};
  },
  watch: {
   value () {   
      this.$emit("handle-change");
   }
  }, 
  methods:{
    handleChange(){
            this.$emit("input", this.value);

    }
  },
  props: {
    value: String,
    min: String,
    fullWidth: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped></style>
