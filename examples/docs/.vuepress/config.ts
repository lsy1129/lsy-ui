import { defaultTheme, defineUserConfig } from 'vuepress'

import { navbarZh, sidebarZh } from './configs'

const blockDemo = require("./components");

export default defineUserConfig({
  base: '/lsy-ui/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器',
    },
  },
  
  plugins: [
    [
      blockDemo({
        path: __dirname,
      }),
    ]
  ],


  head: [//额外的需要被注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/images/logo.png" }]
  ],

  theme: defaultTheme({// 主题设置
    repo: 'https://github.com/bobo456123/VuepressDoc.git',
    docsDir: 'docs',
    locales: {
        '/': {
          // navbar
            navbar: navbarZh,
            selectLanguageName: '简体中文',
            selectLanguageText: '选择语言',
            selectLanguageAriaLabel: '选择语言',
            // sidebar
            sidebar: sidebarZh,
            // page meta
            editLinkText: '在 GitHub 上编辑此页',
            lastUpdatedText: '上次更新',
            contributorsText: '贡献者',
            // custom containers
            tip: '提示',
            warning: '注意',
            danger: '警告',
            // 404 page
            notFound: [
            '这里什么都没有',
            '我们怎么到这来了？',
            '这是一个 404 页面',
            '看起来我们进入了错误的链接',
            ],
            backToHome: '返回首页',
            // a11y
            openInNewWindow: '在新窗口打开',
            toggleColorMode: '切换颜色模式',
            toggleSidebar: '切换侧边栏',
        },
    }
  })
})