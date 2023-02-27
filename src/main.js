import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { useCounterStore } from "./store/counter";

import "./style.css";
import "./index.css";

const pinia = createPinia();
pinia.use(() => {
  const counterStore = useCounterStore();
  return { counterStore };
});

createApp(App).use(pinia).mount("#app");
