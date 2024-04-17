<!-- 这段代码用于显示一个svg图标 -->
<template>
  <div>
    <!-- svg标签用来创建一个 SVG 元素的标签，user表示引用外部的 SVG 图标文件使用:表示绑定属性 都是动态属性由父组件传值 -->
    <svg :style="{ width: width, height: height }">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
// 定义组件的属性 defineProps是vue3的新特性，用于定义组件的属性 通过props接收父组件传递的值 从而产生不同图标效果 还增加了类型检查
defineProps({
  // xlink:href属性值的前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // svg矢量图的名字
  name: String,
  // svg图标的颜色
  color: {
    type: String,
    default: '',
  },
  // svg宽度
  width: {
    type: String,
    default: '16px',
  },
  // svg高度
  height: {
    type: String,
    default: '16px',
  },
})
</script>
<style scoped></style>
