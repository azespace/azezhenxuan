// 引入工具类
import request from '@/utils/request'
// 引入定义好的接口对象类型
import type { loginForm, loginResponse, userResponse } from './type'
// 定义接口地址
enum API {
  LOGIN_URL = '/user/login', //登录
  USERINFO_URL = '/user/info', //获取用户信息
}
// 对外暴露定义好和请求接口 const表示常量不可修改
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponse>(API.LOGIN_URL, data)
export const reqUserInfo = () =>
  request.get<any, userResponse>(API.USERINFO_URL)
