import { createApp } from "vue";
import App from "../App.vue";
export function globallyRegisterAllComponents() {
    const files = require.context("@", true, /\.vue$/i);
    const app = createApp(App);
    files.keys().map(key => {
        app.component(
            files(key).default.name ??
            key
                .split("/")
                .pop()
                .split(".")[0],
            files(key).default
        );
    });
}
globallyRegisterAllComponents();
