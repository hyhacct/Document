---
title: Vue.js
titleTemplate: Router路由
date: 2025-01-12 21:35:03
---

# 概述

简单记录下路由


## 安装

安装软件

::: code-group

```bash [npm]
npm install vue-router@4
```

```bash [yarn]
yarn add vue-router@4
```

```bash [pnpm]
pnpm add vue-router@4
```

:::


创建项目，可以更快的搭建项目基础脚手架

::: code-group

```bash [npm]
npm create vue@latest
```

```bash [yarn]
yarn create vue
```

```bash [pnpm]
pnpm create vue
```

:::




## 基本配置

```js
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    // {
    //     path: '/',
    //     name: 'login',
    //     component: ViewLogin,
    // },
   
]



const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


// router.beforeEach((to, from, next) => {
//     loadingBar.start();
//     next(); // 继续导航
// });

// router.afterEach(() => {
//     loadingBar.finish(); // 导航完成后停止loading
// });



export default router
```
