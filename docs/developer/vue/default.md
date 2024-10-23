---
title: Vue.js
---

## 介绍
Vue.js 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，Vue 也完全能够为复杂的单页应用提供驱动。

## 特性
- `易上手`：学习曲线平滑，语法简单，容易上手。
- `灵活`：组件化设计，可复用性强。
- `高效`：虚拟 DOM，最少的操作 DOM，最大化的性能提升。
- `轻量`：体积小，加载快，无依赖。
- `跨平台`：支持多种平台，包括浏览器、服务器端、移动端等。
- `易测试`：提供了单元测试工具，可方便测试。
- `社区活跃`：拥有庞大的生态系统，丰富的插件和工具。
- `文档丰富`：提供了丰富的官方文档和学习资源。
- `生态丰富`：提供了大量的第三方库，如 Vuex、Vue-router、Vue-cli、Vuepress 等。
- `开源`：基于 MIT 协议，可自由使用、修改、分发。
- `免费`：提供了免费的商用授权。



## 生态
::: tip
接下来介绍一下Vue.js的一些常用库。
:::

## 【开发框架】Vite
> Vite 是一个现代化的前端构建工具，它利用了原生 ES 模块特性，提供了快速的冷启动和热更新能力。Vite 由 Vue.js 的创作者尤雨溪（Evan You）主导开发，但它并不是专门为 Vue 设计的，它支持多种前端框架，包括 React、Preact、Lit 和 Svelte 等。

> Vite 以其快速的开发体验和现代化的特性，已经成为许多前端开发者的首选工具之一。随着前端生态系统的不断发展，Vite 也在不断更新，以支持最新的前端技术和标准。

以下是 Vite 的一些关键特性：
1. `快速的服务器启动`：Vite 利用了现代浏览器对 ES 模块（ESM）的原生支持，可以在没有打包的情况下直接从文件系统提供模块。这意味着冷启动非常快，因为不需要等待打包过程。
2. `即时模块热更新（HMR）`：Vite 提供了快速的热模块替换能力，这意味着在开发过程中，你可以立即看到对代码的更改效果，而不需要刷新页面。
3. `构建优化`：在构建生产版本时，Vite 会使用 Rollup 或者 webpack 作为底层打包器，根据项目的依赖自动选择最合适的打包器。
4. `支持 TypeScript 和 JSX`：Vite 原生支持 TypeScript 和 JSX，无需额外配置。
5. `丰富的插件生态`：Vite 拥有一个活跃的社区和丰富的插件生态，可以扩展 Vite 的功能，例如支持 CSS 预处理器、图像优化、环境变量注入等。
6. `Vue 单文件组件支持`：对于 Vue 项目，Vite 提供了对单文件组件（SFC）的原生支持，包括热重载和 CSS 作用域。
7. `自定义和可扩展`：Vite 提供了丰富的 API 和插件系统，允许开发者根据需要自定义构建和开发服务器的行为。
8. `ES 模块导入特性`：Vite 支持动态导入和导入 JSON、WASM、CSS 和其他资源，这些特性都是通过 ES 模块规范实现的。
9. `服务端渲染（SSR）支持`：Vite 支持服务端渲染，可以与 Node.js 服务器无缝配合，为构建 SSR 应用提供支持。
10. `环境变量支持`：Vite 支持在客户端和服务器端使用环境变量，这使得配置不同环境变得更加简单。


- 官网：https://vitejs.dev/
- 文档：https://cn.vitejs.dev/
- GitHub：https://github.com/vitejs/vite

## 【UI 组件库】Vuetify
> Vuetify 是一个基于 Material Design 的 Vue UI 库，由 Vue.js 的核心团队成员之一的 John Leider 创建。它提供了一套丰富的 Material Design 风格的组件，这些组件遵循 Material Design 指南，并且与 Vue 框架紧密结合，使得开发者能够快速构建出美观、响应式的 Web 应用。

以下是 Vuetify 的一些主要特点：
1. `Material Design 组件`：Vuetify 提供了超过 80 个预制的 Material Design 组件，如按钮、卡片、对话框、导航抽屉等，这些组件都经过精心设计，确保了一致性和美观性。
2. `响应式布局`：Vuetify 内置了响应式网格系统，使得开发者可以轻松地创建出适应不同屏幕尺寸的布局。
3. `主题定制`：Vuetify 允许开发者定制主题，包括颜色、字体、边框等，以匹配应用的品牌和风格。
4. `易用性`：Vuetify 的组件易于使用，文档详尽，提供了大量的示例和指导，帮助开发者快速上手。
5. `暗色模式`：Vuetify 支持暗色模式，并且可以轻松地在应用中切换。
6. `国际化`：Vuetify 支持国际化，可以方便地集成到多语言的应用中。
7. `可访问性`：Vuetify 的组件遵循可访问性最佳实践，确保了应用的可访问性。
8. `树摇优化`：Vuetify 支持 Vue 3 的 Tree-shaking 特性，这意味着只有你实际使用的组件会被包含在最终的构建中，从而减少了应用的体积。
9. `TypeScript 支持`：Vuetify 支持 TypeScript，提供了类型定义，使得在 TypeScript 项目中使用 Vuetify 更加方便。
10. `社区支持`：Vuetify 拥有一个活跃的社区，开发者可以在社区中寻求帮助，分享经验，或者贡献代码。


