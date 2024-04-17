// 这里的使用都是控制全局的，比如全局引入样式，全局引入组件，全局引入状态管理等
// 引入createApp函数  下面会用到，这个函数用于创建一个新的vue应用
import { createApp } from 'vue'
// 引入vue组件，而app.vue是一个根组件，就相当于引入了整个项目。@/是路径映射等于src/，具体配置在tsconfig.json中
import App from '@/App.vue'
// 导入Element Plus UI库
import ElementPlus from 'element-plus'
// 引入Element Plus 样式文件
import 'element-plus/dist/index.css'
// 引入svg图标
import 'virtual:svg-icons-register'
// pinia是一个vue3的状态管理库，类似于vuex
import pinia from '@/store'
//@ts-ignore   <-让ts忽略下一行代码的类型检测 不忽略无法打包，注意这不是一个注释 写法就是//@ts-ignore
// 引入Element Plus的中文语言包
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入全局自定义插件对象，用来注册整个项目的全局组件 
import gloalComponent from '@/components/index'
// 导入全局scss样式
import '@/styles/index.scss'
// 引入全局路由器，Vue的官方路由库
import router from './router'
// 使用createApp函数创建一个新的vue应用
const app = createApp(App)
// 给这个应用安装各种插件 ElementPlus和中文 也就是把刚才import进来的东西安装到app上
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router) // 安装路由器
app.use(pinia) // 安装数据仓库
app.use(gloalComponent) // 安装自定义插件
// 将Vue应用挂载到ID为app的DOM元素上。
app.mount('#app')
