---
title: Vue.js
titleTemplate: Pinia状态管理
date: 2025-01-13 12:05:12
---

# 概述

如下


## 安装

安装软件

::: code-group

```bash [npm]
npm install pinia
```

```bash [yarn]
yarn add pinia
```

:::


## 基本配置

```js
import { defineStore } from "pinia";

export const useStoreUser = defineStore("useStoreUser", {
    state: () => {
        return {
            loading: false,
            form: {
                username: '',
                password: '',
            }
        };
    },
});
```
