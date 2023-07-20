<template>
    <v-card>
        <div class="text-h5 font-weight-bold" style="padding: 12px;">
            Who's in on {{date}}
        </div>
        <v-row style="justify-content: center;">
            <bad-user-list-item 
                v-for="(item, index) in stringArray"
                style="max-width: 100px; margin: 0;"
                :key="index"
                :text="item"/>
            </v-row>
    </v-card>
</template>

<script>
export default {
    name: "BadUserList",
    data() {
        return {
            stringArray: ["Lasnikr", "Robert", "test", "Broadsign", "Lasnik", "Lasnikr", "Tester", "Intern",
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