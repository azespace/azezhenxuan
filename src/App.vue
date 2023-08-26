<template>
  <div>
    <h1>测试</h1>
    <el-button type="primary" :icon="Plus">Primary</el-button>
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      background
      layout="prev, pager, next,total,size,jumper"
      :total="1000"
    />
    <!-- 这里可以使用SvgIcon标签也就是子组件，也可以使用svg-icon这是插件作者自定义的标签可以当作组件使用 -->
    <svg-icon name="plus" color="red" width="300px" height="300px"></svg-icon>
  </div>
</template>

<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'
import { onMounted } from 'vue'
import { reqLogin } from '@/api/user'
onMounted(() => {
  reqLogin({ username: 'admin', password: '111111' })
})
</script>
<style lang="scss" scoped>
div {
  h1 {
    width: 100%;
    height: 100%;
    background-color: $base-color;
  }
}
</style>
