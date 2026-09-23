import { defineConfig } from "vitepress";

// DSH-Guild 文档站
// 部署在 Cloudflare Pages（根路径），例如 https://dsh-guild.pages.dev/
// 若改为绑定自定义域，无需改动 base —— 站点始终挂在域名根路径。
export default defineConfig({
  base: "/",
  lang: "zh-CN",
  title: "DSH-Guild",
  description:
    "把「社区」装进 DSH —— 在 DeepSeek Harness 里直接聊天、提问求助、发通知。",
  cleanUrls: true,
  lastUpdated: true,

  // 站内死链直接让构建失败，避免文档站带病上线
  ignoreDeadLinks: false,

  themeConfig: {
    logo: "/logo.svg",

    // 导航栏左上角的品牌名，全站统一显示
    siteTitle: "DSH-Guild",

    nav: [
      { text: "使用指南", link: "/guide/", activeMatch: "^/guide/" },
      {
        text: "参考手册",
        link: "/reference/features",
        activeMatch: "^/reference/",
      },
      { text: "开发与部署", link: "/dev/development", activeMatch: "^/dev/" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "使用指南",
          items: [
            { text: "指南总览", link: "/guide/" },
            { text: "安装与首次使用", link: "/guide/install" },
          ],
        },
        {
          text: "场景",
          items: [
            { text: "插件作者管理社区", link: "/guide/scenario-plugin-author" },
            { text: "团队内部协作", link: "/guide/scenario-team" },
            { text: "会话分享广场", link: "/guide/scenario-share-square" },
          ],
        },
      ],

      "/reference/": [
        {
          text: "参考手册",
          items: [
            { text: "功能清单", link: "/reference/features" },
            { text: "权限与角色", link: "/reference/permissions" },
            { text: "限额与边界规则", link: "/reference/limits" },
          ],
        },
      ],

      "/dev/": [
        {
          text: "开发与部署",
          items: [
            { text: "参与开发", link: "/dev/development" },
            { text: "自部署 Server", link: "/dev/deploy" },
          ],
        },
      ],
    },

    outline: { level: [2, 3], label: "本页目录" },

    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "搜索文档", buttonAriaLabel: "搜索文档" },
          modal: {
            noResultsText: "没有找到相关结果",
            resetButtonTitle: "清除查询",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

    docFooter: { prev: "上一篇", next: "下一篇" },
    darkModeSwitchLabel: "外观",
    sidebarMenuLabel: "目录",
    returnToTopLabel: "回到顶部",
    lastUpdated: { text: "最后更新于" },

    footer: {
      message: "基于 MIT 协议开源",
      copyright: "DSH-Guild",
    },
  },
});
