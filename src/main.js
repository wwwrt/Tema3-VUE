import { createApp } from "vue";
import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.vue";

import { createPinia } from "pinia";
const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
