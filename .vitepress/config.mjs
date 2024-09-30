import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Reverse Docs",
    description: "野生的技术文档，包含Vue，React，NodeJs，Shell，Goland，易语言, 运维 等",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
        ],

        sidebar: {
            '/docs/technology/goland/': [
                {
                    text: 'Goland篇',
                    items: [
                        { text: '介绍', link: '/docs/technology/goland/1727608104.md' },
                    ]
                }
            ],
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/ReverseHot' }
        ]
    }
})
