import { createApp } from 'vue'
import App from './App.vue'
import "./index.css"
import VIcon from "vue-tailwind-icons";
createApp(App).use(VIcon, { set: 'outline' }).mount('#app')
