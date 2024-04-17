// vite的配置文件，用于配置vite的行为
// 从vite库中导入vite的配置对象和环境对象
import { UserConfigExport, ConfigEnv } from 'vite'
// 从vite-plugin-mock库中导入viteMockServe方法 用于提供mock服务
import { viteMockServe } from 'vite-plugin-mock'
// 从vite-plugin-svg-icons库中导入createSvgIconsPlugin方法 用于提供svg图标服务
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 从vite插件库中导入vue方法 用于解析vue单文件组件
import vue from '@vitejs/plugin-vue'
// 从node库中导入path方法 用于处理文件和目录路径
import path from 'path'
// https://vitejs.dev/config/
// 导出一个函数，函数接收一个参数，参数是一个对象，对象中包含了vite的配置对象和环境对象
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    // 定义vite的插件列表
    plugins: [
      // 官方插件用于解析Vue的单文件组件 ，解析成js css代码供浏览器识别的
      vue(),
      // 创建一个用于配置vite图标的插件
      createSvgIconsPlugin({
        // 设置svg图标目录 从当前目录的src/assets/icons中获取svg图标
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 设置svg的ID格式写法
        symbolId: 'icon-[dir]-[name]',
      }),
      // mock插件2.9版本配置
      viteMockServe({
        localEnabled: true,
      }),
    ],
    // 定义模板的解析规则
    resolve: {
      alias: {
        // 这个和tsconfig.json中的配置是一样的，但是这里是vite的配置,用于在不同的环境中生效，不会造成冲突
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    // 让scss可以使用全局变量$
    css: {
      // 定义css预处理器选项
      preprocessorOptions: {
        scss: {
          // 启动scss的javascript功能
          javascriptEnabled: true,
          // 让所有SCSS文件的顶部自动导入variable.scss文件
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  }
}
