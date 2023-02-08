(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{424:function(_,t,v){"use strict";v.r(t);var s=v(2),r=Object(s.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h3",{attrs:{id:"_1-背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[_._v("#")]),_._v(" 1 背景")]),_._v(" "),t("p",[_._v("在电商平台的商品系统中，一次系统查询的流程经历了三次调用，从网关系统开始，然后依次调用商品系统、促销系统、积分系统的三个服务，如果此时积分系统的响应时间变长，那么整条请求的响应时间也会因此变长，整体服务甚至会发生宕机。"),t("strong",[_._v("这就是服务雪崩现象：即局部故障最终导致了全局故障")])]),_._v(" "),t("p",[_._v("在分布式环境下，系统某一个服务或者组件响应缓慢，从而拖垮整个系统的情况随处可见。那你要怎么避免呢？对于系统可用性，你要通过三个方面来解决：分别是“评估”“检测”和“保证”，具体如下：")]),_._v(" "),t("ol",[t("li",[_._v("用科学的方法评估"),t("strong",[_._v("系统的可用性指标")])]),_._v(" "),t("li",[_._v("通过实时监控预警"),t("strong",[_._v("检测系统的可用性")])]),_._v(" "),t("li",[_._v("通过系统架构设计"),t("strong",[_._v("保证系统的可用性")])])]),_._v(" "),t("p",[_._v("解决的思路是：在分布式系统中，当检测到某一个系统或服务响应时长出现异常时，要想办法停止调用该服务，让服务的调用快速返回失败，从而释放此次请求持有的资源。"),t("strong",[_._v("这就是架构设计中经常提到的降级和熔断机制")])]),_._v(" "),t("p",[_._v("对应到面试中，面试官一般会通过如下两个问题考察候选者：")]),_._v(" "),t("ul",[t("li",[_._v("熔断和降级是怎么做的（考察你对原理性知识的掌握）？")]),_._v(" "),t("li",[_._v("你在项目中如何实现熔断降级（考察你的实战能力）？")])]),_._v(" "),t("h3",{attrs:{id:"_2-熔断设计的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-熔断设计的原理"}},[_._v("#")]),_._v(" 2 熔断设计的原理")]),_._v(" "),t("p",[_._v("形象一点儿说：熔断机制参考了电路中保险丝的保护原理，当电路出现短路、过载时，保险丝就会自动熔断，保证整体电路的安全")]),_._v(" "),t("p",[_._v("而在微服务架构中，服务的熔断机制是指：在服务 A 调用服务 B 时，如果 B 返回错误或超时的次数超过一定阈值，服务 A 的后续请求将不再调用服务 B。"),t("strong",[_._v("这种设计方式就是断路器模式")])]),_._v(" "),t("p",[_._v("在这种模式下，服务调用方为每一个调用的服务维护一个有限状态机，在这个状态机中存在"),t("strong",[_._v("关闭")]),_._v("、"),t("strong",[_._v("半打开")]),_._v("和"),t("strong",[_._v("打开三种状态：")])]),_._v(" "),t("ul",[t("li",[_._v("关闭：正常调用远程服务")]),_._v(" "),t("li",[_._v("半打开：尝试调用远程服务")]),_._v(" "),t("li",[_._v("打开：直接返回错误，不调用远程服务")])]),_._v(" "),t("p",[_._v("这三种状态之间切换的过程如下")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("“关闭”转换“打开”")]),_._v("：当服务调用失败的次数累积到一定的阈值时，服务熔断状态，将从关闭态切换到打开态")]),_._v(" "),t("li",[t("strong",[_._v("“打开”转换“半打开”")]),_._v("：当熔断处于打开状态时，我们会启动一个超时计时器，当计时器超时后，状态切换到半打开态")]),_._v(" "),t("li",[t("strong",[_._v("“半打开”转换“关闭”")]),_._v("：在熔断处于半打开状态时，请求可以达到后端服务，如果累计一定的成功次数后，状态切换到关闭态")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1648645257464-8501656b-58fa-4651-8879-7d788dd71c5d.png#clientId=u631a1178-d515-4&from=paste&id=uc982e335&originHeight=332&originWidth=577&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u076dad35-0733-4448-99f6-f9d09e2261b&title=",alt:""}})]),_._v(" "),t("h3",{attrs:{id:"如何设计实现一个断路器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何设计实现一个断路器"}},[_._v("#")]),_._v(" 如何设计实现一个断路器")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/375413/1648645253612-b3699936-ccb3-4903-a526-cd79a495ff52.png#clientId=u631a1178-d515-4&from=paste&id=u48d0ce7f&originHeight=368&originWidth=934&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u96b7246b-2dc2-4f83-9472-469cd903134&title=",alt:""}}),_._v("\n断路器的流程图")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("“关闭”转“打开”：")]),_._v(" 当请求到来，首先判断是否在熔断中，如果没有熔断，则正常调用系统服务，此时统计系统的调用状态，如果失败次数超过阈值，则断路器“打开”")]),_._v(" "),t("li",[t("strong",[_._v("“打开”转“半打开”：")]),_._v(" 如果已经熔断，就初始化一个定时器，定期检测服务状态的可用性，如果服务达到了熔断的倒计时，则设置当前熔断器为“半打开”状态 "),t("strong",[_._v("（在这个半打开状态下，熔断器定时去访问有问题的服务，记录成功的次数、失败的次数）")])]),_._v(" "),t("li",[t("strong",[_._v("“半打开”转“关闭”：")]),_._v(" 如果服务状态是半打开，则判断成功次数是否超过阈值，超过则设置断路器的状态为“关闭”")])]),_._v(" "),t("p",[_._v("这样，当某一个服务节点出现问题，服务调用者的熔断器就会实时监测到，并且不再请求有问题的服务节点，避免单个节点的故障导致整体系统的雪崩")]),_._v(" "),t("h3",{attrs:{id:"_3-降级设计的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-降级设计的原理"}},[_._v("#")]),_._v(" 3 降级设计的原理")]),_._v(" "),t("p",[_._v("降级设计本质上是站在系统整体可用性的角度上考虑问题：当资源和访问量出现矛盾时，在有限的资源下，放弃部分非核心功能或者服务，保证整体的可用性。这是一种有损的系统容错方式。\n这样看来，熔断也是降级的一种手段（除此之外还有限流、兜底服务等）。")]),_._v(" "),t("p",[_._v("降级的实现手段是：在请求流量突增的情况下，放弃一些非核心流程或非关键业务，释放系统资源，让核心业务正常运行。比如 618 零点大促，电商平台一般会暂时关闭评论、退款功能。\n那么问题来了，当你被问到“怎么做降级设计？”时，要怎么回答呢？")]),_._v(" "),t("h3",{attrs:{id:"_4-如何设计一个降级机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何设计一个降级机制"}},[_._v("#")]),_._v(" 4 如何设计一个降级机制")]),_._v(" "),t("p",[_._v("从架构设计的角度出发，"),t("strong",[_._v("降级设计就是在做取舍，你要从服务降级")]),_._v("和"),t("strong",[_._v("功能降级")]),_._v("两方面来考虑。\n在实现上，服务降级可以分为读操作降级和写操作降级。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("读操作降级：")]),_._v(" 做数据兜底服务，比如将兜底数据提前存储在缓存中，当系统触发降级时，读操作直接降级到缓存，从缓存中读取兜底数据，如果此时缓存中也不存在查询数据，则返回默认值，不在请求数据库。")]),_._v(" "),t("li",[t("strong",[_._v("写操作降级：")]),_._v(" 同样的，将之前直接同步调用写数据库的操作，降级为先写缓存，然后再异步写入数据库。")])]),_._v(" "),t("p",[_._v("我们提炼一下这两种情况的设计原则。")]),_._v(" "),t("ul",[t("li",[_._v("读操作降级的设计原则，就是取舍非核心服务。")]),_._v(" "),t("li",[_._v("写操作降级的设计原则，就是取舍系统一致性：实现方式是把强一致性转换成最终一致性。比如，两个系统服务通过 RPC 来交互，在触发降级时，将同步 RPC 服务调用降级到异步 MQ 消息队列中，然后再由消费服务异步处理。")])]),_._v(" "),t("p",[t("strong",[_._v("而功能降级")]),_._v("就是在做产品功能上的取舍，既然在做服务降级时，已经取舍掉了非核心服务，那么同样的产品功能层面也要相应的进行简化。在实现方式上，可以通过降级开关控制功能的可用或不可用。\n另外，在设计降级时，离不开降级开关的配置，一般是通过参数化配置的方式存储在配置中心（如 Zookeeper），在高并发场景下，手动或自动开启开关，实现系统降级")])])}),[],!1,null,null,null);t.default=r.exports}}]);