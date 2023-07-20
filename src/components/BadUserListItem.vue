<template>
    <v-container style="text-align: center">
        <v-avatar
            style="border: 1px solid"
            size="size"
            v-html="identicon"> 
        </v-avatar>
        <div style="word-wrap: break-word;">
            {{text}}
        </div>
    </v-container>
</template>

<script>
  import jdenticon from 'jdenticon';
  
  export default {
    name: "BadUserListItem",
    props: {
        text: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            size: 50
        };
    },
    computed: {
      identicon: function() {
        return jdenticon.toSvg(this.text, this.size);
      }
    }
  }
</script>

<style scoped>
</style>