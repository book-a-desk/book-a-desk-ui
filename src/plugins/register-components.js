import Vue from 'vue'
export function globallyRegisterAllComponents() {
    const files = require.context("@", true, /\.vue$/i);
    files.keys().map(key => {
        Vue.component(
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