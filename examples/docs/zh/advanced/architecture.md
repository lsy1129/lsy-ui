# 架构

## 概览


上图展示了 VuePress 的简要架构：

- Node App 会生成临时文件，包括布局、页面、路由等。
- Bundler 会将 Client App 和临时文件一起进行打包，就像处理一个普通的 Vue SPA 一样。

作为开发者，你必须要意识到 VuePress 分为两个主要部分： **Node App** 和 **Client App** ，这一点对于开发插件和主题来说都十分重要。

- 插件或者主题的入口文件会在 Node App 中被加载，因此它们需要使用 CommonJS 格式。
- 客户端文件会在 Client App 中被加载，也就是会被 Bundler 处理。比如布局、组件、App Setup 文件、App Enhance 文件等。它们最好使用 ESM 格式。

## 核心流程与 Hooks

上图展示了 VuePress 的核心流程以及 [插件 API](../reference/plugin-api.md) 的 Hooks ：