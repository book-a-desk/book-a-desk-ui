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
<style scoped lang="scss">
    span{
        font-size: larger;
        padding: 5px;
        background-color: white;
        border: 1px solid orange;
        border-radius: 5px;
    }
</style>
