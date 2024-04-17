// 引入基于promise的http库axios
import axios from 'axios'
// 引入element-plus的消息提示组件
import { ElMessage } from 'element-plus'
// 创建axios实例 并设置基础属性
let request = axios.create({
  // 设置基础路径 从.env文件中获取
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 设置超时时间
  timeout: 5000,
})
// 请求拦截器 每次发送请求都会执行，这里什么都没做你可以根据自己的需求添加
request.interceptors.request.use((config) => {
  // config配置对象，可以在这里配置headers
  return config
})
// 响应拦截器，每次接收到响应后都会执行这里，这里对响应数据进行处理
request.interceptors.response.use(
  // 第一个函数处理成功的响应
  (response) => {
    return response.data
  },
  // 第二个函数处理失败的响应
  (error) => {
    //处理网络错误
    let msg = ''
    let status = error.response.status
    switch (status) {
      case 401:
        msg = 'token过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器出现问题'
        break
      default:
        msg = '无网络'
    }
    // 使用element-plus的消息提示组件显示这个消息
    ElMessage({
      type: 'error',
      message: msg,
    })
    return Promise.reject(error)
  },
)
// 导出这个已经配置好的实例 这样其他文件就可以使用了
export default request
