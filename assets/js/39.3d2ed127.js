(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{436:function(t,a,e){"use strict";e.r(a);var r=e(2),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/jpeg/375413/1650185039960-076d6b93-498f-413b-b8a5-b2a32dc54b98.jpeg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_1-xss-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-xss-攻击"}},[t._v("#")]),t._v(" 1 XSS 攻击")]),t._v(" "),a("p",[t._v("XSS 攻击即跨站点脚本攻击（Cross SiteScript），指黑客通过篡改网页，注入恶意 HTML 脚本，在用户浏览网页时，控制用户浏览器进行恶意操作的一种攻击方式")]),t._v(" "),a("h3",{attrs:{id:"反射型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反射型"}},[t._v("#")]),t._v(" 反射型")]),t._v(" "),a("p",[t._v("常见的 XSS 攻击类型有两种，一种是反射型，攻击者诱使用户点击一个恶意脚本的链接，达到攻击的工地，如下图所示。上面提到的新浪微博攻击就是一种反射型 XSS 攻击。攻击者发布的微博有一个含有恶意脚本的 URL，用户点击该 URL ，脚本会自动关注攻击者的新浪微博 ID，发布含有恶意脚本 URL 的微博，攻击就被扩散了\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1650183570076-408bb79d-dfcf-462e-a9de-6d63ebdf4d5e.png#clientId=u8994079a-fcd4-4&from=paste&height=664&id=u72fe85b2&name=image.png&originHeight=664&originWidth=1386&originalType=binary&ratio=1&rotation=0&showTitle=false&size=435084&status=done&style=none&taskId=ud070970a-9f57-46a3-8568-89762acbae7&title=&width=1386",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"持久性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持久性"}},[t._v("#")]),t._v(" 持久性")]),t._v(" "),a("p",[t._v("另外一种 XSS 攻击是持久性 XSS 攻击，黑客提交含有恶意脚本的请求，保存在被攻击的 Web 站点的数据库中，用户浏览网页时，恶意脚本被包含在正常页面中，达到攻击的目的，如下图所示，此种攻击经常使用在论坛、博客等 Web 应用中：\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1650183711040-3dad3306-44a0-47fd-b03f-c5e711e977bf.png#clientId=u5688d03f-29b3-4&from=paste&height=1130&id=u2b4a6e91&name=image.png&originHeight=1130&originWidth=1360&originalType=binary&ratio=1&rotation=0&showTitle=false&size=555548&status=done&style=none&taskId=uaa2e5fda-e955-4199-bbd3-141a2cfbfef&title=&width=1360",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"如何应对"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何应对"}},[t._v("#")]),t._v(" 如何应对")]),t._v(" "),a("h4",{attrs:{id:"消毒"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消毒"}},[t._v("#")]),t._v(" 消毒")]),t._v(" "),a("p",[t._v("XSS 攻击者一般都是通过在请求中嵌入恶意脚本达到攻击的目的，这些脚本是一般用户输入中不使用的，如果进行过滤和消毒处理，即对某些 html 危险字符转移，如“>”转义为“>”、“<”转义为“<”等，就可以防止大部分攻击。为了避免对不必要的内容错误转义，如“3<5”中的“<”需要进行文本匹配后在转义，如“<img src=”这样上下文中的“<”才转义。事实上，消毒几乎是所有网站最必备的 XSS 防攻击手段")]),t._v(" "),a("h4",{attrs:{id:"httponly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httponly"}},[t._v("#")]),t._v(" HttpOnly")]),t._v(" "),a("p",[t._v("最早由微软提出，即浏览器禁止页面 JavaScript 访问带有 HttpOnly 属性的 Cookie。HttpOnly 并不是直接对抗 XSS 攻击的，而是防止 XSS 攻击者窃取 Cookie。对于存放敏感信息的 Cookie，如用户认证信息等，可通过对该 Cookie 添加 HttpOnly 属性，避免被攻击脚本窃取")]),t._v(" "),a("h2",{attrs:{id:"_2-注入攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-注入攻击"}},[t._v("#")]),t._v(" 2 注入攻击")]),t._v(" "),a("h3",{attrs:{id:"sql-注入攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-注入攻击"}},[t._v("#")]),t._v(" SQL 注入攻击")]),t._v(" "),a("p",[t._v("注入攻击主要有两种形式， SQL 注入攻击和 OS 注入攻击。SQL 注入攻击的原理如下图所示。攻击者在HTTP 请求中注入恶意 SQL 命令（drop table users），服务器用请求参数构造数据库 SQL 命令时，恶意SQL 被一起构造，并在数据库中执行\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1650184144776-3d13682c-2d92-46a2-b3d4-5323abf85ae9.png#clientId=u5688d03f-29b3-4&from=paste&height=632&id=u42678899&name=image.png&originHeight=632&originWidth=1106&originalType=binary&ratio=1&rotation=0&showTitle=false&size=318882&status=done&style=none&taskId=uc36dd2df-95dc-406d-98db-67ecb4d6081&title=&width=1106",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"如何应对-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何应对-2"}},[t._v("#")]),t._v(" 如何应对")]),t._v(" "),a("h4",{attrs:{id:"消毒-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消毒-2"}},[t._v("#")]),t._v(" 消毒")]),t._v(" "),a("p",[t._v("和防 XSS 攻击一样，请求参数消毒是一种比较简单粗暴又有效的手段。通过正则匹配，过滤请求数据中可能注入的 SQL，如“drop table”、“\\b(?:update\\b."),a("em",[t._v("?\\bset|delete\\b\\W")]),t._v("?\\bfrom)\\b”等。")]),t._v(" "),a("h4",{attrs:{id:"参数绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数绑定"}},[t._v("#")]),t._v(" 参数绑定")]),t._v(" "),a("p",[t._v("使用预编译手段，绑定参数是最好的防 SQL 注入方法。目前许多数据访问层框架，如 IBatis，Hibernate等，都实现 SQL 预编译和参数绑定，攻击者的恶意 SQL 会被当作 SQL 的参数，而不是 SQL 命令被执行")]),t._v(" "),a("h2",{attrs:{id:"_3-csrf-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-csrf-攻击"}},[t._v("#")]),t._v(" 3 CSRF 攻击")]),t._v(" "),a("p",[t._v("CSRF（Cross Site Request Forgery，跨站点请求伪造），攻击者通过跨站请求，以合法用户的身份进行非法操作，如转账交易、发表评论等，如下图所示。CSRF 的主要手法是利用跨站请求，在用户不知情的情况下，以用户的身份伪造请求。其核心是利用了浏览器 Cookie 或服务器 Session 策略，盗取用户身份\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1650184403729-9e9cb46a-8cbe-4625-a59b-626eb7905770.png#clientId=u98f7b471-bd6e-4&from=paste&height=802&id=udbc88908&name=image.png&originHeight=802&originWidth=1082&originalType=binary&ratio=1&rotation=0&showTitle=false&size=405238&status=done&style=none&taskId=u1eab5029-4a25-44a1-802f-20f4497c19b&title=&width=1082",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"如何应对-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何应对-3"}},[t._v("#")]),t._v(" 如何应对")]),t._v(" "),a("h4",{attrs:{id:"表单-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单-token"}},[t._v("#")]),t._v(" 表单 Token")]),t._v(" "),a("p",[t._v("CSRF 是一个伪造用户请求的操作，所以需要构造用户请求的所有参数才可以。表单 Token 通过在请求参数中增加随机数的办法来阻止攻击者获得所有请求参数：在页面表单中增加一个随机数作为 Token，每次响应野米艾尼的 Token 都不相同，从正常页面提交的请求会包含 Token 值，而伪造的请求无法获得该值，而伪造的请求无法获得该值，服务器检查请求参数中 Token 的值是否存在并且正确以确定请求提交者是否合法")]),t._v(" "),a("h4",{attrs:{id:"验证码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证码"}},[t._v("#")]),t._v(" 验证码")]),t._v(" "),a("p",[t._v("相对说来，验证码则更加简单有效，即请求提交时，需要用户输入验证码，以避免在用户不知情的情况下被攻击者伪造请求。但是输入验证码是一个糟糕的用户体验，所以请在必要时使用，如支付交易等关键页面")]),t._v(" "),a("h2",{attrs:{id:"_4-其他攻击方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-其他攻击方式"}},[t._v("#")]),t._v(" 4 其他攻击方式")]),t._v(" "),a("p",[t._v("除了上面提到的常见攻击，还有一些漏洞也常被黑客利用")]),t._v(" "),a("h4",{attrs:{id:"error-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-code"}},[t._v("#")]),t._v(" Error Code")]),t._v(" "),a("p",[t._v("也称作错误回显，许多Web服务器默认是打开异常信息输出的，即服务器端未处理的异常堆栈信息会直接输出到客户端浏览器，这种方式虽然对程序调试和错误报告有好处，但同时也给黑客造成可乘之机。通过故意制造非法输入，使系统运行时出错，获得异常信息，从而寻找系统漏洞进行攻击。防御手段也很简单，通过配置 Web 服务器参数，跳转 500 页面（HTTP 响应码 500 表示服务器内部错误）到专门的错误页面即可，Web 应用常用的 MVC 框架也有这个功能")]),t._v(" "),a("h4",{attrs:{id:"html注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html注释"}},[t._v("#")]),t._v(" HTML注释")]),t._v(" "),a("p",[t._v("为调试程序方便或其他不恰当的原因，有时程序开发人员会在 PHP、JSP 等服务器页面程序中使用 HTML注释语法进行程序注释，这些 HTML 注释就会显示在客户端浏览器，给黑客造成攻击便利。程序最终发布前需要进行代码 review 或自动扫描，避免 HTML 注释漏洞。")]),t._v(" "),a("h4",{attrs:{id:"文件上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件上传"}},[t._v("#")]),t._v(" 文件上传")]),t._v(" "),a("p",[t._v("一般网站都会有文件上传功能，设置头像、分享视频、上传附件等。如果上传的是可执行的程序，并通过该程序获得服务器端命令执行能力，那么攻击者几乎可以在服务器上为所欲为，并以此为跳板攻击集群环境的其他机器。最有效的防御手段是设置上传文件白名单，只允许上传可靠的文件类型。此外还可以修改文件名、使用专门的存储等手段，保护服务器免受上传文件攻击")]),t._v(" "),a("h4",{attrs:{id:"路径遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径遍历"}},[t._v("#")]),t._v(" 路径遍历")]),t._v(" "),a("p",[t._v("攻击者在请求的 URL 中使用相对路径，遍历系统未开放的目录和文件。防御方法主要是将 JS、CSS 等资源文件部署在独立服务器、使用独立域名，其他文件不使用静态 URL 访问，动态参数不包含文件路径信息")]),t._v(" "),a("h2",{attrs:{id:"_5-防范手段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-防范手段"}},[t._v("#")]),t._v(" 5 防范手段")]),t._v(" "),a("h3",{attrs:{id:"防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防火墙"}},[t._v("#")]),t._v(" 防火墙")]),t._v(" "),a("p",[t._v("网站面临的安全问题复杂多样，各种攻击手段日新月异，新型漏洞不断被报告。如果有一款产品能够统一拦截请求，过滤恶意参数，自动消毒、添加 Token，并且能够根据最新攻击和漏洞情报，不断升级对策，处理掉大多数令人头痛的网站攻击，就是一件很美妙的事了")]),t._v(" "),a("p",[t._v("非常幸运，真的有这样的产品 —— ModSecurity；ModSecurity 是一个开源的 Web 应用防火墙，探测攻击并保护 Web 应用程序，既可以嵌入到 Web 应用服务器中，也可以作为一个独立的应用程序启动")]),t._v(" "),a("p",[t._v("ModSecurity 最早只是 Apache 的一个模块，现在已经有 Java、.NET 多个版本，并支持 Nginx\nModSecurity 采用处理逻辑与攻击规则集合分离的架构模式。处理逻辑（执行引擎）负责请求和响应的拦截过滤，规则加载执行等功能。而攻击规则集合则负责描述对具体攻击的规则定义、模式识别、防御策略等功能（可以通过文本方式进行描述）。处理逻辑比较稳定，规则集合需要不断针对漏洞进行升级，这是一种可扩展的架构设计，如下图所示：\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1650184952054-d76658d3-f11e-4a28-aa06-45d26bafb9ed.png#clientId=u2b6516a6-a705-4&from=paste&height=828&id=u0fde05df&name=image.png&originHeight=828&originWidth=1512&originalType=binary&ratio=1&rotation=0&showTitle=false&size=476524&status=done&style=none&taskId=uad94b9a7-8739-4ccf-8eda-1eff3c677a0&title=&width=1512",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"网站安全漏洞扫描"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网站安全漏洞扫描"}},[t._v("#")]),t._v(" 网站安全漏洞扫描")]),t._v(" "),a("p",[t._v("和计算机安全漏洞扫描一样，网站也需要安全漏洞扫描\n网站安全漏洞扫描工具是根据内置规则，构造具有攻击性的 URL 请求，模拟黑客攻击行为，用以发现网站安全漏洞的工具。许多大型网站的安全团队都有自己开发的漏洞扫描工具，不定期的对网站的服务器进行扫描，查漏补缺。市场上也有很多商用的网站安全漏洞扫描平台")])])}),[],!1,null,null,null);a.default=s.exports}}]);