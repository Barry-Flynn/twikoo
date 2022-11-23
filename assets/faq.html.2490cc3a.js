import{_ as o}from"./katex.dc3a65d6.js";import{_ as p,r as l,o as c,c as r,a as n,b as s,d as t,e}from"./app.24fa6beb.js";const i={},u=n("h1",{id:"常见问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#常见问题","aria-hidden":"true"},"#"),s(" 常见问题")],-1),d=n("h2",{id:"如何修改头像",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#如何修改头像","aria-hidden":"true"},"#"),s(" 如何修改头像？")],-1),k={href:"https://cravatar.cn",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,"访客还可以通过输入数字 QQ 邮箱地址，使用 QQ 头像发表评论。",-1),_=n("h2",{id:"如何修改、重置管理员密码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#如何修改、重置管理员密码","aria-hidden":"true"},"#"),s(" 如何修改、重置管理员密码？")],-1),m={href:"https://console.cloud.tencent.com/tcb/database/collection/config",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"data/db.json.1",-1),v=n("h2",{id:"如何获得管理面板的私钥文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#如何获得管理面板的私钥文件","aria-hidden":"true"},"#"),s(" 如何获得管理面板的私钥文件？")],-1),b={href:"https://console.cloud.tencent.com/tcb/env/login",target:"_blank",rel:"noopener noreferrer"},f=n("li",null,"用文本编辑器打开私钥文件，复制全部内容",-1),y=n("li",null,"点击评论窗口的“小齿轮”图标，粘贴私钥文件内容，并设置管理员密码",-1),x=e(`<h2 id="如何开启文章访问量统计" tabindex="-1"><a class="header-anchor" href="#如何开启文章访问量统计" aria-hidden="true">#</a> 如何开启文章访问量统计？</h2><p>您可以在需要展示文章访问量的地方添加：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>twikoo_visitors<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>来展示访问量。暂不支持全站访问量统计。</p><h2 id="如何启用-katex-支持" tabindex="-1"><a class="header-anchor" href="#如何启用-katex-支持" aria-hidden="true">#</a> 如何启用 Katex 支持？</h2>`,5),q={href:"https://katex.org/docs/browser.html",target:"_blank",rel:"noopener noreferrer"},w=e(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">integrity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X<span class="token punctuation">&quot;</span></span> <span class="token attr-name">crossorigin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anonymous<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">integrity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">crossorigin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anonymous<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">integrity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa<span class="token punctuation">&quot;</span></span> <span class="token attr-name">crossorigin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anonymous<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>载入后，您可以发送 <code>$$c = \\pm\\sqrt{a^2 + b^2}$$</code> 测试效果。</p><p><img src="`+o+'" alt="katex"></p>',3),A=n("code",null,"twikoo.init",-1),T={href:"https://katex.org/docs/autorender.html",target:"_blank",rel:"noopener noreferrer"},I=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>twikoo<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">envId</span><span class="token operator">:</span> <span class="token string">&#39;您的环境id&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#tcomment&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">katex</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">delimiters</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;$$&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;$$&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;$&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;$&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;\\\\(&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;\\\\)&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&#39;\\\\[&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&#39;\\\\]&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">throwOnError</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何配置反垃圾" tabindex="-1"><a class="header-anchor" href="#如何配置反垃圾" aria-hidden="true">#</a> 如何配置反垃圾？</h2><h3 id="使用腾讯云内容安全服务" tabindex="-1"><a class="header-anchor" href="#使用腾讯云内容安全服务" aria-hidden="true">#</a> 使用腾讯云内容安全服务</h3><p>Twikoo 支持接入腾讯云文本内容检测，使用深度学习技术，识别涉黄、涉政、涉恐等有害内容，同时支持用户配置词库，打击自定义的违规文本。</p><p>腾讯云文本内容检测是付费服务，提供 1 个月的免费试用，之后价格为 25 元/万条。如果您对反垃圾评论要求不高，也可以使用免费的 Akismet。</p><p>如何申请腾讯云文本内容检测</p>`,6),E={href:"https://console.cloud.tencent.com/cms/text/overview",target:"_blank",rel:"noopener noreferrer"},N={href:"https://console.cloud.tencent.com/cam",target:"_blank",rel:"noopener noreferrer"},M=n("li",null,"输入用户名，访问方式选择“编程访问”，用户权限取消“AdministratorAccess”，只勾选“QcloudCMSFullAccess”",-1),j=n("li",null,"点击“创建用户”",-1),K=n("li",null,"复制“成功新建用户”页面的“SecretId”和“SecretKey”，到 Twikoo 管理面板“反垃圾”模块中配置",-1),C=n("li",null,"测试反垃圾效果",-1),O={href:"https://console.cloud.tencent.com/cms/text/lib",target:"_blank",rel:"noopener noreferrer"},D=n("h3",{id:"使用-akismet-反垃圾服务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用-akismet-反垃圾服务","aria-hidden":"true"},"#"),s(" 使用 Akismet 反垃圾服务")],-1),L=n("p",null,"Akismet (Automattic Kismet) 是应用广泛的一个垃圾留言过滤系统，其作者是大名鼎鼎的 WordPress 创始人 Matt Mullenweg，Akismet 也是 WordPress 默认安装的插件，其使用非常广泛，设计目标便是帮助博客网站来过滤垃圾留言。",-1),S={href:"https://akismet.com",target:"_blank",rel:"noopener noreferrer"},V=n("li",null,"选择 Akismet Personal 订阅，复制得到的 Akismet API Key，到 Twikoo 管理面板“反垃圾”模块中配置",-1),$=n("h3",{id:"如何测试-akismet-反垃圾配置是否生效",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#如何测试-akismet-反垃圾配置是否生效","aria-hidden":"true"},"#"),s(" 如何测试 Akismet 反垃圾配置是否生效？")],-1),G=n("p",null,[s("请填写 "),n("code",null,"viagra-test-123"),s(" 作为昵称，或填写 "),n("code",null,"akismet-guaranteed-spam@example.com"),s(" 作为邮箱，发表评论，这条评论将一定会被视为垃圾评论。")],-1),J=n("p",null,"需要注意的是，由于 Akismet 服务响应速度较慢（大约 6 秒），影响用户体验，Twikoo 采取 “先放行，后检测” 的策略，垃圾评论会在发表后短暂可见。",-1),Q=n("h2",{id:"登录管理面板遇到错误-auth-invalid-custom-login-ticket",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#登录管理面板遇到错误-auth-invalid-custom-login-ticket","aria-hidden":"true"},"#"),s(" 登录管理面板遇到错误 AUTH_INVALID_CUSTOM_LOGIN_TICKET")],-1),W=n("br",null,null,-1),B={href:"https://console.cloud.tencent.com/tcb/database/collection/config",target:"_blank",rel:"noopener noreferrer"},U=n("h2",{id:"收不到提醒邮件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#收不到提醒邮件","aria-hidden":"true"},"#"),s(" 收不到提醒邮件？")],-1),P=n("p",null,"如果是 Vercel 部署的云函数，请配置国外邮件服务商，避免被邮件服务商判定为垃圾邮件行为。如果是其他原因，请前往 Twikoo 管理面板，找到邮件测试功能，输入个人邮箱，根据测试结果排查原因。",-1),Z=n("p",null,"为了避免频繁检查邮箱带来的性能问题，邮件配置有 10 分钟左右的缓存，如果确定配置没有问题，但测试失败，可以等待 10 分钟后再测试。",-1),F=n("p",null,"由于博主发表评论时，不会通知博主，如果您想实际测试通知功能，请注销管理面板后用非博主邮箱发表或回复评论。",-1),Y=n("h2",{id:"vercel、私有部署无法上传图片",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vercel、私有部署无法上传图片","aria-hidden":"true"},"#"),s(" Vercel、私有部署无法上传图片？")],-1),X=n("p",null,"腾讯云环境自带云存储，所以腾讯云环境下可以直接上传图片，图片保存在云存储中。然而 Vercel 环境没有，上传图片功能依赖第三方图床，请在管理面板中配置图床，Twikoo 支持以下图床：",-1),H=n("thead",null,[n("tr",null,[n("th",null,"图床"),n("th",null,"地址"),n("th",null,"特点")])],-1),R=n("tr",null,[n("td",null,"qcloud"),n("td",null,"无"),n("td",null,"腾讯云环境自带，可在云开发 - 云存储中查看")],-1),z=n("tr",null,[n("td",null,"7bu"),n("td",null,"https://7bu.top"),n("td",null,"去不图床，由杜老师提供支持，无免费套餐")],-1),nn=n("td",null,"smms",-1),sn=n("td",null,"https://sm.ms",-1),an=n("code",null,"IMAGE_CDN_TOKEN",-1),tn={href:"https://sm.ms/home/apitoken",target:"_blank",rel:"noopener noreferrer"},en={href:"https://www.lsky.pro",target:"_blank",rel:"noopener noreferrer"},on=n("td",null,"私有部署",-1),pn=n("code",null,"IMAGE_CDN",-1),ln=n("code",null,"https://7bu.top",-1),cn=n("code",null,"IMAGE_CDN_TOKEN",-1),rn={href:"https://dusays.com/454/",target:"_blank",rel:"noopener noreferrer"},un=n("code",null,"1|1bJbwlqBfnggmOMEZqXT5XusaIwqiZjCDs7r1Ob5",-1),dn=n("h2",{id:"私有部署能连接自己的数据库吗",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#私有部署能连接自己的数据库吗","aria-hidden":"true"},"#"),s(" 私有部署能连接自己的数据库吗？")],-1),kn=n("p",null,"不能。私有部署不需要连接外部数据库，数据存储在启动 twikoo 时所在目录下的 data 目录，您可以直接复制该目录以完成数据备份。",-1),hn=n("p",null,[s("twikoo 私有部署版使用内置数据库。如果连接外部数据库，会增加部署难度，导致诸如 "),n("em",null,"连接字符串不会配置、服务器内存不足、数据库版本不兼容、高 ping、连接不稳定"),s(" 等麻烦事。")],-1),_n=n("p",null,"twikoo 内置的数据库为 LokiJS 数据库，支持的数据库容量大约为 1 GB。",-1);function mn(gn,vn){const a=l("ExternalLinkIcon");return c(),r("div",null,[u,d,n("p",null,[s("请前往 "),n("a",k,[s("https://cravatar.cn"),t(a)]),s(" 通过邮箱注册并设定头像，评论时，请留下相同的邮箱。")]),h,_,n("p",null,[s("腾讯云请前往"),n("a",m,[s("云开发控制台"),t(a)]),s("，Vercel 请前往 MongoDB，私有部署请直接编辑 "),g,s("，编辑配置，删除 config.ADMIN_PASS 配置项，然后前往 Twikoo 管理面板重新设置密码。")]),v,n("ol",null,[n("li",null,[s("进入"),n("a",b,[s("环境-登录授权"),t(a)]),s("，点击“自定义登录”右边的“私钥下载”，下载私钥文件")]),f,y]),x,n("p",null,[s("Twikoo 支持 Katex 公式，但为了限制 Twikoo 的包大小，Twikoo 没有内置完整的 Katex，您需要"),n("a",q,[s("在页面中额外加载 katex.js"),t(a)]),s("。")]),w,n("p",null,[s("您还可以在 "),A,s(" 时传入自定义 katex 配置，详细配置请查看 "),n("a",T,[s("Katex Auto-render Extension"),t(a)]),s("。")]),I,n("ol",null,[n("li",null,[s("访问"),n("a",E,[s("腾讯云控制台-文本内容安全"),t(a)]),s("，开通文本内容安全服务")]),n("li",null,[s("访问"),n("a",N,[s("腾讯云控制台-用户列表"),t(a)]),s("，点击新建用户，点击快速创建")]),M,j,K,C]),n("p",null,[s("成功后，站长可以在"),n("a",O,[s("腾讯云控制台-自定义库管理"),t(a)]),s("配置自定义文本内容过滤。")]),D,L,n("ol",null,[n("li",null,[s("注册 "),n("a",S,[s("akismet.com"),t(a)])]),V]),$,G,J,Q,n("p",null,[s("一般是配置好登录私钥之后，又重新下载了登录私钥，导致之前配置的登录私钥失效了。"),W,s(" 解决方法：到"),n("a",B,[s("云开发控制台"),t(a)]),s("，数据库，删掉 config，然后重新配置私钥。")]),U,P,Z,F,Y,X,n("table",null,[H,n("tbody",null,[R,z,n("tr",null,[nn,sn,n("td",null,[s("SMMS 图床，有免费套餐，请自行注册账号，"),an,s(" 可在 "),n("a",tn,[s("Dashboard"),t(a)]),s(" 中获取")])]),n("tr",null,[n("td",null,[n("a",en,[s("lsky-pro"),t(a)])]),on,n("td",null,[s("兰空图床 2.0 版本，"),pn,s(" 请配置图床首页 URL 地址（如 "),ln,s("），"),cn,s(" 获取方式请参考教程 "),n("a",rn,[s("杜老师说图床：新版本去不图床 Token 的获取与清空"),t(a)]),s("，获取到的 token 格式应为 "),un,s("）")])])])]),dn,kn,hn,_n])}const yn=p(i,[["render",mn],["__file","faq.html.vue"]]);export{yn as default};
