import { createApp } from "vue";
import App from "../App.vue";
/*export function globallyRegisterAllComponents() {
    const files = import.meta.glob('../@/*.vue', { eager: true })
    console.log(files);
    const app = createApp(App);
    for (const path in modules) {
    }
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
globallyRegisterAllComponents();*/
export function globallyRegisterAllComponents() {
  const app = createApp(App);
  const modules = import.meta.glob('../@/*.vue', { eager: true })
  for (const path in modules) {
    console.log(path);
    const componentName = path.split("/").at(-1).split(".")[0];
    app.component(`Gen${componentName}`, modules[path].default);
  }
}
globallyRegisterAllComponents();

