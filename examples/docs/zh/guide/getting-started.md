# 快速上手

## 依赖环境

- [Node.js v14+](https://nodejs.org/)
- [Yarn v1 classic](https://classic.yarnpkg.com/zh-Hans/) （可选）

::: tip
- 使用 [pnpm](https://pnpm.io/zh/) 时，你可能需要安装 `vue` 和 `@vuepress/client` 作为 peer-dependencies ，即 `pnpm add -D vue @vuepress/client@next` 。
- 使用 [yarn 2](https://yarnpkg.com/) 时，你需要在 [`.yarnrc.yml`](https://yarnpkg.com/configuration/yarnrc#nodeLinker) 文件中设置 `nodeLinker: 'node-modules'` 。
:::

## 手动安装

这一章节会帮助你从头搭建一个简单的 VuePress 文档网站。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。

- **步骤1**: 创建并进入一个新目录

```bash
mkdir vuepress-starter
cd vuepress-starter
```

- **步骤2**: 初始化项目