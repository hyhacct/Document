---
title: Vue.js
titleTemplate: 表单rules规则介绍
date: 2025-01-07 13:19:18
---

# 概述

rules规则是Vue.js中非常重要的属性，它可以对表单的输入进行校验，并给出提示信息。

这里将记录有关rules规则的常用用法。

## 基础用法

rules规则是一个数组，数组的每一项是一个对象，对象中包含两个属性：


| 属性名称     |                                                                功能描述 |
| ------------ | ----------------------------------------------------------------------: |
| `message`    |                                              当验证失败时显示的错误信息 |
| `trigger`    | 指定何时触发验证，常见的值有 blur（失去焦点时）、change（值发生变化时） |
| `type`       |                               指定数据类型，如 string、number、email 等 |
| `min 和 max` |                                            用于限制输入的最小和最大长度 |
| `pattern`    |                                                  使用正则表达式进行验证 |
| `validator`  |                              自定义验证函数，允许你编写更复杂的验证逻辑 |
| `required`   |                                             是否必填，值为true或false。 |


例如：

```js
rules: [
  { required: true, message: '不能为空' },
  { min: 6, max: 12, message: '长度必须在6到12之间' },
  { pattern: /^[a-zA-Z]+$/, message: '只能输入字母' }
]
```

上述例子中，第一个规则表示必填，第二个规则表示长度必须在6到12之间，第三个规则表示只能输入字母。





## 自定义验证函数

除了使用内置的验证函数，还可以自定义验证函数。

自定义验证函数的格式如下：

```js
function(value) {
  // 自定义验证逻辑
  return true | false;
}
```

例如：

```js
rules: [
  { validator: validateUsername, message: '用户名格式错误' }
]

function validateUsername(value) {
  // 自定义验证逻辑
  return /^[a-zA-Z0-9]+$/.test(value);
}
```

上述例子中，自定义了一个验证函数`validateUsername`，它验证用户名是否只包含字母和数字。

## 异步验证

异步验证可以实现更复杂的验证逻辑，例如与服务器进行交互。

异步验证的格式如下：

```js
function(value, callback) {
  // 异步验证逻辑
  callback(true | false, '错误提示信息');
}
```

例如：

```js
rules: [
  { validator: validateUsername, message: '用户名已存在' }
]

function validateUsername(value, callback) {
  // 异步验证逻辑
  axios.get('/api/check-username', { params: { username: value } })
   .then(response => {
      callback(response.data.success, response.data.message);
    })
   .catch(error => {
      callback(false, '服务器错误');
    });
}
```

上述例子中，自定义了一个异步验证函数`validateUsername`，它通过向服务器发送请求验证用户名是否存在。

异步验证函数的第二个参数`callback`是一个回调函数，它接受两个参数：

- 第一个参数为布尔值，表示验证是否通过。
- 第二个参数为字符串，表示错误提示信息。

