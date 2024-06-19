import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerPlugins } from "@/plugins";

const app = createApp(App);
registerPlugins(app);
app.use(store).use(router).mount("#app");
