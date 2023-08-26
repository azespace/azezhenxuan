import { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default ({ command }:ConfigEnv):UserConfigExport=> {
  return {
      plugins: [
      //官方插件用于解析Vue 单文件组件 成jscss代码供浏览器识别
      vue(),
      //配置vite插件
      createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
      }),
      //mock插件3.0版本配置
      viteMockServe({
        enable : true,
      }),
    ],
    //别名配置
    resolve: {
      alias: {
          "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
      }
    },
    //让scss可以使用全局变量$
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  }
}
