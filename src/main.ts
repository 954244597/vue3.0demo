import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// App.use(Button)
createApp(App).use(store)
createApp(App).use(ElementPlus).use(router).mount('#app')
// createApp(App).use(ElementPlus).use(router).mount('#app')
