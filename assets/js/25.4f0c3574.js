(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{421:function(t,i,a){"use strict";a.r(i);var e=a(2),v=Object(e.a)({},(function(){var t=this,i=t._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p",[t._v("高性能集群的本质很简单，通过增加更多的服务器来提升系统整体的计算能力。由于计算本身存在一个特点：同样的输入数据和逻辑，无论在哪台服务器上执行，都应该得到相同的输出。因此高性能集群设计的复杂度主要体现在任务分配这部分，需要设计合理的任务分配策略，将计算任务分配到多台服务器上执行")]),t._v(" "),i("p",[t._v("高性能集群的复杂性主要体现在需要增加一个任务分配器，以及为任务选择一个合适的任务分配算法。对于任务分配器，现在更流行的通用叫法是“负载均衡器”。但这个名称有一定的误导性，会让人潜意识里认为任务分配的目的是要保持各个计算单元的负载达到均衡状态。而实际上任务分配并不只是考虑计算单元的负载均衡，不同的任务分配算法目标是不一样的，有的基于负载考虑，有的基于性能（吞吐量、响应时间）考虑，有的基于业务考虑。考虑到“负载均衡”已经成为了事实上的标准术语，这里我也用“负载均衡”来代替“任务分配”，但请你时刻记住，负载均衡不只是为了计算单元的负载达到均衡状态")]),t._v(" "),i("h2",{attrs:{id:"负载均衡的分类"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡的分类"}},[t._v("#")]),t._v(" 负载均衡的分类")]),t._v(" "),i("p",[t._v("常见的负载均衡系统包括 3 种：")]),t._v(" "),i("img",{attrs:{width:"250",height:"153",align:"bottom",src:"https://cdn.nlark.com/yuque/0/2022/jpeg/375413/1648815851978-aea9537a-72dc-42ed-977e-c32920a2abe2.jpeg"}}),t._v(" "),i("h3",{attrs:{id:"dns-负载均衡"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dns-负载均衡"}},[t._v("#")]),t._v(" DNS 负载均衡")]),t._v(" "),i("p",[t._v("DNS 是最简单也是最常见的负载均衡方式，一般用来实现地理级别的均衡。例如，北方的用户访问北京的机房，南方的用户访问深圳的机房。DNS 负载均衡的本质是 DNS 解析同一个域名可以返回不同的IP地址。例如，同样是www.baidu.com，北方用户解析后获取的地址是 61.135.165.224（这是北京机房的IP），南方用户解析后获取的地址是 14.215.177.38（这是深圳机房的IP）。下面是 DNS 负载均衡的简单示意图：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1648815997584-f45f2746-1033-41ec-926b-eafa8f6d6a67.png#clientId=u09421359-c6d0-4&from=paste&height=545&id=uf3e64a49&name=image.png&originHeight=545&originWidth=673&originalType=binary&ratio=1&rotation=0&showTitle=false&size=110790&status=done&style=none&taskId=u4d7effa4-0150-41d3-ac6a-3135c789c96&title=&width=673",alt:"image.png"}})]),t._v(" "),i("p",[t._v("DNS 负载均衡实现简单、成本低，但也存在粒度太粗、负载均衡算法少等缺点。仔细分析一下优缺点，其优点有：")]),t._v(" "),i("ol",[i("li",[t._v("简单、成本低：负载均衡工作交给 DNS 服务器处理，无须自己开发或者维护负载均衡设备")]),t._v(" "),i("li",[t._v("就近访问，提升访问速度：DNS 解析时可以根据请求来源 IP，解析成距离用户最近的服务器地址，可以加快访问速度，改善性能")])]),t._v(" "),i("p",[t._v("缺点有：")]),t._v(" "),i("ol",[i("li",[t._v("更新不及时：DNS 缓存的时间比较长，修改 DNS 配置后，由于缓存的原因，还是有很多用户会继续访问修改前的 IP，这样的访问会失败，达不到负载均衡的目的，并且也影响用户正常使用业务")]),t._v(" "),i("li",[t._v("扩展性差：DNS 负载均衡的控制权在域名商那里，无法根据业务特点针对其做更多的定制化功能和扩展特性")]),t._v(" "),i("li",[t._v("分配策略比较简单：DNS 负载均衡支持的算法少；")]),t._v(" "),i("li",[t._v("不能区分服务器的差异（不能根据系统与服务的状态来判断负载）")])]),t._v(" "),i("h3",{attrs:{id:"硬件负载均衡"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#硬件负载均衡"}},[t._v("#")]),t._v(" 硬件负载均衡")]),t._v(" "),i("p",[t._v("硬件负载均衡是通过单独的硬件设备来实现负载均衡功能，这类设备和路由器、交换机类似，可以理解为一个用于负载均衡的基础网络设备。目前业界典型的硬件负载均衡设备有两款：F5 和 A10。这类设备性能强劲、功能强大，但价格都不便宜，一般只有“土豪”公司才会考虑使用此类设备。普通业务量级的公司一是负担不起，二是业务量没那么大，用这些设备也是浪费")]),t._v(" "),i("p",[t._v("硬件负载均衡的优点是：")]),t._v(" "),i("ol",[i("li",[t._v("功能强大：全面支持各层级的负载均衡，支持全面的负载均衡算法，支持全局负载均衡")]),t._v(" "),i("li",[t._v("性能强大：对比一下，软件负载均衡支持到10万级并发已经很厉害了，硬件负载均衡可以支持100万以上的并发")]),t._v(" "),i("li",[t._v("稳定性高：商用硬件负载均衡，经过了良好的严格测试，经过大规模使用，稳定性高")]),t._v(" "),i("li",[t._v("支持安全防护：硬件均衡设备除具备负载均衡功能外，还具备防火墙、防 DDoS 攻击等安全功能")])]),t._v(" "),i("p",[t._v("硬件负载均衡的缺点是：")]),t._v(" "),i("ol",[i("li",[t._v("价格昂贵：最普通的一台 F5 就是一台“马6”，好一点的就是“Q7”了。")]),t._v(" "),i("li",[t._v("扩展能力差：硬件设备，可以根据业务进行配置，但无法进行扩展和定制")])]),t._v(" "),i("h3",{attrs:{id:"软件负载均衡"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#软件负载均衡"}},[t._v("#")]),t._v(" 软件负载均衡")]),t._v(" "),i("p",[t._v("软件负载均衡通过负载均衡软件来实现负载均衡功能，常见的有 Nginx 和 LVS ，其中 Nginx 是位于第 7 层的负载均衡，LVS 是第 4 层负载均衡。4 层和 7 层的区别就在于协议和灵活性，Nginx 支持 HTTP、E-mail 协议（应用层的协议）；而 LVS 是 4 层负载均衡，和协议无关，几乎所有应用都可以做，例如，聊天、数据库等")]),t._v(" "),i("p",[t._v("软件和硬件的最主要区别就在于性能，硬件负载均衡性能远远高于软件负载均衡性能。Ngxin 的性能是万级，一般的 Linux 服务器上装一个 Nginx 大概能到5万/秒；LVS 的性能是十万级，据说可达到80万/秒；而 F5 性能是百万级，从 200 万/秒到 800 万/秒都有。当然，软件负载均衡的最大优势是便宜，一台普通的 Linux 服务器批发价大概就是 1 万元左右，相比 F5 的价格，那就是自行车和宝马的区别了。下面是 Nginx 的负载均衡架构示意图：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1648866977842-e31d2eaa-e6a3-4849-bd2d-7950d1df3294.png#clientId=u3c4c4944-d7d6-4&from=paste&height=390&id=u228d2217&name=image.png&originHeight=390&originWidth=670&originalType=binary&ratio=1&rotation=0&showTitle=false&size=82289&status=done&style=none&taskId=uf1046b0c-b95c-4d5d-97d4-ebced2bd630&title=&width=670",alt:"image.png"}})]),t._v(" "),i("p",[t._v("软件负载均衡的优点：")]),t._v(" "),i("ol",[i("li",[t._v("简单：无论是部署还是维护都比较简单")]),t._v(" "),i("li",[t._v("便宜：只要买个Linux服务器，装上软件即可")]),t._v(" "),i("li",[t._v("灵活：4 层和 7 层负载均衡可以根据业务进行选择；也可以根据业务进行比较方便的扩展，例如，可以通过Nginx 的插件来实现业务的定制化功能")])]),t._v(" "),i("p",[t._v("其实下面的缺点都是和硬件负载均衡相比的，并不是说软件负载均衡没法用")]),t._v(" "),i("ol",[i("li",[t._v("性能一般：一个Nginx大约能支撑5万并发")]),t._v(" "),i("li",[t._v("功能没有硬件负载均衡那么强大")]),t._v(" "),i("li",[t._v("一般不具备防火墙和防DDoS攻击等安全功能")])]),t._v(" "),i("h2",{attrs:{id:"负载均衡典型架构"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡典型架构"}},[t._v("#")]),t._v(" 负载均衡典型架构")]),t._v(" "),i("p",[t._v("前面介绍了 3 种常见的负载均衡机制：DNS负载均衡、硬件负载均衡、软件负载均衡，每种方式都有一些优缺点，但并不意味着在实际应用中只能基于它们的优缺点进行非此即彼的选择，反而是基于它们的优缺点进行组合使用。具体来说，组合的基本原则为：DNS 负载均衡用于实现地理级别的负载均衡；硬件负载均衡用于实现集群级别的负载均衡；软件负载均衡用于实现机器级别的负载均衡")]),t._v(" "),i("p",[t._v("我以一个假想的实例来说明一下这种组合方式，如下图所示：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1648867069061-008fd6cc-a01d-41a1-ab70-192e02909a40.png#clientId=u3c4c4944-d7d6-4&from=paste&height=420&id=ude055b8d&name=image.png&originHeight=420&originWidth=657&originalType=binary&ratio=1&rotation=0&showTitle=false&size=164591&status=done&style=none&taskId=u0b9108e1-690a-4546-bd78-d1402c79251&title=&width=657",alt:"image.png"}})]),t._v(" "),i("p",[t._v("整个系统的负载均衡分为三层。")]),t._v(" "),i("ol",[i("li",[t._v("地理级别负载均衡：www.xxx.com 部署在北京、广州、上海三个机房，当用户访问时，DNS 会根据用户的地理位置来决定返回哪个机房的 IP，图中返回了广州机房的 IP 地址，这样用户就访问到广州机房了")]),t._v(" "),i("li",[t._v("集群级别负载均衡：广州机房的负载均衡用的是 F5 设备，F5 收到用户请求后，进行集群级别的负载均衡，将用户请求发给 3 个本地集群中的一个，我们假设 F5 将用户请求发给了“广州集群2”")]),t._v(" "),i("li",[t._v("机器级别的负载均衡：广州集群2的负载均衡用的是 Nginx，Nginx 收到用户请求后，将用户请求发送给集群里面的某台服务器，服务器处理用户的业务请求并返回业务响应")])]),t._v(" "),i("p",[t._v("需要注意的是，上图只是一个示例，一般在大型业务场景下才会这样用，如果业务量没这么大，则没有必要严格照搬这套架构。例如，一个大学的论坛，完全可以不需要 DNS 负载均衡，也不需要 F5 设备，只需要用 Nginx 作为一个简单的负载均衡就足够了")]),t._v(" "),i("h2",{attrs:{id:"负载均衡算法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡算法"}},[t._v("#")]),t._v(" 负载均衡算法")]),t._v(" "),i("img",{attrs:{width:"480",height:"353",align:"bottom",src:"https://cdn.nlark.com/yuque/0/2022/jpeg/375413/1649319043200-4c11e3a7-62b2-461e-825d-003e7be91575.jpeg"}})])}),[],!1,null,null,null);i.default=v.exports}}]);