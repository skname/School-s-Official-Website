import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index.js' //导入路由
import Element3 from './plugins/element3' // 引入Element

createApp(App).use(router).use(Element3).mount('#app')
