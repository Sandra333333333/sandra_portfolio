import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/style1.css'
import '@/assets/css/rwd.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App).use(router).mount('#app')
