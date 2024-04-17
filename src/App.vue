<template>
  <div>
    <!-- 是 Vue Router 提供的一个组件，无标签内容，所有的页面视图都会在这个组件中被渲染。
    根据当前路由，当路由改变时，<router-view>会自动卸载当前的组件，并加载和渲染新的组件。
    -->
    <router-view></router-view>
  </div>
</template>

<!-- ts表示语言类型为typescript setup属性是Vue 3的新特性 表示这个项目将会使用组合式api-->
<script lang="ts" setup></script>
<!-- scss表示这里的语言类型为scss 这是一种css语言，是得编写css更加强大 scoped属性表示这里的样式只适用于当前组件 模块化不会影响到其他组件 -->
<style lang="scss" scoped></style>
