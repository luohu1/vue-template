import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 创建 Vue 应用实例
const app = createApp(App)

// 注册插件
app.use(router)

// 挂载到 DOM
app.mount('#app') // 对应 index.html 中的 #app
