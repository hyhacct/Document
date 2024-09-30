import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

    lastUpdated: true,

    title: "Reverse Docs",

    description: "野生的技术文档，包含Vue，React，NodeJs，Shell，Goland，易语言, 运维 等",

    themeConfig: {

        logo: '/public/logo_reverse_none_back.png',

        siteTitle: 'Reverse',

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024-present Reverse'
        },

        nav: [
            { text: '首页', link: '/' },
            { text: '关于', link: '/1' },
            { text: '文档', link: '/2' },
        ],

        sidebar: {
            '/docs/developer/goland/': [
                {
                    text: 'Goland代码',
                    items: [
                        { text: '【代码】输出彩色日志', link: '/docs/developer/goland/1727608104.md' },
                    ]
                }
            ],
        },


        socialLinks: [
            { icon: 'github', link: 'https://github.com/ReverseHot' }
        ]
    }
})
