//路由器配置
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './router'
//创建路由器
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  //滚动行为 路由页面切换时聚焦到左上角位置
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
export default router
