import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
const path = require("path");
export default defineConfig({
    plugins: [
        vue(),
        vuetify( {styles: { configFile: 'src/styles/variables.scss' } }),
    ],
    //...
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
