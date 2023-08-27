//用户小仓库
import { defineStore } from 'pinia'
//引入ts数据类型
import type { loginForm, loginResponse } from '@/api/user/type'
import type { userState } from '@/store/modules/type'
//引入封装好的用户的api请求
import { reqLogin } from '@/api/user/index'

let userStore = defineStore('User', {
  //数据存储
  state: ():userState => {
    return { token: localStorage.getItem('token') }
  },
  actions: {
    //这里的逻辑是给页面调用的，这里再去调用api并将api的数据存储起来，页面就可以直接使用了
    //async异步操作，逻辑默认会返回一个promise，如果不需要返回promise，可以使用async await
    //Promise是 JavaScript 中处理异步操作的一种机制,它表示一个可能会在未来完成或失败的操作，并提供了一种更加结构化的方式来管理和处理异步操作
    //Pending（进行中）：初始状态  Fulfilled（已完成） Rejected（已失败）
    //可以通过创建一个 Promise 对象来执行异步操作，然后使用 .then() 和 .catch() 方法来处理 Promise 的结果或错误
    async userLogin(data: loginForm) {
      //await等待异步操作完成，才会执行下面的代码
      let result: loginResponse = await reqLogin(data)
      if (result.code == 200) {
        //as string表示断言为string类型，强制转换成string 如果不是string类型，会报错
        this.token = (result.data.token as string)
        localStorage.setItem('token', (result.data.token as string))
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    //同步操作，逻辑
    getters: {},
  },
})

export default userStore
