import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

    head: [['link', { rel: 'Reverse', href: '/logo_code.png' }]],

    lastUpdated: true,

    title: "Reverse Docs",

    description: "🚀 用Go语言搭建火箭，Vue.js让前端起飞！",

    themeConfig: {

        logo: '/logo_reverse_none_back.png',

        siteTitle: 'Reverse',


        nav: [
            { text: '首页', link: '/' },
            { text: '好东西', link: '/docs/tools/default.md' },
            {
                text: '文档', items: [
                    { text: 'Go', link: '/docs/developer/goland/default.md' },
                    { text: 'Shell', link: '/docs/developer/shell/default.md' },
                    { text: 'Vue', link: '/docs/developer/vue/default.md' },
                    // { text: 'React', link: '/item-3' },
                    // { text: 'Docker', link: '/item-3' },
                    { text: 'Git', link: '/docs/developer/git/default.md' },
                    { text: '运维', link: '/docs/developer/oam/default.md' },
                    // { text: '易语言', link: '/item-3' },
                ]
            },
        ],


        sidebar: {
            '/docs/developer/goland/': [
                {
                    aside: true,
                    text: 'Go语言',
                    items: [
                        { text: '【介绍】Go语言简介', link: '/docs/developer/goland/default.md' },
                        { text: '【代码】输出彩色日志', link: '/docs/developer/goland/1727608104/index.md' },
                        { text: '【代码】字符是否为空', link: '/docs/developer/goland/1728203103/index.md' },
                        { text: '【代码】数据类型转换', link: '/docs/developer/goland/1728203408/index.md' },
                        { text: '【代码】生成随机文本', link: '/docs/developer/goland/1728203584/index.md' },
                        { text: '【代码】时间类型转换', link: '/docs/developer/goland/1728203747/index.md' },
                        { text: '【代码】Base64编码', link: '/docs/developer/goland/1728204331/index.md' },
                    ]
                }
            ],

            '/docs/developer/vue/': [
                {
                    aside: true,
                    text: 'Vue.js',
                    items: [
                        { text: '【介绍】Vue.js简介', link: '/docs/developer/vue/default.md' },
                        { text: '【代码】VsCode代码片段', link: '/docs/developer/vue/1729739980/index.md' },
                        { text: '【代码】Axios二次封装', link: '/docs/developer/vue/1729740466/index.md' },
                        { text: '【代码】JS键值对匹配', link: '/docs/developer/vue/1729747032/index.md' },
                        { text: '【代码】本地存储数据', link: '/docs/developer/vue/1729752187/index.md' },
                    ]
                }
            ],

            '/docs/developer/shell/': [
                {
                    aside: true,
                    text: 'Shell',
                    items: [
                        { text: '【介绍】Shell简介', link: '/docs/developer/shell/default.md' },
                        { text: '【代码】输出彩色消息', link: '/docs/developer/shell/1729769292/index.md' },
                        { text: '【代码】运算符和表达式', link: '/docs/developer/shell/1729771561/index.md' },
                    ]
                }
            ],

            '/docs/developer/git/': [
                {
                    aside: true,
                    text: 'Git',
                    items: [
                        { text: '【介绍】Git简介', link: '/docs/developer/git/default.md' },
                        { text: '【使用】管理多个Git仓库', link: '/docs/developer/git/1729691506/index.md' },
                    ]
                }
            ],

            '/docs/developer/oam/': [
                {
                    aside: true,
                    text: '运维',
                    items: [
                        { text: '【介绍】运维', link: '/docs/developer/oam/default.md' },
                        { text: '【Nginx】配置HTTPS', link: '/docs/developer/oam/1729744028/index.md' },
                        { text: '【问题】glibc版本过低', link: '/docs/developer/oam/1729789129/index.md' },


                    ]
                }
            ],

            '/docs/tools/': [
                {
                    aside: true,
                    text: '工具分享',
                    items: [
                        { text: '【介绍】这是啥?', link: '/docs/tools/default.md' },
                        { text: '【工具分享】Grapic', link: '/docs/tools/1729786919/index.md' },
                        { text: '【工具分享】JSON转结构体', link: '/docs/tools/1729755703/index.md' },
                        { text: '【工具分享】在线抠图工具', link: '/docs/tools/1729755712/index.md' },
                    ]
                }
            ],
        },


        socialLinks: [
            { icon: 'github', link: 'https://github.com/hyhacct' }
        ],


        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024-present Reverse'
        },

    }
})
