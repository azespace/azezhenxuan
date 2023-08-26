//登录接口需要携带参数的ts类型
export interface loginForm {
  username: string,
  password: string
}

//登录接口返回数据的ts类型
interface responseDataType{
  token: string
}

export interface loginResponse {
  code: number,
  data: responseDataType,
}

// 服务器返回用户信息的ts类型
interface userInfo{
  id: number,
  avatar: string,
  username: string,
  password: string,
  desc: string,
  roles: string[],
  buttons: string[],
  routes: string[],
  token: string
}
interface user{
  checkUser:userInfo
}
export interface userResponse {
  code: number,
  data: user
}
