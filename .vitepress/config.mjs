import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    vite: {
        ssr: {
            noExternal: ["vitepress", "@escook/vitepress-theme"],
        },
    },

    head: [["link", { rel: "Reverse", href: "/logo_code.png" }]],

    lastUpdated: true,

    title: "Reverse Docs",

    description: "🚀 用Go语言搭建火箭，Vue.js让前端起飞！",

    themeConfig: {
        // 启用搜索功能
        search: {
            provider: "local",
        },

        // 设置导航栏logo
        logo: "/logo_reverse_none_back.png",

        // 设置标题
        siteTitle: "Reverse",

        nav: [
            { text: "首页", link: "/" },
            { text: "好东西", link: "/docs/tools/default.md" },
            {
                text: "更多文档",
                items: [
                    { text: "夜莺", link: "/docs/developer/n9e/default.md" },
                    { text: "Go", link: "/docs/developer/goland/default.md" },
                    { text: "Shell", link: "/docs/developer/shell/default.md" },
                    { text: "Vue", link: "/docs/developer/vue/default.md" },
                    { text: "Git", link: "/docs/developer/git/default.md" },
                    { text: "运维", link: "/docs/developer/oam/default.md" },
                    { text: "MacOS", link: "/docs/developer/macos/default.md" },
                    { text: "Python", link: "/docs/developer/python/default.md" },
                ],
            },
        ],

        sidebar: {
            "/docs/developer/n9e/": [
                {
                    aside: true,
                    text: "夜莺指标",
                    items: [
                        { text: "本篇介绍", link: "/docs/developer/n9e/default.md" },
                        {
                            text: "指标-网络重传",
                            link: "/docs/developer/n9e/1733221073/index.md",
                        },
                        {
                            text: "指标-网络流量",
                            link: "/docs/developer/n9e/1733221611/index.md",
                        },
                        {
                            text: "指标-磁盘I/O",
                            link: "/docs/developer/n9e/1733222184/index.md",
                        },
                        {
                            text: "指标-风扇转速",
                            link: "/docs/developer/n9e/1733315750/index.md",
                        },
                        {
                            text: "指标-磁盘写延时",
                            link: "/docs/developer/n9e/1733316447/index.md",
                        },
                        {
                            text: "指标-磁盘读延时",
                            link: "/docs/developer/n9e/1733317015/index.md",
                        },
                        {
                            text: "自定义上报指标",
                            link: "/docs/developer/n9e/1735221323/index.md",
                        },
                    ],
                },
            ],

            "/docs/developer/goland/": [
                {
                    aside: true,
                    text: "Go语言",
                    items: [
                        { text: "介绍", link: "/docs/developer/goland/default.md" },
                        {
                            text: "输出彩色日志",
                            link: "/docs/developer/goland/1727608104/index.md",
                        },
                        {
                            text: "字符是否为空",
                            link: "/docs/developer/goland/1728203103/index.md",
                        },
                        {
                            text: "数据类型转换",
                            link: "/docs/developer/goland/1728203408/index.md",
                        },
                        {
                            text: "生成随机文本",
                            link: "/docs/developer/goland/1728203584/index.md",
                        },
                        {
                            text: "时间类型转换",
                            link: "/docs/developer/goland/1728203747/index.md",
                        },
                        {
                            text: "Base64编码",
                            link: "/docs/developer/goland/1728204331/index.md",
                        },
                        {
                            text: "Xorm框架属性介绍",
                            link: "/docs/developer/goland/1736147130/index.md",
                        },
                        {
                            text: "Xorm框架名称映射",
                            link: "/docs/developer/goland/1736149796/index.md",
                        },
                        {
                            text: "Gin框架解决跨域配置",
                            link: "/docs/developer/goland/1736854973/index.md",
                        },
                    ],
                },
            ],

            "/docs/developer/vue/": [
                {
                    aside: true,
                    text: "Vue.js",
                    items: [
                        { text: "介绍", link: "/docs/developer/vue/default.md" },
                        {
                            text: "vite.config配置",
                            link: "/docs/developer/vue/1729852106/index.md",
                        },
                        {
                            text: "VsCode代码片段",
                            link: "/docs/developer/vue/1729739980/index.md",
                        },
                        {
                            text: "Axios二次封装",
                            link: "/docs/developer/vue/1729740466/index.md",
                        },
                        {
                            text: "JS键值对匹配",
                            link: "/docs/developer/vue/1729747032/index.md",
                        },
                        {
                            text: "本地存储数据",
                            link: "/docs/developer/vue/1729752187/index.md",
                        },
                        {
                            text: "表单rules规则介绍",
                            link: "/docs/developer/vue/1736226138/index.md",
                        },
                        {
                            text: "Router路由",
                            link: "/docs/developer/vue/1736688889/index.md",
                        },
                        {
                            text: "Pinia状态管理",
                            link: "/docs/developer/vue/1736741096/index.md",
                        },
                        {
                            text: "try及Promise异常处理",
                            link: "/docs/developer/vue/1737001716/index.md",
                        },
                    ],
                },
            ],

            "/docs/developer/shell/": [
                {
                    aside: true,
                    text: "Shell",
                    items: [
                        { text: "介绍", link: "/docs/developer/shell/default.md" },
                        {
                            text: "输出彩色消息",
                            link: "/docs/developer/shell/1729769292/index.md",
                        },
                        {
                            text: "vscode插件推荐",
                            link: "/docs/developer/shell/1736741216/index.md",
                        },
                        {
                            text: "运算符和表达式",
                            link: "/docs/developer/shell/1729771561/index.md",
                        },
                        {
                            text: "glances选项介绍",
                            link: "/docs/developer/shell/1735102139/index.md",
                        },
                        {
                            text: "mtr选项介绍",
                            link: "/docs/developer/shell/1735215290/index.md",
                        },
                        {
                            text: "dmidecode介绍",
                            link: "/docs/developer/shell/1735220755/index.md",
                        },
                        {
                            text: "三剑客awk篇",
                            link: "/docs/developer/shell/1735822642/index.md",
                        },
                        {
                            text: "三剑客grep篇",
                            link: "/docs/developer/shell/1735824301/index.md",
                        },
                        {
                            text: "Shell脚本加密",
                            link: "/docs/developer/shell/1736741763/index.md",
                        },
                    ],
                },
            ],

            "/docs/developer/git/": [
                {
                    aside: true,
                    text: "Git",
                    items: [
                        { text: "介绍", link: "/docs/developer/git/default.md" },
                        {
                            text: "管理多个GitHub仓库",
                            link: "/docs/developer/git/1729691506/index.md",
                        },
                        {
                            text: "设置部署秘钥",
                            link: "/docs/developer/git/1734853539/index.md",
                        },
                        {
                            text: "Actions实现CI/CD",
                            link: "/docs/developer/git/1734865243/index.md",
                        },
                        {
                            text: "设置用户名和邮箱",
                            link: "/docs/developer/git/1736227185/index.md",
                        },
                        {
                            text: "初始化远程仓库",
                            link: "/docs/developer/git/1736313295/index.md",
                        },
                    ],
                },
            ],

            "/docs/developer/macos/": [
                {
                    aside: true,
                    text: "MacOS",
                    items: [
                        { text: "介绍", link: "/docs/developer/macos/default.md" },
                        {
                            text: "oh-my-zsh安装配置",
                            link: "/docs/developer/macos/1735967221/index.md",
                        },
                        {
                            text: "karabiner使用",
                            link: "/docs/developer/macos/1736428296/index.md",
                        },
                    ],
                },
            ],

            "/docs/developer/oam/": [
                {
                    aside: true,
                    text: "运维",
                    items: [
                        { text: "介绍", link: "/docs/developer/oam/default.md" },
                        {
                            text: "Nginx配置HTTPS",
                            link: "/docs/developer/oam/1729744028/index.md",
                        },
                        {
                            text: "glibc版本过低",
                            link: "/docs/developer/oam/1729789129/index.md",
                        },
                        {
                            text: "Linux清理虚拟设备",
                            link: "/docs/developer/oam/1734848858/index.md",
                        },
                        {
                            text: "浪潮切换UEFI到Legacy",
                            link: "/docs/developer/oam/1734849955/index.md",
                        },
                        {
                            text: "浪潮拆分PCIE卡",
                            link: "/docs/developer/oam/1734850939/index.md",
                        },
                        {
                            text: "Dell修改IPMI地址",
                            link: "/docs/developer/oam/1734851126/index.md",
                        },
                        {
                            text: "Dell远程介质重装",
                            link: "/docs/developer/oam/1734852238/index.md",
                        },
                        {
                            text: "categref心跳失败",
                            link: "/docs/developer/oam/1734856138/index.md",
                        },
                        {
                            text: "Docker守护进程错误",
                            link: "/docs/developer/oam/1734863558/index.md",
                        },
                        {
                            text: "CentOS反向打包RPM",
                            link: "/docs/developer/oam/1735038191/index.md",
                        },
                        {
                            text: "部署VictoriaMetrics集群",
                            link: "/docs/developer/oam/1735479737/index.md",
                        },
                        {
                            text: "介绍NAT类型",
                            link: "/docs/developer/oam/1735618274/index.md",
                        },
                        {
                            text: "部署NAT服务端",
                            link: "/docs/developer/oam/1735631477/index.md",
                        },
                        {
                            text: "MySQL8.0多线程优化",
                            link: "/docs/developer/oam/1736427395/index.md",
                        },
                    ],
                },
            ],

            "/docs/developer/python/": [
                {
                    aside: true,
                    text: "Python",
                    items: [
                        { text: "介绍", link: "/docs/developer/oam/default.md" },
                        {
                            text: "执行命令",
                            link: "/docs/developer/oam/1736681599/index.md",
                        },
                    ],
                },
            ],

            "/docs/tools/": [
                {
                    aside: true,
                    text: "工具分享",
                    items: [
                        { text: "介绍", link: "/docs/tools/default.md" },
                        { text: "Grapic", link: "/docs/tools/1729786919/index.md" },
                        { text: "JSON转结构体", link: "/docs/tools/1729755703/index.md" },
                        { text: "在线抠图工具", link: "/docs/tools/1729755712/index.md" },
                        { text: "密码管理器", link: "/docs/tools/1734930126/index.md" },
                    ],
                },
            ],
        },

        socialLinks: [{ icon: "github", link: "https://github.com/hyhacct" }],

        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2024-present Reverse",
        },
    },
});
