// 这段代码用于自定义插件，这个插件的作用是注册全局组件 在main.ts中已经引入了该文件
// 先注册一个SvgIcon 需要其他的在这里继续添加就可以了
import SvgIcon from '@/components/SvgIcon/index.vue'
// 定义一个对象 存储各种全局组件
const allGloalComponent: any = { SvgIcon }
// 自定义插件需要你暴露install方法，这是规定，会在安装插件时被调用
export default {
  // 利用插件实现全局安装vue组件
  install(app: any) {
    // 使用原来的名字作为组件去注册
    // 循环allGloalComponent对象然后使用app.component注册全局组件
    Object.keys(allGloalComponent).forEach((key) => {
      app.component(key, allGloalComponent[key]) //注册为全局组件
    })
  },
}
