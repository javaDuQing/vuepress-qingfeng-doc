(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{479:function(e,t,a){"use strict";a.r(t);var i=a(2),r=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"jms-java-message-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jms-java-message-service"}},[e._v("#")]),e._v(" JMS（Java message service）")]),e._v(" "),t("blockquote",[t("p",[e._v("由Sun公司早期提出的消息标准，是一个Java平台中关于面向消息中间件的API，旨在为java应用提供统一的消息操作。")])]),e._v(" "),t("p",[e._v("相关概念：")]),e._v(" "),t("ul",[t("li",[e._v("提供者：实现JMS规范的消息中间服务器")]),e._v(" "),t("li",[e._v("客户端：发送或接收消息的应用程序")]),e._v(" "),t("li",[e._v("生产者/发布者：创建并发送消息的客户端")]),e._v(" "),t("li",[e._v("消费者/订阅者：接收并处理消息的客户端")]),e._v(" "),t("li",[e._v("消息：应用程序之间传递的数据内容")])]),e._v(" "),t("p",[e._v("JMS具有两种通信方式：（即点对点和发布订阅模型）")]),e._v(" "),t("ul",[t("li",[e._v("Point-to-Point（P2P）")]),e._v(" "),t("li",[e._v("Publish/Subscribe(Pub/Sub)")])]),e._v(" "),t("h3",{attrs:{id:"点对点模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#点对点模式"}},[e._v("#")]),e._v(" 点对点模式")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1678517725110-30ef811b-e2de-44cf-9aa3-3022f2478850.png#averageHue=%23ebe6d5&clientId=ua93161ee-9d34-4&from=paste&height=75&id=u9d1d697b&name=image.png&originHeight=149&originWidth=487&originalType=binary&ratio=2&rotation=0&showTitle=false&size=49027&status=done&style=none&taskId=u113e5d94-b831-4970-b1f6-fc92c467849&title=&width=243.5",alt:"image.png"}})]),e._v(" "),t("p",[e._v("特点：")]),e._v(" "),t("ul",[t("li",[e._v("每个消息只有一个消费者（Consumer）(即一旦被消费，消息就不再在消息队列中)；")]),e._v(" "),t("li",[e._v("发送者和接收者之间在时间上没有依赖性，也就是说当发送者发送了消息之后，不管接收者有没有正在运行，它不会影响到消息被发送到队列；")]),e._v(" "),t("li",[e._v("接收者在成功接收消息之后需向队列应答成功。")])]),e._v(" "),t("h3",{attrs:{id:"发布订阅模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅模式"}},[e._v("#")]),e._v(" 发布订阅模式")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1678517803376-702197ed-f29b-45b8-bb68-23cd6ad0100b.png#averageHue=%23e2d6c4&clientId=ua93161ee-9d34-4&from=paste&height=119&id=u335d677a&name=image.png&originHeight=237&originWidth=438&originalType=binary&ratio=2&rotation=0&showTitle=false&size=67617&status=done&style=none&taskId=uce07a30c-d701-49a0-8edb-8b36627f46f&title=&width=219",alt:"image.png"}})]),e._v(" "),t("p",[e._v("特点：")]),e._v(" "),t("ul",[t("li",[e._v("每个消息可以有多个消费者")]),e._v(" "),t("li",[e._v("发布者和订阅者之间有时间上的依赖性。针对某个主题（Topic）的订阅者，它必须创建一个订阅者之后，才能消费发布者的消息，而且为了消费消息，订阅者必须保持运行的状态。")]),e._v(" "),t("li",[e._v("为了缓和这样严格的时间相关性，JMS允许订阅者创建一个可持久化的订阅。这样，即使订阅者没有被激活（运行），当它复活后，它也能接收到发布者的消息。")])]),e._v(" "),t("h2",{attrs:{id:"amqp-高级消息队列协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amqp-高级消息队列协议"}},[e._v("#")]),e._v(" AMQP（高级消息队列协议）")]),e._v(" "),t("blockquote",[t("p",[e._v("AMQP（advanced message queuing protocol）在2003年时被提出，最早用于解决金融领不同平台之间的消息传递交互问题。顾名思义，AMQP是一种协议，更准确的说是一种binary wire-level protocol（链接协议）。这是其和JMS的本质差别，AMQP不从API层进行限定，而是直接定义网络交换的数据格式。这使得实现了AMQP的provider天然性就是跨平台的。意味着我们可以使用Java的AMQP provider，同时使用一个python的producer加一个rubby的consumer。从这一点看，AQMP可以用http来进行类比，不关心实现的语言，只要大家都按照相应的数据格式去发送报文请求")])]),e._v(" "),t("h3",{attrs:{id:"基础模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础模型"}},[e._v("#")]),e._v(" 基础模型")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1678518116849-cce6b559-54fc-4890-b0f5-a67abbf0b0d4.png#averageHue=%23f5f5ed&clientId=ua93161ee-9d34-4&from=paste&height=451&id=ubfeba881&name=image.png&originHeight=902&originWidth=1826&originalType=binary&ratio=2&rotation=0&showTitle=false&size=319928&status=done&style=none&taskId=uf365e48f-8096-4732-9c80-6e41c6809a1&title=&width=913",alt:"image.png"}})]),e._v(" "),t("p",[e._v("工作过程：发布者（Publisher）发布消息（Message），经由交换机（Exchange）根据路由规则将收到的消息分发给与该交换机绑定的队列（Queue）；最后Broker会将消息投递给订阅了此队列的消费者，或者消费者按照需求自行获取")]),e._v(" "),t("h3",{attrs:{id:"交换器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#交换器"}},[e._v("#")]),e._v(" 交换器")]),e._v(" "),t("p",[e._v("交换机拿到一个消息之后将它路由给一个或零个队列，有4种交换机：\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/375413/1678518216821-05d1cb49-7134-4630-b4ea-5e10de414909.png#averageHue=%23f4f4f3&clientId=ua93161ee-9d34-4&from=paste&height=251&id=ua5f820ae&name=image.png&originHeight=502&originWidth=770&originalType=binary&ratio=2&rotation=0&showTitle=false&size=131936&status=done&style=none&taskId=ufc825a46-73f3-46a4-8a61-ecb8cea4706&title=&width=385",alt:"image.png"}})]),e._v(" "),t("h3",{attrs:{id:"direct-exchange-直连"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#direct-exchange-直连"}},[e._v("#")]),e._v(" Direct exchange 直连")]),e._v(" "),t("p",[e._v("直连型交换机是根据消息携带的路由键（routing key）将消息投递给对应绑定键的队列：")]),e._v(" "),t("ol",[t("li",[e._v("将一个队列绑定到某个交换机上时，赋予该绑定一个绑定键（Binding Key），假设为R")]),e._v(" "),t("li",[e._v("当一个携带着路由键（Routing Key）为R的消息被发送给直连交换机时，交换机会把它路由给绑定键为R的队列")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/375413/1625229842806-a5416d90-266d-4fa0-babe-c69e033e045a.png#averageHue=%23f0f3e9&clientId=ubb8382fb-68d1-4&from=drop&id=u622a45fa&name=20181022130416336.png&originHeight=309&originWidth=641&originalType=binary&ratio=1&rotation=0&showTitle=false&size=137288&status=done&style=none&taskId=u5d61007a-d336-4861-9984-3be5850956f&title=",alt:"20181022130416336.png"}})]),e._v(" "),t("p",[t("em",[e._v("交换机与Queue1的绑定key是{booking}，与Queue2的绑定key是{create,booking,confire}")])]),e._v(" "),t("ul",[t("li",[e._v("当生产者发送消息时 Rotuing key=booking 时，这时候将消息传送给 Exchange，Exchange 获取到生产者发送过来消息后，会根据自身的规则进行与匹配相应的 Queue，这时发现 Queue1 和 Queue2 都符合，就会将消息传送给这两个队列")]),e._v(" "),t("li",[e._v("如果我们以 Rotuing key=create 和 Rotuing key=confirm 发送消息时，这时消息只会被推送到 Queue2 队列中，其他 Routing Key 的消息将会被丢弃")])]),e._v(" "),t("h3",{attrs:{id:"fanout-exchange-扇形"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fanout-exchange-扇形"}},[e._v("#")]),e._v(" Fanout exchange 扇形")]),e._v(" "),t("p",[e._v("扇型交换机将消息路由给绑定到它身上的所有队列，而不理会绑定的路由键。如果 N 个队列绑定到某个扇型交换机上，当有消息发送给此扇型交换机时，交换机会将消息的拷贝分别发送给这所有的 N 个队列\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/375413/1625230166911-145fd847-4dec-4350-a1aa-c57c7bcea666.png#averageHue=%23f7f5f1&clientId=u59ebd4bf-94b4-4&from=drop&id=ub53cdf88&name=20181022130646170.png&originHeight=309&originWidth=641&originalType=binary&ratio=1&rotation=0&showTitle=false&size=119275&status=done&style=none&taskId=u74ce6b5e-14bb-4a53-9ba4-51df959f96c&title=",alt:"20181022130646170.png"}})]),e._v(" "),t("p",[t("em",[e._v("上图所示，生产者（P）生产消息 1 将消息 1 推送到 Exchange，由于 Exchange Type=fanout 这时候会遵循 fanout 的规则将消息推送到所有与它绑定 Queue，也就是图上的两个 Queue 最后两个消费者消费")])]),e._v(" "),t("h3",{attrs:{id:"topic-exchange-主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#topic-exchange-主题"}},[e._v("#")]),e._v(" Topic exchange 主题")]),e._v(" "),t("p",[e._v("前面提到的 direct 规则是严格意义上的匹配，换言之 Routing Key 必须与 Binding Key 相匹配的时候才将消息传送给 Queue，而Topic 的路由规则是一种模糊匹配，可以通过通配符满足一部分规则就可以传送\n"),t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/375413/1625230319717-3f2a6b2f-b108-4334-a9f2-b9f01b0de39f.png#averageHue=%23f1f3ea&clientId=u59ebd4bf-94b4-4&from=drop&id=u82d927fb&name=20181022131252616.png&originHeight=309&originWidth=641&originalType=binary&ratio=1&rotation=0&showTitle=false&size=129156&status=done&style=none&taskId=udd104210-7a4b-440c-bf45-a197f80da2d&title=",alt:"20181022131252616.png"}})]),e._v(" "),t("p",[e._v("当生产者发送消息 Routing Key=F.C.E 的时候，这时候只满足 Queue1，所以会被路由到 Queue 中，如果 Routing Key=A.C.E 这时候会被同是路由到 Queue1 和 Queue2 中，如果 Routing Key=A.F.B 时，这里只会发送一条消息到 Queue2 中")]),e._v(" "),t("h3",{attrs:{id:"headers-exchange-头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#headers-exchange-头"}},[e._v("#")]),e._v(" Headers exchange 头")]),e._v(" "),t("p",[e._v("headers 类型的 Exchange 不依赖于 routing key 与 binding key 的匹配规则来路由消息，而是根据发送的消息内容中的 headers 属性进行匹配。头交换机可以视为直连交换机的另一种表现形式。但直连交换机的路由键必须是一个字符串，而头属性值则没有这个约束，它们甚至可以是整数或者哈希值（字典）：")]),e._v(" "),t("ol",[t("li",[t("em",[e._v("绑定一个队列到头交换机上时，会同时绑定多个用于匹配的头（header）")])]),e._v(" "),t("li",[t("em",[e._v("传来的消息会携带header，以及会有一个 “x-match” 参数。当 “x-match” 设置为 “any” 时，消息头的任意一个值被匹配就可以满足条件，而当 “x-match” 设置为 “all” 的时候，就需要消息头的所有值都匹配成功")])])]),e._v(" "),t("h2",{attrs:{id:"java-jms-与-amqp-对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-jms-与-amqp-对比"}},[e._v("#")]),e._v(" Java JMS 与 AMQP 对比")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th"),e._v(" "),t("th",[e._v("JMS")]),e._v(" "),t("th",[e._v("AMQP")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("定义")]),e._v(" "),t("td",[e._v("Java api")]),e._v(" "),t("td",[e._v("protocol")])]),e._v(" "),t("tr",[t("td",[e._v("跨语言")]),e._v(" "),t("td",[e._v("否")]),e._v(" "),t("td",[e._v("是")])]),e._v(" "),t("tr",[t("td",[e._v("跨平台")]),e._v(" "),t("td",[e._v("否")]),e._v(" "),t("td",[e._v("是")])]),e._v(" "),t("tr",[t("td",[e._v("模型")]),e._v(" "),t("td",[e._v("提供两种消息模型：Peer-2-Peer、Pub/sub")]),e._v(" "),t("td",[e._v("提供四种：direct、fanout、topic、header")])]),e._v(" "),t("tr",[t("td",[e._v("支持消息类型")]),e._v(" "),t("td",[e._v("多种消息类型：TextMessage MapMessage BytesMessage StreamMessage ObjectMessage Message （只有消息头和属性）")]),e._v(" "),t("td",[e._v("byte[] 当实际应用时，有复杂的消息，可以将消息序列化后发送")])]),e._v(" "),t("tr",[t("td",[e._v("综合评价")]),e._v(" "),t("td",[e._v("JMS 定义了JAVA API层面的标准；在java体系中，多个client均可以通过JMS进行交互，不需要应用修改代码，但是其对跨平台的支持较差")]),e._v(" "),t("td",[e._v("AMQP定义了协议层的协议标准；天然具有跨平台、跨语言特性")])])])]),e._v(" "),t("p",[e._v("其他消息队列协议：MQTT、STOMP、XMPP")]),e._v(" "),t("h2",{attrs:{id:"目前市面上的消息队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目前市面上的消息队列"}},[e._v("#")]),e._v(" 目前市面上的消息队列")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("消息队列")]),e._v(" "),t("th",[e._v("实现")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("ActiveMQ")]),e._v(" "),t("td",[e._v("基于JMS实现")])]),e._v(" "),t("tr",[t("td",[e._v("RabbitMQ")]),e._v(" "),t("td",[e._v("基于AMQP实现")])]),e._v(" "),t("tr",[t("td",[e._v("Redis、Kafka、RocketMQ")]),e._v(" "),t("td",[e._v("自身需要未严格遵循MQ规范，而是基于TCP/IP自行封装了一套协议，通过网络Socket接口进行传输，实现了MQ功能")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);