import SvgIcon from "@/components/SvgIcon/index.vue";
const allGloalComponent: any = { SvgIcon };
//暴露插件对象
export default {
  //必须叫install
  install(app: any) {
    Object.keys(allGloalComponent).forEach((key) => {
      app.component(key, allGloalComponent[key]); //注册为全局组件
    });
  },
}