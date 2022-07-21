import{_ as p,r as o,o as c,c as i,b as s,d as t,w as e,e as n,a as l}from"./app.b236232a.js";const u={},r=s("h1",{id:"\u6DFB\u52A0\u989D\u5916\u9875\u9762",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6DFB\u52A0\u989D\u5916\u9875\u9762","aria-hidden":"true"},"#"),n(" \u6DFB\u52A0\u989D\u5916\u9875\u9762")],-1),d=s("p",null,"\u6709\u65F6\u4F60\u53EF\u80FD\u5E0C\u671B\u5728\u4E0D\u521B\u5EFA Markdown \u6587\u4EF6\u7684\u60C5\u51B5\u4E0B\u6DFB\u52A0\u4E00\u4E9B\u989D\u5916\u7684\u9875\u9762\u3002",-1),k=n("\u6211\u4EEC\u53EF\u4EE5\u501F\u52A9\u4E8E "),m=n("\u63D2\u4EF6 API"),v=n(" \u548C "),h=n("Node API"),_=n(" \u6765\u8F7B\u677E\u5B9E\u73B0\u3002"),b=l(`<h2 id="\u6DFB\u52A0\u9ED8\u8BA4\u7684\u4E3B\u9875" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u9ED8\u8BA4\u7684\u4E3B\u9875" aria-hidden="true">#</a> \u6DFB\u52A0\u9ED8\u8BA4\u7684\u4E3B\u9875</h2><p>\u4F5C\u4E3A\u4E00\u4E2A\u4E3B\u9898\u4F5C\u8005\uFF0C\u4F60\u53EF\u80FD\u4E0D\u60F3\u8981\u6C42\u7528\u6237\u5FC5\u987B\u521B\u5EFA\u4E00\u4E2A <code>/README.md</code> \u6587\u4EF6\u6765\u4F5C\u4E3A\u4E3B\u9875\uFF0C\u4F46\u662F\u4F60\u5E0C\u671B\u63D0\u4F9B\u4E00\u4E2A\u9ED8\u8BA4\u7684\u4E3B\u9875\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/core&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521D\u59CB\u5316\u4E4B\u540E\uFF0C\u6240\u6709\u7684\u9875\u9762\u5DF2\u7ECF\u52A0\u8F7D\u5B8C\u6BD5</span>
  <span class="token keyword">async</span> <span class="token function">onInitialized</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u4E3B\u9875\u4E0D\u5B58\u5728</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>app<span class="token punctuation">.</span>pages<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>path <span class="token operator">!==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u4E3B\u9875</span>
      <span class="token keyword">const</span> homepage <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createPage</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8BBE\u7F6E frontmatter</span>
        frontmatter<span class="token operator">:</span> <span class="token punctuation">{</span>
          layout<span class="token operator">:</span> <span class="token string">&#39;Layout&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8BBE\u7F6E markdown \u5185\u5BB9</span>
        content<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\
# \u6B22\u8FCE\u6765\u5230 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>app<span class="token punctuation">.</span>options<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">

\u8FD9\u662F\u9ED8\u8BA4\u4E3B\u9875
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// \u628A\u5B83\u6DFB\u52A0\u5230 \`app.pages\`</span>
      app<span class="token punctuation">.</span>pages<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>homepage<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function g(f,y){const a=o("RouterLink");return c(),i("div",null,[r,d,s("p",null,[k,t(a,{to:"/zh/reference/plugin-api.html"},{default:e(()=>[m]),_:1}),v,t(a,{to:"/zh/reference/node-api.html"},{default:e(()=>[h]),_:1}),_]),b])}var x=p(u,[["render",g],["__file","adding-extra-pages.html.vue"]]);export{x as default};
