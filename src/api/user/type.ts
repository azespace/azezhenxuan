// 定义登录接口需要携带参数的ts类型 用于给其他地方使用
export interface loginForm {
  username: string
  password: string
}

// 定义登录接口返回数据的ts类型 用于给其他地方使用
interface responseDataType {
  // 加个问好表示可能存在返回值对象对象中可能存在没有token这个key的情况不存在则为undefinde 如果是token：string | null 则表示必须得有token这个key 但是值可以为null 
  token?: string
  message?: string
}

export interface loginResponse {
  code: number
  data: responseDataType
}

// 服务器返回用户信息的ts类型
interface userInfo {
  id: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}
interface user {
  checkUser: userInfo
}
export interface userResponse {
  code: number
  data: user
}
