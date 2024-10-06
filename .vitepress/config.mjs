import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

    lastUpdated: true,

    title: "Reverse Docs",

    description: "野生的技术文档，包含Vue，React，NodeJs，Shell，Goland，易语言, 运维 等",

    themeConfig: {

        logo: '/logo_reverse_none_back.png',

        siteTitle: 'Reverse',



        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024-present Reverse'
        },


        nav: [
            { text: '首页', link: '/' },
            { text: '我的', link: '/docs/developer' },
            { text: '文档', link: '/2' },
        ],


        sidebar: {
            '/docs/developer/goland/': [
                {
                    text: 'Goland代码',
                    items: [
                        { text: '【代码】输出彩色日志', link: '/docs/developer/goland/1727608104.md' },
                        { text: '【代码】字符是否为空', link: '/docs/developer/goland/1728203103.md' },
                        { text: '【代码】数据类型转换', link: '/docs/developer/goland/1728203408.md' },
                        { text: '【代码】生成随机文本', link: '/docs/developer/goland/1728203584.md' },
                        { text: '【代码】时间类型转换', link: '/docs/developer/goland/1728203747.md' },
                        { text: '【代码】Base64编码', link: '/docs/developer/goland/1728204331.md' },
                    ]
                }
            ],
            '/docs/developer/': [
                {
                    text: '前言',
                    items: [
                        { text: '有话说', link: '/docs/developer/index.md' },
                    ]
                },
                {
                    text: '相关文档',
                    items: [
                        { text: 'Go语言', link: '/docs/developer/goland/1727608104.md' },
                        { text: 'Shell脚本', link: '/docs/developer/goland/1727608104.md' },
                        { text: '易语言', link: '/docs/developer/goland/1727608104.md' },
                        { text: 'MySQL', link: '/docs/developer/goland/1727608104.md' },
                        { text: 'PostgreSQL', link: '/docs/developer/goland/1727608104.md' },
                        { text: '运维', link: '/docs/developer/goland/1727608104.md' },
                        { text: 'Vue', link: '/docs/developer/goland/1727608104.md' },
                        { text: 'JS', link: '/docs/developer/goland/1727608104.md' },
                        { text: 'React', link: '/docs/developer/goland/1727608104.md' },
                        { text: 'C#', link: '/docs/developer/goland/1727608104.md' },
                    ]
                }
            ],
        },



        socialLinks: [
            { icon: 'github', link: 'https://github.com/ReverseHot' }
        ]
    }
})
