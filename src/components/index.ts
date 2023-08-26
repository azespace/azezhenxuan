import SvgIcon from "@/components/SvgIcon/index.vue";
// 定义一个对象 存储各种全局组件
const allGloalComponent: any = { SvgIcon };
//暴露插件对象
export default {
  //利用插件实现全局安装vue组件
  install(app: any) {
    //使用原来的名字作为组件去注册
    Object.keys(allGloalComponent).forEach((key) => {
      app.component(key, allGloalComponent[key]); //注册为全局组件
    });
  },
}