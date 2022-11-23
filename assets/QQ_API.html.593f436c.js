import{_ as e,r as t,o as l,c as p,a as n,b as s,d as c,e as i}from"./app.24fa6beb.js";const o={},d=n("h1",{id:"qq私有化部署文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#qq私有化部署文档","aria-hidden":"true"},"#"),s(" QQ私有化部署文档")],-1),r=n("h2",{id:"_1-下载go-cq",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-下载go-cq","aria-hidden":"true"},"#"),s(" 1. 下载go-cq")],-1),u={href:"https://github.com/Mrs4s/go-cqhttp",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="_2-配置服务" tabindex="-1"><a class="header-anchor" href="#_2-配置服务" aria-hidden="true">#</a> 2. 配置服务</h2><p>解压</p><blockquote><p>Windows下请使用自己熟悉的解压软件自行解压</p></blockquote><blockquote><p>Linux下在命令行中输入tar -xzvf [文件名] 使用</p></blockquote><p><strong>Windows 标准方法</strong></p><p>双击，根据提示生成运行脚本go-cqhttp_*.exe</p><p><code>[WARNING]: 尝试加载配置文件 config.yml 失败: 文件不存在 [INFO]: 默认配置文件已生成,请编辑 config.yml 后重启程序.</code></p><p>配置文件请参考下方config.yml</p><p>config.yml配置好后 再次双击运行脚本</p><p><code>[INFO]: 登录成功 欢迎使用: balabala</code></p><p>如出现需要认证的信息, 请自行认证设备。</p><p>此时, 基础配置完成</p><p><strong>Linux 标准方法</strong></p><p>通过 SSH 连接到服务器</p><p>cd到解压目录</p><p>输入 , 运行 <code>./go-cqhttp</code></p><p><code>[WARNING]: 尝试加载配置文件 config.yml 失败: 文件不存在 [INFO]: 默认配置文件已生成,请编辑 config.yml 后重启程序.</code></p><p><strong>配置config.yml</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>
<span class="token comment"># go-cqhttp 默认配置文件</span>

<span class="token key atrule">account</span><span class="token punctuation">:</span> <span class="token comment"># 账号相关</span>
  <span class="token key atrule">uin</span><span class="token punctuation">:</span>  <span class="token comment"># QQ账号</span>
  <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment"># 密码为空时使用扫码登录</span>
  <span class="token key atrule">encrypt</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>  <span class="token comment"># 是否开启密码加密</span>
  <span class="token key atrule">status</span><span class="token punctuation">:</span> <span class="token number">0</span>      <span class="token comment"># 在线状态 请参考 https://docs.go-cqhttp.org/guide/config.html#在线状态</span>
  <span class="token key atrule">relogin</span><span class="token punctuation">:</span> <span class="token comment"># 重连设置</span>
    <span class="token key atrule">delay</span><span class="token punctuation">:</span> <span class="token number">3</span>   <span class="token comment"># 首次重连延迟, 单位秒</span>
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">3</span>   <span class="token comment"># 重连间隔</span>
    <span class="token key atrule">max-times</span><span class="token punctuation">:</span> <span class="token number">0</span>  <span class="token comment"># 最大重连次数, 0为无限制</span>

  <span class="token comment"># 是否使用服务器下发的新地址进行重连</span>
  <span class="token comment"># 注意, 此设置可能导致在海外服务器上连接情况更差</span>
  <span class="token key atrule">use-sso-address</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">heartbeat</span><span class="token punctuation">:</span>
  <span class="token comment"># 心跳频率, 单位秒</span>
  <span class="token comment"># -1 为关闭心跳</span>
  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token key atrule">message</span><span class="token punctuation">:</span>
  <span class="token comment"># 上报数据类型</span>
  <span class="token comment"># 可选: string,array</span>
  <span class="token key atrule">post-format</span><span class="token punctuation">:</span> string
  <span class="token comment"># 是否忽略无效的CQ码, 如果为假将原样发送</span>
  <span class="token key atrule">ignore-invalid-cqcode</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># 是否强制分片发送消息</span>
  <span class="token comment"># 分片发送将会带来更快的速度</span>
  <span class="token comment"># 但是兼容性会有些问题</span>
  <span class="token key atrule">force-fragment</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># 是否将url分片发送</span>
  <span class="token key atrule">fix-url</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># 下载图片等请求网络代理</span>
  <span class="token key atrule">proxy-rewrite</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token comment"># 是否上报自身消息</span>
  <span class="token key atrule">report-self-message</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># 移除服务端的Reply附带的At</span>
  <span class="token key atrule">remove-reply-at</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># 为Reply附加更多信息</span>
  <span class="token key atrule">extra-reply-data</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token key atrule">output</span><span class="token punctuation">:</span>
  <span class="token comment"># 日志等级 trace,debug,info,warn,error</span>
  <span class="token key atrule">log-level</span><span class="token punctuation">:</span> warn
  <span class="token comment"># 是否启用 DEBUG</span>
  <span class="token key atrule">debug</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 开启调试模式</span>

<span class="token comment"># 默认中间件锚点</span>
<span class="token key atrule">default-middlewares</span><span class="token punctuation">:</span> <span class="token important">&amp;default</span>
  <span class="token comment"># 访问密钥, 强烈推荐在公网的服务器设置</span>
  <span class="token key atrule">access-token</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token comment"># 事件过滤器文件目录</span>
  <span class="token key atrule">filter</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token comment"># API限速设置</span>
  <span class="token comment"># 该设置为全局生效</span>
  <span class="token comment"># 原 cqhttp 虽然启用了 rate_limit 后缀, 但是基本没插件适配</span>
  <span class="token comment"># 目前该限速设置为令牌桶算法, 请参考:</span>
  <span class="token comment"># https://baike.baidu.com/item/%E4%BB%A4%E7%89%8C%E6%A1%B6%E7%AE%97%E6%B3%95/6597000?fr=aladdin</span>
  <span class="token key atrule">rate-limit</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否启用限速</span>
    <span class="token key atrule">frequency</span><span class="token punctuation">:</span> <span class="token number">1</span>  <span class="token comment"># 令牌回复频率, 单位秒</span>
    <span class="token key atrule">bucket</span><span class="token punctuation">:</span> <span class="token number">1</span>     <span class="token comment"># 令牌桶大小</span>

<span class="token key atrule">database</span><span class="token punctuation">:</span> <span class="token comment"># 数据库相关设置</span>
  <span class="token key atrule">leveldb</span><span class="token punctuation">:</span>
    <span class="token comment"># 是否启用内置leveldb数据库</span>
    <span class="token comment"># 启用将会增加10-20MB的内存占用和一定的磁盘空间</span>
    <span class="token comment"># 关闭将无法使用 撤回 回复 get_msg 等上下文相关功能</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment"># 连接服务列表</span>
<span class="token key atrule">servers</span><span class="token punctuation">:</span>
  <span class="token comment"># 添加方式，同一连接方式可添加多个，具体配置说明请查看文档</span>
  <span class="token comment">#- http: # http 通信</span>
  <span class="token comment">#- ws:   # 正向 Websocket</span>
  <span class="token comment">#- ws-reverse: # 反向 Websocket</span>
  <span class="token comment">#- pprof: #性能分析服务器</span>
  <span class="token comment"># HTTP 通信设置</span>
  <span class="token punctuation">-</span> <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token comment"># 服务端监听地址</span>
      <span class="token key atrule">host</span><span class="token punctuation">:</span> 127.0.0.1
      <span class="token comment"># 服务端监听端口</span>
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5700</span>
      <span class="token comment"># 反向HTTP超时时间, 单位秒</span>
      <span class="token comment"># 最小值为5，小于5将会忽略本项设置</span>
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">5</span>
      <span class="token key atrule">middlewares</span><span class="token punctuation">:</span>
        <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*default</span> <span class="token comment"># 引用默认中间件</span>
      <span class="token comment"># 反向HTTP POST地址列表</span>
      <span class="token key atrule">post</span><span class="token punctuation">:</span>
      <span class="token comment">#- url: &#39;&#39; # 地址</span>
      <span class="token comment">#  secret: &#39;&#39;           # 密钥</span>
      <span class="token comment">#- url: 127.0.0.1:5701 # 地址</span>
      <span class="token comment">#  secret: &#39;&#39;          # 密钥</span>
 
      



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次运行<code>./go-cqhttp</code></p><p><code>[INFO]: 登录成功 欢迎使用: balabala</code></p><p>如出现需要认证的信息, 请自行认证设备。</p><p>此时, 基础配置完成</p><h2 id="注意-将你配置的端口号在防火墙里面放行或者使用反向代理将你设置的端口绑定到域名" tabindex="-1"><a class="header-anchor" href="#注意-将你配置的端口号在防火墙里面放行或者使用反向代理将你设置的端口绑定到域名" aria-hidden="true">#</a> 注意:将你配置的端口号在防火墙里面放行或者使用反向代理将你设置的端口绑定到域名</h2><h2 id="注意-公网使用一定要配置token" tabindex="-1"><a class="header-anchor" href="#注意-公网使用一定要配置token" aria-hidden="true">#</a> 注意:公网使用一定要配置token</h2><h2 id="_3-twikoo配置" tabindex="-1"><a class="header-anchor" href="#_3-twikoo配置" aria-hidden="true">#</a> 3. twikoo配置</h2><p>在twikoo中QQ私有化API配置项填写如下内容</p><p>QQ号 <code>http://你的IP地址：端口号（或者域名）/send_private_msg?user_id=QQ号?token=你配置的token</code></p><p>QQ群 <code>http://你的IP地址：端口号（或者域名）/send_group_msg?token=你配置的token?group_id=群号</code></p><p>配置完成</p>`,30);function k(v,b){const a=t("ExternalLinkIcon");return l(),p("div",null,[d,r,n("p",null,[s("前往"),n("a",u,[s("go-cqhttp release"),c(a)]),s("下载对应系统版本。")]),m])}const y=e(o,[["render",k],["__file","QQ_API.html.vue"]]);export{y as default};
