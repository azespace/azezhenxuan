import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入svg图标
import 'virtual:svg-icons-register'
import pinia from '@/store'
//@ts-ignore   <-让ts忽略类型检测 不忽略无法打包
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入自定义插件对象，用来注册整个项目的全局组件
import gloalComponent from '@/components/index'
import '@/styles/index.scss'
import router from './router'
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router) //安装路由器
app.use(pinia) //安装数据仓库
app.use(gloalComponent) //安装自定义插件
//将id为vue的dom元素渲染到页面上
app.mount('#app')
