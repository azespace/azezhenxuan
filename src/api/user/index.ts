// 统一管理用户接口
import request from '@/utils/request'
// 接口参数类型管理
import type { loginForm, loginResponse, userResponse } from './type'
//统一管理用户接口
enum API {
  LOGIN_URL = '/user/login', //登录
  USERINFO_URL = '/user/info', //获取用户信息
}
//对外暴露接口
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponse>(API.LOGIN_URL, data)
export const reqUserInfo = () =>
  request.get<any, userResponse>(API.USERINFO_URL)
