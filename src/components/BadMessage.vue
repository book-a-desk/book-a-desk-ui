<template>
  <span> {{message}} </span>
</template>
<script>
export default {
  name: "BadMessage",
  props: {
    message: {
      type: String
    }
  }
};
</script>
<style scoped></style>
