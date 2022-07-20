import { createApp } from 'vue'
import App from './app.vue'
//import 'liusy-ui/es/style.css';
const app = createApp(App)
import { syButton } from 'liusy-ui'
app.use(syButton)
app.mount('#app') 