import Vue, { createApp } from "vue";
import AudioVisual from 'vue-audio-visual'
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
Vue.use(AudioVisual)