- 官网：https://vuetifyjs.com/zh-Hans/
- 文档：https://vuetifyjs.com/zh-Hans/getting-started/quick-start/
- GitHub：https://github.com/vuetifyjs/vuetify

## 【UI 组件库】Naive UI
> Naive UI 是一个基于 Vue 3 的组件库，由图森未来公司（TuSimple）开发和维护。它专为现代 web 应用程序开发而设计，提供了超过80个组件，覆盖了表格、表单、弹窗、图表等多个方面

1. `易用性强`：Naive UI 的 API 接口清晰，文档说明详尽，使得学习和使用都非常容易。
2. `组件丰富`：提供了丰富的组件库，满足了各种业务场景和设计需求。
3. `主题可调`：Naive UI 提供了一个先进的类型安全主题系统，通过简单的样式覆盖，开发者可以轻松定制应用的主题，实现品牌统一和个性化定制。
4. `响应式设计`：所有的组件都支持响应式布局，能够适应不同设备和屏幕尺寸。
5. `高性能`：Naive UI 利用 Vue 3 的特性，在保持良好体验的同时，也兼顾了加载速度和运行效率。
6. `社区活跃`：Naive UI 有活跃的开发团队和用户社区，能够及时更新修复问题，不断添加新功能。
7. `使用 TypeScript`：Naive UI 全量使用 TypeScript 编写，和你的 TypeScript 项目无缝衔接。
8. `支持 Tree-shaking`：Naive UI 的组件支持 Tree-shaking，这意味着你可以根据需要仅引入应用程序中实际使用的组件，从而优化最终的打包体积。
9. `无需额外的 CSS`：你不需要导入任何 CSS 就能让组件正常工作，这使得组件的集成变得更加简单。
10. `支持暗色主题`：Naive UI 支持暗色主题，用户可以根据自己的喜好或应用的需求轻松切换主题。
11. `提供主题编辑器`：Naive UI 提供了一个主题编辑器，帮助开发者方便地编辑主题并导出对应配置。
12. `支持全局化配置`：通过 n-config-provider 组件，Naive UI 允许开发者设置内部组件的主题、语言和组件卸载于其他位置的 DOM 的类名。
13. `支持按需引入`：Naive UI 支持按需引入，组件、语言、主题均可 tree-shaking，这有助于减少最终打包的体积。
14. `支持图标`：Naive UI 建议使用 xicons 作为图标库，提供了丰富的图标选项。
15. `支持自定义字体`：Naive UI 可以和 vfonts 配合，你可以简单的引入 vfonts 中的字体，包含常规字体和等宽字体。

- 官网：https://www.naiveui.com/zh-CN/os-theme
- 文档：https://www.naiveui.com/zh-CN/os-theme/docs/introduce
- GitHub：https://github.com/TuSimple/naive-ui

## 【路由】Vue-Router
> Vue Router 是 Vue.js 的官方路由管理器。它与 Vue.js 的核心深度集成，让构建单页应用（SPA）变得轻而易举。Vue Router 允许你为应用的每个状态设计路径，使得用户在浏览应用的不同部分时，能够保持 URL 的变化，从而提供更自然的用户体验。

