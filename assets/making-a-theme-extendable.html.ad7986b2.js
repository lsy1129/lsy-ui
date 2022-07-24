import{_ as p,r as o,o as c,c as l,b as s,d as t,w as e,e as n,a as i}from"./app.198bd9c2.js";const u={},r=s("h1",{id:"\u5F00\u53D1\u4E00\u4E2A\u53EF\u7EE7\u627F\u7684\u4E3B\u9898",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5F00\u53D1\u4E00\u4E2A\u53EF\u7EE7\u627F\u7684\u4E3B\u9898","aria-hidden":"true"},"#"),n(" \u5F00\u53D1\u4E00\u4E2A\u53EF\u7EE7\u627F\u7684\u4E3B\u9898")],-1),k=s("p",null,"\u6709\u65F6\u7528\u6237\u53EF\u80FD\u5E0C\u671B\u5BF9\u4E00\u4E2A\u4E3B\u9898\u8FDB\u884C\u4E00\u4E9B\u5C0F\u6539\u52A8\uFF0C\u4F46\u662F\u53C8\u4E0D\u60F3 Fork \u5E76\u4FEE\u6539\u6574\u4E2A\u9879\u76EE\u3002",-1),d=n("\u501F\u52A9\u4E8E "),v=n("\u4E3B\u9898 API"),m=n(" \uFF0C\u4F60\u53EF\u4EE5\u8BA9\u7528\u6237\u7EE7\u627F\u4F60\u7684\u4E3B\u9898\uFF0C\u5141\u8BB8\u7528\u6237\u5BF9\u4F60\u7684\u4E3B\u9898\u8FDB\u884C\u6539\u52A8\u3002"),g=n("\u4F60\u80AF\u5B9A\u5DF2\u7ECF\u77E5\u9053\u4E86\u5982\u4F55 "),h=n("\u7EE7\u627F\u9ED8\u8BA4\u4E3B\u9898"),b=n(" \u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u4ECB\u7ECD\u5982\u4F55\u8BA9\u4F60\u7684\u4E3B\u9898\u50CF\u9ED8\u8BA4\u4E3B\u9898\u4E00\u6837\u88AB\u7528\u6237\u7EE7\u627F\u3002"),_=i(`<h2 id="\u5E03\u5C40\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C40\u63D2\u69FD" aria-hidden="true">#</a> \u5E03\u5C40\u63D2\u69FD</h2><p>\u8FD9\u79CD\u65B9\u5F0F\u9700\u8981\u4F60\u6765\u51B3\u5B9A\u4E3B\u9898\u7684\u54EA\u4E9B\u90E8\u5206\u662F\u53EF\u4EE5\u88AB\u6269\u5C55\u7684\uFF0C\u5B83\u66F4\u9002\u5408\u7528\u4E8E\u4E00\u4E9B\u5E38\u89C1\u7684\u81EA\u5B9A\u4E49\u9700\u6C42\uFF0C\u6BD4\u5982\u9875\u7709\u6216\u9875\u811A\u3002</p><p>\u4F60\u53EA\u9700\u8981\u5728\u4F60\u7684\u5E03\u5C40\u6587\u4EF6\u4E2D\u63D0\u4F9B slots \uFF0C\u5E76\u544A\u8BC9\u7528\u6237\u5982\u4F55\u4F7F\u7528\u5B83\u4EEC\u5373\u53EF\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-theme-layout<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page-header<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page-footer<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u4EF6\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u522B\u540D" aria-hidden="true">#</a> \u7EC4\u4EF6\u522B\u540D</h2><p>\u8FD9\u79CD\u65B9\u5F0F\u9700\u8981\u4F60\u8003\u8651\u6E05\u695A\u4F60\u7684\u4E3B\u9898\u7684\u54EA\u4E9B\u7EC4\u4EF6\u53EF\u4EE5\u88AB\u66FF\u6362\uFF0C\u5E76\u4E14\u4F60\u9700\u8981\u5C06\u7EC4\u4EF6\u62C6\u5206\u5230\u5408\u9002\u7684\u7C92\u5EA6\u3002</p><p>\u9996\u5148\uFF0C\u4E3A\u4F60\u4E3B\u9898\u7684\u53EF\u66FF\u6362\u7EC4\u4EF6\u8BBE\u7F6E <code>alias</code> \u522B\u540D\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Theme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/core&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> fooTheme <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token operator">:</span> Theme <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;vuepress-theme-foo&#39;</span><span class="token punctuation">,</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4E3A\u53EF\u66FF\u6362\u7684\u7EC4\u4EF6\u8BBE\u7F6E\u522B\u540D</span>
      <span class="token string-property property">&#39;@theme/Navbar.vue&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;components/Navbar.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;@theme/Sidebar.vue&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;components/Sidebar.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u5728\u4F60\u7684\u4E3B\u9898\u4E2D\u901A\u8FC7\u522B\u540D\u6765\u4F7F\u7528\u8FD9\u4E9B\u7EC4\u4EF6\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">&#39;@theme/Navbar.vue&#39;</span>
<span class="token keyword">import</span> Sidebar <span class="token keyword">from</span> <span class="token string">&#39;@theme/Sidebar.vue&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-theme-layout<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Navbar</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Sidebar</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\uFF0C\u7528\u6237\u5728\u7EE7\u627F\u6216\u4F7F\u7528\u4F60\u7684\u4E3B\u9898\u65F6\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u8986\u76D6 <code>alias</code> \u6765\u66FF\u6362\u7279\u5B9A\u7684\u7EC4\u4EF6\u4E86\u3002</p>`,11);function f(y,q){const a=o("RouterLink");return c(),l("div",null,[r,k,s("p",null,[d,t(a,{to:"/zh/reference/theme-api.html"},{default:e(()=>[v]),_:1}),m]),s("p",null,[g,t(a,{to:"/zh/reference/default-theme/extending.html"},{default:e(()=>[h]),_:1}),b]),_])}var w=p(u,[["render",f],["__file","making-a-theme-extendable.html.vue"]]);export{w as default};