<template>
	<v-combobox
		:id = "`combobox-${id}`"
		:items="items"
		:item-text="itemText"
		:item-value="itemValue"
		@change="change"
		v-model="valueCopy"
		solo
		class="rounded-lg"
		>
		<template v-slot:prepend-inner> 
			<v-icon :color='"primary"'> {{prependInnerIcon}} </v-icon> 
		</template>
	</v-combobox>
</template>
<script>
export default {
  name: "BadComboBox",
  data() {
    return {
		valueCopy: this.value
	};
  },
  props: {
	  id: String,
	  items: Array,
	  itemText: String,
	  itemValue: String,
	  value: Object,
	  prependInnerIcon: { 
		  type: String, 
		  default: ""
		  }
  },
  methods: {
	  change() {
		  this.$emit("input", this.valueCopy);
	  }
  },
   watch: {
    value() {
      this.valueCopy = this.value;
	  this.$emit("change");

    }
  },
};
</script>
<style scoped>
</style>