以下是 Vue Router 的一些核心特性：
1. `嵌套路由`：Vue Router 支持嵌套路由，这意味着你可以创建复杂的、多层次的路由结构，非常适合大型应用。
2. `视图复用`：通过 `<router-view>` 组件，你可以在不同的路由间复用组件，或者在同一个页面上显示多个视图。
3. `路由懒加载`：Vue Router 支持路由组件的懒加载，这意味着只有在路由被访问时，对应的组件才会被加载，这有助于减少应用的初始加载时间。
4. `导航守卫`：Vue Router 提供了一套完整的导航守卫系统，允许你在路由发生变化之前或之后执行逻辑，例如权限检查、数据预加载等。
5. `链接和编程式导航`：Vue Router 提供了 `<router-link>` 组件来创建声明式的导航链接，同时也支持编程式导航，即通过 JavaScript 代码来控制路由跳转。
6. `滚动行为`：Vue Router 允许你控制路由跳转时的滚动行为，例如可以设置回到顶部或保持原有的滚动位置。
7. `历史模式`：Vue Router 支持 HTML5 的 History API，允许你使用无刷新的 URL 跳转，同时也兼容传统的哈希（hash）模式。
8. `模块化`：Vue Router 支持模块化的路由配置，使得在大型应用中可以按需加载路由模块。
9. `TypeScript 支持`：Vue Router 提供了 TypeScript 类型定义，使得在 TypeScript 项目中使用 Vue Router 更加方便和安全。
10. `与 Vue 3 兼容`：Vue Router 4.x 版本是为 Vue 3 专门设计的，提供了更好的性能和更多的特性。



- 官网：https://router.vuejs.org/zh/
- 文档：https://router.vuejs.org/zh/guide/
- GitHub：https://github.com/vuejs/vue-router

## 【网络】Axios
> Axios 是一个流行的 JavaScript 库，用于在浏览器和 node.js 环境中进行 HTTP 请求。它提供了一个简单、直观的 API，用于发送异步 HTTP 请求

1. `从浏览器中创建 XMLHttpRequests`：在浏览器端，Axios 使用 XMLHttpRequest 对象来发送请求。
2. `从 node.js 发出 http 请求`：在服务器端，Axios 使用 node.js 的 http 和 https 模块。
3. `支持 Promise API`：Axios 返回的是一个 Promise 对象，这意味着你可以使用 .then() 和 .catch() 方法来处理请求的成功和失败。
4. `拦截请求和响应`：你可以在请求发送前或响应返回后，通过拦截器来修改请求或响应的配置。
5. `转换请求和响应数据`：Axios 允许你在发送请求之前和接收响应之后，转换发送的数据和接收的数据。
6. `取消请求`：你可以取消一个已经发出的请求。
7. `超时处理`：你可以为请求设置超时时间。
8. `查询参数序列化`：Axios 可以自动处理 URL 的查询参数，包括嵌套对象。
9. `自动 JSON 数据转换`：Axios 会自动将 JavaScript 对象转换为 JSON 格式，并在接收到 JSON 响应时将其转换回 JavaScript 对象。
10. `客户端支持防御 XSRF`：Axios 提供了防御跨站请求伪造（XSRF）的机制。


- 官网：https://axios-http.com/zh-cn/    
- 文档：https://axios-http.com/zh-cn/docs/intro
- GitHub：https://github.com/axios/axios

## 【状态管理】Pinia
> Pinia 是一个 Vue.js 的状态管理库，由 Vue.js 的作者尤雨溪（Evan You）推荐，它被设计为 Vuex 的官方替代品。Pinia 旨在为 Vue 应用程序提供更简单、更直观的状态管理模式，同时保持与 Vue 3 的紧密集成。

> Pinia 的设计哲学是“约定优于配置”，这意味着它尽量减少配置的复杂性，让开发者能够更专注于业务逻辑。随着 Vue 3 的普及，Pinia 逐渐成为 Vue 社区中流行的状态管理解决方案之一。

以下是 Pinia 的一些主要特点：
1. `易于使用`：的 API 设计简洁直观，使得状态管理更加容易上手。
2. `响应式系统`：利用 Vue 3 的响应式系统，确保状态的变更能够自动更新到视图层。
3. `模块化`：支持模块化的状态管理，允许开发者将状态分散在不同的文件中，便于维护和组织代码。
4. `时间旅行`：支持时间旅行功能，这使得开发者可以在开发过程中回溯状态变化，这对于调试应用程序非常有用。
5. `插件系统`：提供了一个插件系统，允许开发者扩展 Pinia 的功能，例如添加持久化插件来保存状态。
6. `TypeScript 友好`：支持 TypeScript，提供了良好的类型推断和类型定义，使得在 TypeScript 项目中使用 Pinia 更加方便。
7. `与 Vue DevTools 集成`：与 Vue DevTools 集成，可以在开发者工具中直观地查看和操作状态。
8. `兼容性`：兼容 Vue 2 和 Vue 3，但为了充分利用 Pinia 的特性，建议在 Vue 3 项目中使用。
9. `更小的打包体积`：与 Vuex 相比，Pinia 通常会产生更小的打包体积，因为它更加轻量级。

- 官网：https://pinia.vuejs.org/zh-cn/
- 文档：https://pinia.vuejs.org/zh-cn/introduction.html
- GitHub：https://github.com/vuejs/pinia