import { createApp } from "vue";
import App from "./components/ManagerStudents.vue";
import store from "./store";

createApp(App).use(store).mount("#app");
