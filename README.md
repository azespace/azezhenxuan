# Vue 3 + TypeScript + Vite + Element-Plus

### esLint => javascript代码检测工具

```
pnpm i eslint -D
npx eslint --init
```

### eslintrc => javascript环境代码校验 处理prettier与esLint冲突

```
pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser
```

### prettier => javascript代码格式化工具

```
pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
```

### stylelint => css的语法检查和代码格式化工具

```
pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D
```

### husky => git钩子提交前美化代码

```
pnpm install -D husky
npx husky-init
```

### commitlint => git钩子commit内容规范检查

```
pnpm add @commitlint/config-conventional @commitlint/cli -D
```

### vite-plugin-svg-icons => svg矢量图

```
pnpm install vite-plugin-svg-icons -D
```

### vite-plugin-mock mockjs => mock数据

```
pnpm install -D vite-plugin-mock mockjs
```

### axios => 发请求的工具

```
pnpm install axios
```

### pinia => 数据仓库中心

```
pnpm install pinia
```

### vue-router => vue路由管理
```
pnpm install vue-router
```


#### 关于TypeJs的一些语法
```
interface responseDataType {
  // 加个问好表示可能存在返回值没有token的情况
  token?: string,
  message?: string
}
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
}
```


#### 关于vue3的语法
```
<!-- <router-view> 是 Vue Router 提供的一个组件，用于渲染匹配的路由内容。在这个例子中，根据当前路由，<router-view> 会渲染不同的组件内容 -->
<router-view></router-view>

//reactive是vue3的响应式api用于绑定对象，ref是用于绑定基本数据类型 
import { reactive,ref } from 'vue'
//可以先定义后使用这个数据，不加默认值表示undefind
let xxx = ref();
```


#### 关于css的语法
```
// 视口高度也就是和浏览器可见区域保持一致的高度
height: 100vh;
//  no-repeat 表示背景图不会重复平铺
background: url('@/assets/images/background.jpg') no-repeat;
// 图片为了保证完全覆盖元素区域，可能部分会被裁剪以确保适应不同浏览器窗口大小
background-size: cover;
// 不加position就无法调整表单位置，top属性就不生效，因为relative可以生成定位上下文，这是css属性从而让元素脱离文档流(默认的浏览器布局方式，就是自然排列，块级元素占一行，内联元素一行中先后排列)，从而可以让tpo属性生效，让定位更灵活
.login_form {
  position: relative;
  width: 80%;
  top: 30vh;
}
```