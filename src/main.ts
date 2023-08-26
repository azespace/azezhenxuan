import { createApp } from 'vue'
//@ts-ignore   <-让ts忽略类型检测 不忽略无法打包
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
//@ts-ignore   <-让ts忽略类型检测 不忽略无法打包
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入自定义插件对象，用来注册整个项目的全局组件
import gloalComponent from "@/components/index";
import '@/styles/index.scss'
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(gloalComponent); //安装自定义插件
app.mount('#app')
