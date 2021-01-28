import { createApp } from 'vue';
import App from './App.vue'
import GekUI from '../dist/index.esm'
import '../dist/theme-chalk/index.css'
const app = createApp(App)
app.use(GekUI)
app.mount('#app')