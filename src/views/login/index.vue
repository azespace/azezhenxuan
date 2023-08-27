<template>
  <div class="login_page">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>阿泽空间站</h1>
          <el-form-item>
            <el-input
              placeholder="请输入用户名"
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              placeholder="请输入密码"
              show-password
              :prefix-icon="Lock"
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              round
              class="login_btn"
              @click="login"
              :loading="isLoading"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
//引入element图标 单一引入这样性能比较高
import { User, Lock } from '@element-plus/icons-vue'
//收集账户和密码 reactive是vue3的响应式api用于绑定对象，ref是用于绑定基本数据类型
import { reactive, ref } from 'vue'
//引入用户数据仓库
import userStore from '@/store/modules/user'
import { ElNotification } from 'element-plus'
let userLoginStore = userStore()
let loginForm = reactive({
  username: '',
  password: '',
})
let isLoading = ref(false)
const login = async () => {
  //登录按钮加载效果
  isLoading.value = true
  //登录后调用pinia仓库中心的action方法，将用户数据传入
  try {
    //await等待异步操作完成
    await userLoginStore.userLogin(loginForm)
    ElNotification({
      title: '登录成功',
      message: '欢迎回来',
      type: 'success',
    })
    isLoading.value = false
  } catch (error) {
    ElNotification({
      title: '登录失败',
      message: '用户名密码错误',
      type: 'error',
    })
    isLoading.value = false
  }
}
//todo 增加鼠标放在登录按钮上如果用户密码没有校验成功则登录按钮飘来飘去的3D效果
</script>
<style lang="scss" scoped>
.login_page {
  // 占其父元素宽度的百分之百
  width: 100%;
  // 视口高度也就是和浏览器可见区域保持一致的高度
  height: 100vh;
  //  no-repeat 表示背景图不会重复平铺
  background: url('@/assets/images/background.jpg') no-repeat;
  // 图片为了保证完全覆盖元素区域，可能部分会被裁剪以确保适应不同浏览器窗口大小
  background-size: cover;
  // 不加position就无法调整表单位置，因为relative可以生成定位上下文，这是css属性从而让元素脱离文档流(默认的浏览器布局方式，就是自然排列，块级元素占一行，内联元素一行中先后排列)，从而可以让tpo属性生效，让定位更灵活
  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    h1 {
      color: rgb(114, 174, 230);
      font-size: 40px;
      text-align: center;
      margin: 10px 20px;
    }
    .login_btn {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
