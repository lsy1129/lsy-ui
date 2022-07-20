import { createApp } from 'vue'
import App from './app.vue'
//import 'sy-ui/es/style.css';
const app = createApp(App)
import { syButton } from 'sy-ui'
app.use(syButton)
app.mount('#app') 