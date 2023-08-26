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