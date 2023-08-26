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
    <svg-icon name="plus" color="red" width="300px" height="300px"></svg-icon>
  </div>
</template>

<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'
import { onMounted } from 'vue';
import { reqLogin } from '@/api/user'
onMounted(() => {
  reqLogin({username:'admin',password:'111111'})
})
</script>
<style lang="scss" scoped>
div {
  h1{
    width: 100%;
    height: 100%;
    background-color:$base-color;
  }
}
</style>
