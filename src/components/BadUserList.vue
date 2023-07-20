<template>
    <v-container>
        <div class="text-h5 font-weight-bold" style="margin-bottom: 10px;">
            Who's in on {{date}}
        </div>
        <v-row>
            <bad-user-list-item 
                v-for="(item, index) in stringArray"
                style="max-width: 10%; margin: 0;"
                :key="index"
                :text="item"/>
            </v-row>
    </v-container>
</template>

<script>
export default {
    name: "BadUserList",
    data() {
        return {
            stringArray: ["Lasnikr", "Robert", "test", "Broadsign", "Lasnik", "Lasnikr", "dd", "I am a really long name",
                        "🪵", "&", "user", "dummy", "Test", "I am a really long name", "test", "test"],
            };
    },
    props: {
        date: {
            type: String
        }
    }
}
</script>

<style scoped>
</style>