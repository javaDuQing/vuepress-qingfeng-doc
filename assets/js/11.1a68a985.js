(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{409:function(t,a,i){"use strict";i.r(a);var e=i(2),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"二阶段提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二阶段提交"}},[t._v("#")]),t._v(" 二阶段提交")]),t._v(" "),a("blockquote",[a("p",[t._v("引入一个作为协调者（coordinator）的组件来统一掌控所有参与者（participant）的操作结果，并最终指示这些节点是否要把操作结果进行真正的提交")])]),t._v(" "),a("p",[t._v("简单而言：协调者（coordinator）用来协调事务状态，参与者（participant）用来管理资源\n两段提交（2PC - Prepare & Commit）是指两个阶段的提交：")]),t._v(" "),a("ul",[a("li",[t._v("第一阶段: 准备阶段；\n"),a("ul",[a("li",[t._v("协调者向所有参与者发送 REQUEST-TO-PREPARE")]),t._v(" "),a("li",[t._v("当参与者收到 REQUEST-TO-PREPARE 消息后, 它向协调者发送消息 PREPARED 或者 NO，表示事务是否准备好；如果发送的是 NO，那么事务要回滚；")])])]),t._v(" "),a("li",[t._v("第二阶段: 提交阶段。\n"),a("ul",[a("li",[t._v("协调者收集所有参与者的返回消息, 如果所有的参与者都回复的是 PREPARED， 那么协调者向所有参与者发送 COMMIT 消息；否则，协调者向所有回复 PREPARED 的参与者发送 ABORT 消息；")]),t._v(" "),a("li",[t._v("参与者如果回复了 PREPARED 消息并且收到协调者发来的 COMMIT 消息，或者它收到 ABORT 消息，它将执行提交或回滚，并向协调者发送 DONE 消息以确认")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1676101658660-bebe58cd-53c9-4ace-b27f-7d37839b543d.png#averageHue=%23e6e5e5&clientId=ueb7224a4-3f36-4&from=paste&height=351&id=ua51d897b&name=image.png&originHeight=702&originWidth=1390&originalType=binary&ratio=2&rotation=0&showTitle=false&size=350935&status=done&style=none&taskId=uf1b8b78a-c9fa-4015-9c91-570099f8118&title=&width=695",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"两段提交的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两段提交的缺点"}},[t._v("#")]),t._v(" 两段提交的缺点")]),t._v(" "),a("p",[t._v("二阶段提交看似能够提供原子性的操作，但它存在着严重的缺陷：")]),t._v(" "),a("ul",[a("li",[t._v("网络抖动导致的数据不一致：第二阶段中协调者向参与者发送 commit 命令之后，一旦此时发生网络抖动，导致一部分参与者接收到了 commit 请求并执行，可其他未接到 commit 请求的参与者无法执行事务提交。进而导致整个分布式系统出现了数据不一致。")]),t._v(" "),a("li",[t._v("超时导致的同步阻塞问题：2PC 中的所有的参与者节点都为事务阻塞型，当某一个参与者节点出现通信超时，其余参与者都会被动阻塞占用资源不能释放。")]),t._v(" "),a("li",[t._v("单点故障的风险：由于严重的依赖协调者，一旦协调者发生故障，而此时参与者还都处于锁定资源的状态，无法完成事务 commit 操作。虽然协调者出现故障后，会重新选举一个协调者，可无法解决因前一个协调者宕机导致的参与者处于阻塞状态的问题")])]),t._v(" "),a("h3",{attrs:{id:"_2pc-小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2pc-小结"}},[t._v("#")]),t._v(" 2PC 小结")]),t._v(" "),a("p",[t._v("2PC 除本身的算法局限外，还有一个使用上的限制，就是它主要用在两个数据库之间，两个系统之间是无法使用 2PC 的，因为不会直接在底层的两个业务数据库之间做一致性，而是在两个服务上面实现一致性")]),t._v(" "),a("h2",{attrs:{id:"三阶段提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三阶段提交"}},[t._v("#")]),t._v(" 三阶段提交")]),t._v(" "),a("blockquote",[a("p",[t._v("三段提交（3PC）是对两段提交（2PC）的一种升级优化，"),a("strong",[t._v("3PC 在 2PC 的第一阶段和第二阶段中多插入一个阶段")]),t._v("。保证了在最后提交阶段之前，各参与者节点的状态都一致。同时在协调者和参与者中都引入超时机制，当参与者各种原因未收到协调者的 commit 请求后，会对本地事务进行 commit，不会一直阻塞等待，解决了 2PC 的单点故障问题，但 3PC 还是没能从根本上解决数据一致性的问题")])]),t._v(" "),a("p",[t._v("3PC的三个阶段分别是 CanCommit、PreCommit、DoCommit：")]),t._v(" "),a("ul",[a("li",[t._v("CanCommit：协调者向所有参与者发送CanCommit命令，询问是否可以执行事务提交操作。如果全部响应YES 则进入下一个阶段。")]),t._v(" "),a("li",[t._v("PreCommit：协调者向所有参与者发送 PreCommit 命令，询问是否可以进行事务的预提交操作，参与者接收到 PreCommit 请求后，如参与者成功的执行了事务操作，则返回 Yes 响应，进入最终 commit 阶段。一旦参与者中有向协调者发送了 No 响应，或因网络造成超时，协调者没有接到参与者的响应，协调者向所有参与者发送 abort 请求，参与者接受 abort 命令执行事务的中断。")]),t._v(" "),a("li",[t._v("DoCommit：在前两个阶段中所有参与者的响应反馈均是 YES 后，协调者向参与者发送 DoCommit 命令正式提交事务")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1676101972496-d72a868d-b8d1-48eb-8110-15e68fb9387c.png#averageHue=%23e6eac6&clientId=ueb7224a4-3f36-4&from=paste&height=336&id=ucfdaa776&name=image.png&originHeight=672&originWidth=1277&originalType=binary&ratio=2&rotation=0&showTitle=false&size=114828&status=done&style=none&taskId=u8641c1ed-848c-4bf4-99bd-b063016e96e&title=&width=638.5",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"_3pc-存在的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3pc-存在的问题"}},[t._v("#")]),t._v(" 3PC 存在的问题")]),t._v(" "),a("p",[t._v("3PC并没有解决多少2PC的问题，实际使用很少")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ol",[a("li",[t._v("https://zhuanlan.zhihu.com/p/111304281")]),t._v(" "),a("li",[t._v("https://www.pdai.tech/md/arch/arch-z-transection.html#%E4%B8%A4%E6%AE%B5%E6%8F%90%E4%BA%A4-2pc")]),t._v(" "),a("li",[t._v("《凤凰架构》")])])])}),[],!1,null,null,null);a.default=r.exports}}]);