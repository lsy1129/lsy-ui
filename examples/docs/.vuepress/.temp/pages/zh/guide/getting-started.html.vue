<template><div><h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1>
<h2 id="依赖环境" tabindex="-1"><a class="header-anchor" href="#依赖环境" aria-hidden="true">#</a> 依赖环境</h2>
<ul>
<li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js v14+<ExternalLinkIcon/></a></li>
<li><a href="https://classic.yarnpkg.com/zh-Hans/" target="_blank" rel="noopener noreferrer">Yarn v1 classic<ExternalLinkIcon/></a> （可选）</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>使用 <a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer">pnpm<ExternalLinkIcon/></a> 时，你可能需要安装 <code v-pre>vue</code> 和 <code v-pre>@vuepress/client</code> 作为 peer-dependencies ，即 <code v-pre>pnpm add -D vue @vuepress/client@next</code> 。</li>
<li>使用 <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">yarn 2<ExternalLinkIcon/></a> 时，你需要在 <a href="https://yarnpkg.com/configuration/yarnrc#nodeLinker" target="_blank" rel="noopener noreferrer"><code v-pre>.yarnrc.yml</code><ExternalLinkIcon/></a> 文件中设置 <code v-pre>nodeLinker: 'node-modules'</code> 。</li>
</ul>
</div>
<h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装" aria-hidden="true">#</a> 手动安装</h2>
<p>这一章节会帮助你从头搭建一个简单的 VuePress 文档网站。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。</p>
<ul>
<li><strong>步骤1</strong>: 创建并进入一个新目录</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> vuepress-starter
<span class="token builtin class-name">cd</span> vuepress-starter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>步骤2</strong>: 初始化项目</li>
</ul>
</div></template>
