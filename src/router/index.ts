// 引入路由器函数和自定义路由
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './router'
// 创建路由器
const router = createRouter({
  // 使用hash模式 这个模式下URL会带有#号 这种模式兼容所有浏览器
  history: createWebHashHistory(),
  // 路由配置，每个路由映射一个组件
  routes: constantRoute,
  //滚动行为 路由页面切换时聚焦到左上角位置
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
export default router
