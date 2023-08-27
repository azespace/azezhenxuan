// 数据仓库中心
import {createPinia} from 'pinia';
// 创建pinia
let pinia = createPinia();
// 对外暴露插件 用于main.ts中安装
export default pinia;