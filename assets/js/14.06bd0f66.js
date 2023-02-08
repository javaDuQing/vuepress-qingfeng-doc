(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{410:function(t,e,a){"use strict";a.r(e);var i=a(2),n=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"初始阶段的网站架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始阶段的网站架构"}},[t._v("#")]),t._v(" 初始阶段的网站架构")]),t._v(" "),e("p",[t._v("大型网站都是从小型网站发展而来，网站架构也是一样，是从小型网站架构逐步演化而来。小型网站最开始没有太多人访问，只需要一台服务器就绰绰有余，这时的网站架构如下图所示：")]),t._v(" "),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675688930823-3012dea4-2873-443a-8a84-be6e6e5bd60b.png#averageHue=%23efefee&clientId=ua7df73cd-eca2-4&from=paste&height=690&id=u7e55c052&name=image.png&originHeight=690&originWidth=948&originalType=binary&ratio=1&rotation=0&showTitle=false&size=346225&status=done&style=none&taskId=ue3c06955-0f93-4345-af6a-2ec3bb0f7b4&title=&width=948",width:"400",height:"213",align:"bottom"}}),t._v(" "),e("p",[t._v("应用程序、数据库、文件等所有资源都在一台服务器上。通常服务器操作系统使用Linux、应用程序使用PHP开发、然后部署在Apache上、数据库使用MySQL，汇集各种免费的开源软件以及一台廉价服务器就可以开始网站的发展之路了")]),t._v(" "),e("h2",{attrs:{id:"应用服务和数据服务分离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用服务和数据服务分离"}},[t._v("#")]),t._v(" 应用服务和数据服务分离")]),t._v(" "),e("p",[t._v("随着网站业务的发展，一台服务器逐渐不能满足需求：越来越多的用户访问导致性能越来越差，越来越多的数据导致存储空间不足。这时就需要将应用和数据分离。应用和数据分离后整个网站使用3台服务器：应用服务器、文件服务器和数据库服务器。这 3 台服务器对硬件资源的要求各不相同：")]),t._v(" "),e("ol",[e("li",[t._v("应用服务器需要处理大量的业务逻辑，因此需要更快更强大的CPU")]),t._v(" "),e("li",[t._v("数据库服务器需要快速磁盘检索和数据缓存，因此需要更快的磁盘和更大的内存")]),t._v(" "),e("li",[t._v("文件服务器需要存储大量用户上传的文件，因此需要更大的硬盘")])]),t._v(" "),e("p",[t._v("此时，网站系统的架构如下图所示：")]),t._v(" "),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675689005292-56117b27-a506-4a8e-ac8a-8bf74927f00f.png#averageHue=%23f2f2f1&clientId=ua7df73cd-eca2-4&from=paste&height=868&id=u8ccef5f1&name=image.png&originHeight=868&originWidth=1214&originalType=binary&ratio=1&rotation=0&showTitle=false&size=435849&status=done&style=none&taskId=ubee4e89c-4847-4c86-8b28-1da0daf895d&title=&width=1214",width:"500",height:"313",align:"bottom"}}),t._v(" "),e("p",[t._v("应用和数据分离后，不同特性的服务器承担不同的服务角色，网站的并发处理能力和数据存储空间得到了很大改善，支持网站业务进一步发展。但是随着用户逐渐增多，网站又一次面临挑战：数据库压力太大导致访问延迟，进而影响整个网站的性能，用户体验受到影响。这时需要对网站架构进一步优化")]),t._v(" "),e("h2",{attrs:{id:"使用缓存改善网站性能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用缓存改善网站性能"}},[t._v("#")]),t._v(" 使用缓存改善网站性能")]),t._v(" "),e("p",[t._v("网站访问的特点和现实世界的财富分配一样遵循二八定律：80% 的业务访问集中在20% 的数据上。既然大部分业务访问集中在一小部分数据上，那么如果把这一小部分数据缓存在内存中，就可以减少数据库的访问压力，提高整个网站的数据访问速度，改善数据库的写入性能了。 网站使用的缓存可以分为两种：缓存在应用服务器上的本地缓存和缓存在专门的分布式缓存服务器上的远程缓存")]),t._v(" "),e("ul",[e("li",[t._v("本地缓存的访问速度更快一些，但是受应用服务器内存限制，其缓存数据量有限，而且会出现和应用程序争用内存的情况")]),t._v(" "),e("li",[t._v("远程分布式缓存可以使用集群的方式，部署大内存的服务器作为专门的缓存服务器，可以在理论上做到不受内存容量限制的缓存服务")])]),t._v(" "),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675689096946-3d77a887-4391-49e9-ab86-77812984ce15.png#averageHue=%23f1f1f0&clientId=ua7df73cd-eca2-4&from=paste&height=1274&id=u796915e2&name=image.png&originHeight=1274&originWidth=1274&originalType=binary&ratio=1&rotation=0&showTitle=false&size=741615&status=done&style=none&taskId=uc5381caa-9072-465f-8c17-9d7a70a48e9&title=&width=1274",width:"500",height:"413",align:"bottom"}}),t._v(" "),e("p",[t._v("使用缓存后，数据访问压力得到有效缓解，但是单一应用服务器能够处理的请求连接有限，在网站访问高峰期，应用服务器成为整个网站的瓶颈")]),t._v(" "),e("h2",{attrs:{id:"使用应用服务器集群改善网站的并发处理能力"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用应用服务器集群改善网站的并发处理能力"}},[t._v("#")]),t._v(" 使用应用服务器集群改善网站的并发处理能力")]),t._v(" "),e("p",[t._v("使用集群是网站解决高并发、海量数据问题的常用手段。当一台服务器的处理能力、存储空间不足时，不要企图去更换更强大的服务器，对大型网站而言，不管多么强大的服务器，都满足不了网站持续增长的业务需求。这种情况下，更恰当的做法是增加一台服务器分担原有服务器的访问及存储压力。 对网站架构而言，只要能通过增加一台服务器的方式改善负载压力，就可以以同样的方式持续增加服务器不断改善系统性能，从而实现系统的可伸缩性。应用服务器实现集群是网站可伸缩架构设计中较为简单成熟的一种，如下图所示：")]),t._v(" "),e("img",{attrs:{width:"500",height:"413",align:"bottom",src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675689175518-63e4a1b5-db7b-4b01-a316-e97c6ef7ee59.png#averageHue=%23f4f4f3&clientId=ua7df73cd-eca2-4&from=paste&height=1168&id=uf6c97498&name=image.png&originHeight=1168&originWidth=1634&originalType=binary&ratio=1&rotation=0&showTitle=false&size=751330&status=done&style=none&taskId=u958f67ec-c75a-405a-be9c-ff17c079b26&title=&width=1634"}}),t._v(" "),e("p",[t._v("通过负载均衡调度服务器，可以将来自用户浏览器的访问请求分发到应用服务器集群中的任何一台服务器上，如果有更多用户，就在集群中加入更多的应用服务器，使应用服务器的压力不再成为整个网站的瓶颈")]),t._v(" "),e("h2",{attrs:{id:"数据库读写分离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库读写分离"}},[t._v("#")]),t._v(" 数据库读写分离")]),t._v(" "),e("p",[t._v("网站在使用缓存后，使对大部分数据读操作访问都可以不通过数据库就能完成，但是仍有一部分读操作（缓存访问不命中、缓存过期）和全部的写操作都需要访问数据库，在网站的用户达到一定规模后，数据库因为负载压力过高而成为网站的瓶颈。 目前大部分的主流数据库都提供主从热备功能，通过配置两台数据库主从关系，可以将一台数据库服务器的数据更新同步到另一台服务器上。网站利用数据库的这一功能，实现数据库读写分离，从而改善数据库负载压力。如下图所示：")]),t._v(" "),e("img",{attrs:{width:"600",height:"513",align:"bottom",src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675689254942-ce20f5ea-3e3c-4668-b5d3-6dc726b0deb3.png#averageHue=%23f3f3f2&clientId=ua7df73cd-eca2-4&from=paste&height=1192&id=u7f5762fd&name=image.png&originHeight=1192&originWidth=1582&originalType=binary&ratio=1&rotation=0&showTitle=false&size=815488&status=done&style=none&taskId=u79759671-9f38-4de4-9560-64623916024&title=&width=1582"}}),t._v(" "),e("p",[t._v("应用服务器在写数据的时候，访问主数据库，主数据库通过主从复制机制将数据更新同步到从数据库，这样当应用服务器读数据的时候，就可以通过从数据库获得数据。为了便于应用程序访问读写分离后的数据库，通常在应用服务器端使用专门的数据访问模块，使数据库读写分离对应用透明")]),t._v(" "),e("h2",{attrs:{id:"使用反向代理和-cdn-加速网站响应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用反向代理和-cdn-加速网站响应"}},[t._v("#")]),t._v(" 使用反向代理和 CDN 加速网站响应")]),t._v(" "),e("p",[t._v("随着网站业务不断发展，用户规模越来越大，由于中国复杂的网络环境，不同地区的用户访问网站时，速度差别也极大。有研究表明，网站访问延迟和用户流失率正相关，网站访问越慢，用户越容易失去耐心而离开。为了提供更好的用户体验，留住用户，网站需要加速网站访问速度。主要手段有使用 CDN 和反向代理。如下图所示：")]),t._v(" "),e("img",{attrs:{width:"600",height:"513",align:"bottom",src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675689343365-b576bd89-b1bf-4349-b797-9fd01bff5368.png#averageHue=%23f2f2f1&clientId=ua7df73cd-eca2-4&from=paste&height=1362&id=u5d460492&name=image.png&originHeight=1362&originWidth=1888&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1129319&status=done&style=none&taskId=u6f15dc0c-be12-4fef-ba9b-13a206009ec&title=&width=1888"}}),t._v(" "),e("p",[t._v("使用 CDN 和反向代理的目的都是尽早返回数据给用户，一方面加快用户访问速度，另一方面也减轻后端服务器的负载压力")]),t._v(" "),e("h2",{attrs:{id:"使用分布式文件系统和分布式数据库系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用分布式文件系统和分布式数据库系统"}},[t._v("#")]),t._v(" 使用分布式文件系统和分布式数据库系统")]),t._v(" "),e("p",[t._v("任何强大的单一服务器都满足不了大型网站持续增长的业务需求。数据库经过读写分离后，从一台服务器拆分成两台服务器，但是随着网站业务的发展依然不能满足需求，这时需要使用分布式数据库。文件系统也一样，需要使用分布式文件系统。如下图所示：")]),t._v(" "),e("img",{attrs:{width:"600",height:"413",align:"bottom",src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675689407310-e4a4f166-a6bb-4dfe-b073-44ae08199740.png#averageHue=%23f1f1f0&clientId=ua7df73cd-eca2-4&from=paste&height=1094&id=ud3758a48&name=image.png&originHeight=1094&originWidth=1628&originalType=binary&ratio=1&rotation=0&showTitle=false&size=881514&status=done&style=none&taskId=ua9dd9be9-fda0-40aa-b918-462d657db6e&title=&width=1628"}}),t._v(" "),e("p",[t._v("分布式数据库是网站数据库拆分的最后手段，只有在单表数据规模非常庞大的时候才使用。不到不得已时，网站更常用的数据库拆分手段是业务分库，将不同业务的数据部署在不同的物理服务器上")]),t._v(" "),e("h2",{attrs:{id:"使用-nosql-和搜索引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-nosql-和搜索引擎"}},[t._v("#")]),t._v(" 使用 NoSQL 和搜索引擎")]),t._v(" "),e("p",[t._v("随着网站业务越来越复杂，对数据存储和检索的需求也越来越复杂，网站需要采用一些非关系数据库技术如 NoSQL 和非数据库查询技术如搜索引擎。如下图所示：\n"),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675689466689-ea5fcf90-c640-4941-b4d7-1c0664f5f925.png#averageHue=%23efefee&clientId=ua7df73cd-eca2-4&from=paste&height=1022&id=ucd23ef29&name=image.png&originHeight=1022&originWidth=1532&originalType=binary&ratio=1&rotation=0&showTitle=false&size=887867&status=done&style=none&taskId=uaeceb3fb-4fa1-4d3b-86a3-ff6104c1b6b&title=&width=1532",alt:"image.png"}}),t._v("\nNoSQL 和搜索引擎都是源自互联网的技术手段，对可伸缩的分布式特性具有更好的支持。应用服务器则通过一个统一数据访问模块访问各种数据，减轻应用程序管理诸多数据源的麻烦")]),t._v(" "),e("h2",{attrs:{id:"业务拆分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#业务拆分"}},[t._v("#")]),t._v(" 业务拆分")]),t._v(" "),e("p",[t._v("大型网站为了应对日益复杂的业务场景，通过使用分而治之的手段将整个网站业务分成不同的产品线。如大型购物交易网站都会将首页、商铺、订单、买家、卖家等拆分成不同的产品线，分归不同的业务团队负责。\n具体到技术上，也会根据产品线划分，将一个网站拆分成许多不同的应用，每个应用独立部署。应用之间可以通过一个超链接建立关系（在首页上的导航链接每个都指向不同的应用地址），也可以通过消息队列进行数据分发，当然最多的还是通过访问同一个数据存储系统来构成一个关联的完整系统，如下图所示：\n"),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675689515621-7bae6735-9434-4ba7-963a-8c1246996968.png#averageHue=%23eeeeed&clientId=ua7df73cd-eca2-4&from=paste&height=1050&id=u119cb93b&name=image.png&originHeight=1050&originWidth=1870&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1149208&status=done&style=none&taskId=u5bb6d6e2-f519-4f92-8512-9b14d36bd14&title=&width=1870",alt:"image.png"}})]),t._v(" "),e("h2",{attrs:{id:"分布式服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分布式服务"}},[t._v("#")]),t._v(" 分布式服务")]),t._v(" "),e("p",[t._v("随着业务拆分越来越小，存储系统越来越庞大，应用系统的整体复杂度呈指数级增加，部署维护越来越困难。由于所有应用要和所有数据库系统连接，在数万台服务器规模的网站中，这些连接的数目是服务器规模的平方，导致数据库连接资源不足，拒绝服务。\n既然每一个应用系统都需要执行许多相同的业务操作，比如用户管理、商品管理等，那么可以将这些共用的业务提取出来，独立部署。由这些可复用的业务连接数据库，提供共用业务服务，而应用系统只需要管理用户界面，通过分布式服务调用共用业务服务完成具体业务操作。如下图所示：\n"),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1675689561968-611592b6-eeb9-4aae-9859-3431dc669641.png#averageHue=%23ececeb&clientId=ua7df73cd-eca2-4&from=paste&height=1014&id=uf752c8fb&name=image.png&originHeight=1014&originWidth=1794&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1132777&status=done&style=none&taskId=u6fe5dbe7-d94a-4903-b085-c6b15835f31&title=&width=1794",alt:"image.png"}})]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ol",[e("li",[t._v("《大型网站技术架构：核心原理与案例分析》")])])])}),[],!1,null,null,null);e.default=n.exports}}]);