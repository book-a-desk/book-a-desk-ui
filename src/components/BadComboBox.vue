<template>
	<v-combobox>
		:id = "`combobox-${id}`"
		:items = "items"
		:itemText = "itemText"
		:item-value = "itemValue"
		@change = "change"
		v-model = "valueCopy"
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
	  value: Object
  },
  methods: {
	  change() {
		  this.$emit("change", this.valueCopy);
	  }
  }
};
</script>
<style scoped>
</style>
