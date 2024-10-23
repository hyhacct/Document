import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

    lastUpdated: true,

    title: "Reverse Docs",

    description: "🚀 用Go语言搭建火箭，Vue.js让前端起飞！",

    themeConfig: {

        logo: '/logo_reverse_none_back.png',

        siteTitle: 'Reverse',


        nav: [
            { text: '首页', link: '/' },
            { text: '我的', link: '/docs/developer' },
            {
                text: '文档', items: [
                    { text: 'Go', link: '/docs/developer/goland/default.md' },
                    { text: 'Shell', link: '/item-2' },
                    { text: 'Vue', link: '/item-3' },
                    { text: 'React', link: '/item-3' },
                    { text: 'Docker', link: '/item-3' },
                    { text: 'Git', link: '/item-3' },
                    { text: '运维', link: '/item-3' },
                    { text: '易语言', link: '/item-3' },
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
                        { text: '【代码】输出彩色日志', link: '/docs/developer/goland/1727608104.md' },
                        { text: '【代码】字符是否为空', link: '/docs/developer/goland/1728203103.md' },
                        { text: '【代码】数据类型转换', link: '/docs/developer/goland/1728203408.md' },
                        { text: '【代码】生成随机文本', link: '/docs/developer/goland/1728203584.md' },
                        { text: '【代码】时间类型转换', link: '/docs/developer/goland/1728203747.md' },
                        { text: '【代码】Base64编码', link: '/docs/developer/goland/1728204331.md' },
                    ]
                }
            ],
            '/docs/developer/vue/': [
                {
                    aside: true,
                    text: 'Vue.js',
                    items: [
                        { text: '【介绍】Vue.js简介', link: '/docs/developer/vue/default.md' },
                    ]
                }
            ],
            '/docs/developer/shell/': [
                {
                    aside: true,
                    text: 'Shell',
                    items: [
                        { text: '【介绍】Shell简介', link: '/docs/developer/shell/default.md' },
                    ]
                }
            ],
            '/docs/developer/git/': [
                {
                    aside: true,
                    text: 'Git',
                    items: [
                        { text: '【介绍】Git简介', link: '/docs/developer/git/default.md' },
                        { text: '【使用】管理多个Git仓库', link: '/docs/developer/git/1729691506.md' },
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
