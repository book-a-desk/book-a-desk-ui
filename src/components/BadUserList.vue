<template>
    <v-card v-if="bookings.length > 0">
        <div class="text-h5 font-weight-bold" style="padding: 12px;">
            Who's in on {{date}}
        </div>
        <v-row style="justify-content: center;">
            <bad-user-list-item 
                v-for="(item, index) in bookings"
                style="max-width: 100px; margin: 0;"
                :key="index"
                :booking="item"/>
            </v-row>
    </v-card>
</template>

<script>
export default {
    name: "BadUserList",
    data() {
        return {}
    },
    props: {
        date: {
            type: String
        }
    },
    computed:{
        bookings() {
            return this.$store.getters.dateAndOfficeBookings;
        }
    }
}
</script>

<style scoped>
</style>