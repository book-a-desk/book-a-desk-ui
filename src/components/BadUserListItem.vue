<template>
    <v-container style="text-align: center">
        <v-avatar
            size="size"
            v-html="identicon"> 
        </v-avatar>
        <div style="word-wrap: break-word; padding-top: 12px;">
            {{username}}
        </div>
    </v-container>
</template>

<script>
  import jdenticon from 'jdenticon';
  
  export default {
    name: "BadUserListItem",
    props: {
        booking: {
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
        return jdenticon.toSvg(this.username, this.size);
      },
      username: function() {
        // The Email is temporarily used as a username
        // In the future real usernames and profile pictures will be supported
        const extractUsername = (booking) => {
          const [username] = booking.user.email.split("@");
          return username;
        };
        return extractUsername(this.booking)
      }
    }
  }
</script>

<style scoped>
</style>